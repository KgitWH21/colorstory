const $ = id => document.getElementById(id);
const rgbOf = hex => [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
function hslOf(hex){let [r,g,b]=rgbOf(hex).map(v=>v/255),mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn,l=(mx+mn)/2,h=0,s=0;if(d){s=d/(1-Math.abs(2*l-1));h=(mx===r?((g-b)/d+6)%6:mx===g?(b-r)/d+2:(r-g)/d+4)*60;}return[h,s,l]}
colors.forEach(c=>c.hsl=hslOf(c.hex));
const wheelColors=[...colors].sort((a,b)=>a.hsl[0]-b.hsl[0]);
$('shade-count').textContent=colors.length;
$('wheel-control').setAttribute('aria-label',`Color wheel, ${colors.length} named shades`);
$('footer-count').textContent=`COLOR STORY / ${colors.length} NAMED SHADES`;
// Sample the hue sequence into evenly spaced gradient stops so sparse hue
// ranges blend gently instead of changing within one tiny landing interval.
const ringStops=Array.from({length:25},(_,i)=>{
  const hue=i===24?360:wheelColors[Math.floor(i*wheelColors.length/24)].hsl[0];
  return `hsl(${hue} 56% 58%) ${i*15}deg`;
});
$('wheel').style.background='conic-gradient('+ringStops.join(',')+')';
let current=colors.find(c=>c.name==='Okinawa Rust'),spinning=false;
const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wheelMotion=new SpinWheel($('wheel-control'),$('wheel'),wheelColors,{
  reduced,
  onPreview:renderWheelPreview,
  onSelect:c=>{current=c;render();notice(`${c.name}. ${c.associations.join(' and ')}.`)},
  onBusy:busy=>{spinning=busy;$('spin').disabled=busy;$('spin').innerHTML=busy?'Spinning…':'Spin the wheel <span aria-hidden="true">↻</span>';renderPalette()},
  onSpin:()=>$('spin').click()
});
function readableInk(hex){const lum=rgbOf(hex).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);return lum>.179?'#101114':'#ffffff'}
function renderWheelPreview(c){$('wheel-preview').style.background=c.hex;$('wheel-preview').style.color=readableInk(c.hex);$('wheel-color-name').textContent=c.name;$('wheel-color-hex').textContent=c.hex;}
function notice(t){$('status').textContent=t;}
function nearest(h,s,l,excluded){return colors.filter(c=>!excluded.includes(c)).sort((a,b)=>score(a)-score(b))[0];function score(c){let dh=Math.abs(c.hsl[0]-h);dh=Math.min(dh,360-dh)/180;return dh*2+Math.abs(c.hsl[1]-s)*.45+Math.abs(c.hsl[2]-l)*.8;}}
function companions(c,mode){let [h,s,l]=c.hsl;let found=[c];let targets=mode==='neighbors'?[[h+30,s,l],[h-30,s,l]]:mode==='tonal'?[[h,s,Math.max(.15,l-.25)],[h,s,Math.min(.88,l+.25)]]:[[h+180,Math.max(.2,s),l],[h+180,s*.5,l>.5?.25:.72]];for(let [hh,ss,ll] of targets){let n=mode==='tonal'?colors.filter(x=>x.family===c.family&&!found.includes(x)).sort((a,b)=>Math.abs(a.hsl[2]-ll)-Math.abs(b.hsl[2]-ll))[0]:nearest((hh+360)%360,ss,ll,found);found.push(n)}return found;}
function selectColor(c){if(spinning)return false;current=c;wheelMotion.setColor(c);render();notice(`Selected ${c.name}`);return true;}
function renderPalette(){const list=companions(current,$('pairing').value);$('palette').replaceChildren(...list.map((c,i)=>{const b=document.createElement('button');b.className='palette-card';b.setAttribute('aria-label',`Explore ${c.name}, ${c.hex}`);b.disabled=spinning;b.innerHTML=`<span class="mini-swatch" style="background:${c.hex}"></span><span class="mini-info"><b>${c.name}</b><small>${i===0?'SELECTED':c.hex}</small></span>`;b.onclick=()=>selectColor(c);return b}));updateSearchSelection();}
function render(){const c=current;const [r,g,b]=rgbOf(c.hex);$('color-name').textContent=c.name;$('hex').textContent=c.hex;$('rgb').textContent=`RGB ${r}, ${g}, ${b}`;$('family-label').textContent=c.family;$('number').textContent=`${String(colors.indexOf(c)+1).padStart(3,'0')} / ${colors.length}`;$('color-block').style.background=c.hex;$('color-block').style.color=readableInk(c.hex);$('associations').textContent=c.associations.join(' · ');$('story-name').textContent=c.story;renderPalette();}
$('spin').onclick=()=>{if(spinning)return;const pool=colors.filter(c=>c!==current);const bytes=new Uint32Array(1);crypto.getRandomValues(bytes);wheelMotion.spinTo(pool[Math.floor(bytes[0]/4294967296*pool.length)])};
async function copy(text){try{await navigator.clipboard.writeText(text);notice('Copied to clipboard.')}catch{const field=document.createElement('textarea');field.value=text;field.style.position='fixed';field.style.top='0';document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();notice(ok?'Copied to clipboard.':'Copy unavailable in this browser. Select the text to copy.')}}
$('copy-name').onclick=()=>copy(current.name);$('hex').onclick=()=>copy(current.hex);$('rgb').onclick=()=>copy(`rgb(${rgbOf(current.hex).join(', ')})`);$('copy-all').onclick=()=>copy(`${current.name}\n${current.hex} · RGB ${rgbOf(current.hex).join(', ')}\nThink of: ${current.associations.join('; ')}\nStory name: ${current.story}`);$('pairing').onchange=()=>{$('search-pairing').value=$('pairing').value;renderPalette();if(searchMode()==='companions')renderSearch()};$('install').onclick=()=>$('install-dialog').showModal();let installPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('native-install').hidden=false});$('native-install').onclick=async()=>{if(installPrompt){await installPrompt.prompt();installPrompt=null;$('native-install').hidden=true}};

