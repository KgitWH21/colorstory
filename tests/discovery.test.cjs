const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root=path.join(__dirname,'..'),context=vm.createContext({});
const source=fs.readFileSync(path.join(root,'colors.js'),'utf8');
vm.runInContext(source,context);
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
vm.runInContext(app.slice(0,app.indexOf('const wheelColors')),context);
for(const file of ['moods.js','discovery.js','search.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {colors,ColorMoods,ColorDiscovery,ColorSearch}=vm.runInContext('({colors,ColorMoods,ColorDiscovery,ColorSearch})',context);
const oldContext=vm.createContext({});
vm.runInContext(source.replace(/\/\/ BEGIN WRITER EXPANSION[\s\S]*?\/\/ END WRITER EXPANSION\n/,''),oldContext);
const originals=vm.runInContext('colors',oldContext);

test('832 valid shades preserve the original collection and add 24 blacks',()=>{
  assert.equal(colors.length,832);
  assert.equal(new Set(colors.map(c=>c.hex.toUpperCase())).size,832);
  assert.equal(new Set(colors.map(c=>c.name.toLowerCase())).size,832);
  assert.ok(colors.every(c=>/^#[0-9A-F]{6}$/i.test(c.hex)&&c.associations.length===4&&c.story.trim()));
  assert.equal(originals.length,416);
  for(const old of originals){const actual=colors.find(c=>c.name===old.name);assert.equal(actual.hex,old.hex);assert.equal(actual.story,old.story);assert.equal(JSON.stringify(actual.associations),JSON.stringify(old.associations));}
  assert.equal(colors.filter(c=>c.family==='Black').length,24);
  for(const name of ['Lemon yellow','Canary yellow','Kelly green','Electric lime','Cobalt','Ultramarine','Electric violet','Fuchsia','Hot pink','Signal red','Flame orange','Black coffee','Absolute black'])assert.ok(colors.some(c=>c.name===name),name);
});

test('new shades avoid perceptual near-duplicates of any existing or new shade',()=>{
  function lab(hex){
    const rgb=hex.match(/[0-9a-f]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
    const roots=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]].map(row=>Math.cbrt(row.reduce((sum,v,i)=>sum+v*rgb[i],0)));
    return [[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]].map(row=>row.reduce((sum,v,i)=>sum+v*roots[i],0));
  }
  const existing=new Set(originals.map(c=>c.hex)),labs=colors.map(c=>lab(c.hex));
  for(let i=0;i<colors.length;i++)if(!existing.has(colors[i].hex))for(let j=0;j<colors.length;j++)if(j!==i){
    const distance=Math.hypot(...labs[i].map((value,k)=>value-labs[j][k]));
    assert.ok(distance>=.02,`${colors[i].name} is too close to ${colors[j].name}: ${distance}`);
  }
});

test('moods and aliases find shades and combined queries stay in the requested color',()=>{
  for(const mood of ColorMoods.definitions)for(const alias of [mood.id,...mood.aliases]){
    const result=ColorSearch.resolve(alias);
    assert.equal(result.kind,'mood',alias);assert.ok(result.matches.length>=6,alias);
    assert.ok(result.matches.every(c=>ColorMoods.has(c,mood.id)),alias);
  }
  for(const query of ['calm blue','uneasy green','mysterious black','tender pink']){
    const result=ColorSearch.resolve(query),group=ColorSearch.resolve(query.split(' ')[1]);
    assert.ok(result.matches.length,query);assert.ok(result.matches.every(c=>group.matches.includes(c)),query);
  }
  assert.equal(ColorSearch.resolve('calm unknown-color').matches.length,0);
  assert.equal(ColorSearch.resolve('Weathered rose').kind,'name');
  assert.equal(ColorSearch.resolve('Weathered teal').kind,'name');
  const weathered=ColorSearch.resolveMood('Weathered teal');
  assert.equal(weathered.kind,'mood');assert.ok(weathered.matches.length);
  assert.ok(weathered.matches.every(c=>ColorMoods.has(c,'weathered')&&ColorSearch.resolve('teal').matches.includes(c)));
  assert.equal(ColorSearch.resolve('Fuchsia').kind,'name');
});

test('guided spin pools intersect mood and family and handle impossible combinations',()=>{
  for(const family of new Set(colors.map(c=>c.family)))for(const mood of ColorMoods.definitions){
    const result=ColorDiscovery.pool(family,mood.id,colors[0]);
    assert.ok(result.every(c=>c.family===family&&ColorMoods.has(c,mood.id)&&c!==colors[0]));
  }
  assert.equal(ColorDiscovery.pool().length,832);
  assert.equal(ColorDiscovery.pool('Black').length,24);
  assert.equal(ColorDiscovery.pool('Black','tender').length,0);
  assert.equal(ColorDiscovery.pool('not-a-family').length,0);
});

test('recent shades are bounded, deduplicated, restored and cleared',()=>{
  const stored=new Map(),storage={getItem:k=>stored.get(k),setItem:(k,v)=>stored.set(k,v)};
  const history=ColorDiscovery.createHistory(storage);
  for(const color of colors.slice(0,20))history.add(color);
  assert.equal(history.list().length,12);assert.equal(history.list()[0],colors[19]);
  history.add(colors[15]);assert.equal(history.list()[0],colors[15]);assert.equal(new Set(history.list()).size,12);
  const restored=ColorDiscovery.createHistory(storage);assert.equal(JSON.stringify(restored.list()),JSON.stringify(history.list()));
  restored.clear();assert.equal(restored.list().length,0);assert.equal(ColorDiscovery.createHistory(storage).list().length,0);
});

test('history tolerates corrupt data, deleted colors, and unavailable storage',()=>{
  for(const value of ['{broken','{}','[null,42,"#UNKNOWN","#000000","#000000"]']){
    const history=ColorDiscovery.createHistory({getItem:()=>value,setItem(){}});
    assert.ok(history.list().length<=1);assert.ok(history.list().every(c=>colors.includes(c)));
    history.add(colors[0]);assert.equal(history.list()[0],colors[0]);
  }
  const history=ColorDiscovery.createHistory({getItem(){throw Error('blocked')},setItem(){throw Error('quota')}});
  assert.equal(history.persistent,false);
  history.add(colors[0]);assert.equal(history.list()[0],colors[0]);history.clear();assert.equal(history.list().length,0);
});