let searchState=null,searchAnchor=null,searchLimit=6,searchTimer;
const searchMode=()=>document.querySelector('input[name="search-mode"]:checked').value;
function updateSearchSelection(){
  document.querySelectorAll('.search-card').forEach(button=>{
    button.disabled=spinning;
    button.setAttribute('aria-pressed',String(button.dataset.color===current.hex));
  });
  $('search-anchor').disabled=spinning;
}
function setSearchAnchor(color){
  searchAnchor=color;
  if(![...$('search-anchor').options].some(option=>option.value===color.hex)){
    $('search-anchor').add(new Option(`${color.name} · ${color.hex}`,color.hex));
  }
  $('search-anchor').value=color.hex;
  $('search-anchor-swatch').style.background=color.hex;
}
function runSearch(){
  clearTimeout(searchTimer);
  searchTimer=null;
  searchState=ColorSearch.resolve($('color-search').value);
  searchLimit=6;
  $('clear-search').hidden=!$('color-search').value;
  $('search-anchor').replaceChildren();
  searchAnchor=null;
  if(searchState?.anchor){
    for(const color of searchState.matches)$('search-anchor').add(new Option(`${color.name} · ${color.hex}`,color.hex));
    // Broad searches can use an already selected member; specific searches use their own shade.
    setSearchAnchor(searchState.kind==='group'&&searchState.matches.includes(current)?current:searchState.anchor);
  }
  renderSearch();
}
function renderSearch(){
  const mode=searchMode();
  $('search-anchor-controls').hidden=mode!=='companions'||!searchAnchor;
  $('search-results').replaceChildren();
  $('search-summary').replaceChildren();
  $('search-more').hidden=true;
  if(!searchState)return;
  let results;
  if(mode==='imagery')results=ColorSearch.imagery(searchState);
  else if(mode==='companions')results=searchAnchor?companions(searchAnchor,$('search-pairing').value).slice(1).map(color=>({color})):[];
  else results=searchState.matches.map(color=>({color}));
  if(!results.length){
    const hint=mode==='imagery'?'Try a color or an image such as “moss,” “sea glass,” or “leather.”':mode==='companions'?'Choose a color name or HEX value to find its companions.':'Try a broad color such as “green,” a shade such as “sage,” or a HEX value such as #9B4934.';
    $('search-summary').textContent=`No ${mode==='imagery'?'related imagery':'colors'} found for “${$('color-search').value.trim()}”. ${hint}`;
    return;
  }
  const shown=results.slice(0,searchLimit);
  const summary=mode==='companions'?`${$('search-pairing').selectedOptions[0].text} companions for ${searchAnchor.name}. Tap a companion to explore it.`:mode==='imagery'?`Showing ${shown.length} of ${results.length} colors connected through imagery. Each card shows its sensory association.`:searchState.kind==='hex'?`Closest named shades to ${searchState.hex}. Showing ${shown.length} of ${results.length} matches.`:searchState.kind==='name'?`Shades closest to ${searchState.anchor.name}. Showing ${shown.length} of ${results.length} matches.`:`Showing ${shown.length} of ${results.length} shades for “${$('color-search').value.trim()}”.`;
  if(searchState.kind==='hex'){
    const swatch=document.createElement('span');swatch.className='query-swatch';swatch.style.background=searchState.hex;swatch.setAttribute('aria-hidden','true');$('search-summary').append(swatch);
  }
  $('search-summary').append(document.createTextNode(summary));
  for(const {color,phrase} of shown){
    const item=document.createElement('li');
    const button=document.createElement('button');button.type='button';button.className='palette-card search-card';button.dataset.color=color.hex;
    button.setAttribute('aria-label',`Explore ${color.name}, ${color.hex}${phrase?`, ${phrase}`:''}`);
    const swatch=document.createElement('span');swatch.className='mini-swatch';swatch.style.background=color.hex;
    const info=document.createElement('span');info.className='mini-info';
    const name=document.createElement('b');name.textContent=color.name;
    const hex=document.createElement('small');hex.textContent=color.hex;
    info.append(name,hex);
    if(phrase){const imagery=document.createElement('span');imagery.className='imagery-phrase';imagery.textContent=phrase;info.append(imagery)}
    button.append(swatch,info);
    button.onclick=()=>{
      if(!selectColor(color))return;
      setSearchAnchor(color);
      if(mode==='companions'){
        renderSearch();
        $('search-anchor').focus();
      }
    };
    item.append(button);$('search-results').append(item);
  }
  $('search-more').hidden=shown.length>=results.length;
  $('search-more').textContent=mode==='imagery'?'Show more imagery':'Show more shades';
  updateSearchSelection();
}
$('color-search-form').onsubmit=event=>{event.preventDefault();runSearch()};
$('color-search').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(runSearch,120)};
$('clear-search').onclick=()=>{$('color-search').value='';runSearch();$('color-search').focus()};
document.querySelectorAll('[data-query]').forEach(button=>button.onclick=()=>{$('color-search').value=button.dataset.query;runSearch()});
document.querySelectorAll('input[name="search-mode"]').forEach(input=>input.onchange=()=>{
  // Resolve pending typing immediately when changing modes.
  if(searchTimer){clearTimeout(searchTimer);searchTimer=null;runSearch()}
  if(searchMode()==='companions'&&searchState?.matches.includes(current))setSearchAnchor(current);
  searchLimit=6;renderSearch();
});
$('search-anchor').onchange=()=>{
  const color=colors.find(c=>c.hex===$('search-anchor').value);
  if(!color||!selectColor(color))return;
  setSearchAnchor(color);renderSearch();
};
$('search-pairing').onchange=()=>{$('pairing').value=$('search-pairing').value;renderPalette();renderSearch()};
$('search-more').onclick=()=>{
  const oldCount=$('search-results').children.length;
  searchLimit+=6;renderSearch();
  // Keep keyboard focus useful even when the final page hides Show more.
  $('search-results').children[oldCount]?.querySelector('button').focus();
};
wheelMotion.setColor(current);render();if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
