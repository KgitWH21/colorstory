// Offline authoring tool. The browser reads the resulting static rows in colors.js.
const fs = require('node:fs');
const vm = require('node:vm');
const sourcePath = require('node:path').join(__dirname, '..', 'colors.js');
let source = fs.readFileSync(sourcePath, 'utf8').replace(/\/\/ BEGIN WRITER EXPANSION[\s\S]*?\/\/ END WRITER EXPANSION\n/, '');
const context = vm.createContext({});
vm.runInContext(source, context);
const original = vm.runInContext('colors', context);
const motifs = {
  Red: `Signal red|354,90,50|signal lamps;red enamel;fresh cherries;painted buoys|the warning lamp
Flare red|5,95,51|road flares;festival cloth;red peppers;hot embers|the roadside flare
Coquelicot|10,90,53|poppy petals;red-orange silk;painted masks;bright lacquer|the field of poppies
Cadmium red|3,85,49|artist's pigment;red paint tubes;vermilion cloth;glazed pottery|the open paint box
Cardinal red|343,85,44|cardinal feathers;ceremonial robes;red ribbons;berry skins|the bird at the window
Cherry lacquer|350,95,46|lacquered boxes;cherry skins;red glass;polished beads|the lacquer box`,
  Rust: `Cinnabar earth|14,80,43|mineral dust;red sandstone;iron-rich clay;earthen bowls|the mineral seam
Burnt copper|21,80,39|copper filings;heated metal;orange-brown glaze;firelit stone|the copper workshop
Mars orange|18,85,48|earth pigment;orange clay;brick powder;warm plaster|the painter's courtyard`,
  Orange: `Flame orange|23,100,50|flame tips;orange safety cloth;fresh peel;signal flags|the flame in the kiln
Kumquat|29,95,53|kumquat skins;citrus sweets;orange enamel;bright paper|the kumquat stall
Nasturtium|16,85,55|nasturtium petals;orange silk;spiced oil;glazed terracotta|the garden gate
Calendula|34,95,51|calendula petals;orange dye;golden peel;woven garlands|the garland maker
Papaya|26,90,59|papaya flesh;orange sorbet;fruit juice;sunlit glass|the fruit seller
Amber resin|37,90,43|amber resin;pine sap;orange glass;varnished wood|the resin pendant
Tiger lily|20,95,57|lily petals;orange cloth;butterfly wings;bright glaze|the lily beside the fence
Fire opal|12,95,56|fire opal;red-orange glass;glowing coals;polished stone|the stone in the jeweler's tray`,
  Gold: `Lemon yellow|56,100,49|lemon peel;yellow ink;citrus sweets;bright glazed tiles|the lemon grove
Canary yellow|57,100,50|canary feathers;yellow ribbons;painted shutters;bright cotton|the birdcage
Sulfur yellow|64,95,48|sulfur crystals;yellow mineral powder;acid-yellow glass;lichen edges|the mineral cabinet
Chrome yellow|49,95,50|chrome-yellow pigment;yellow enamel;painted machinery;bright signs|the yellow sign
Cadmium yellow|52,95,51|paint tubes;yellow canvas;golden petals;bright lacquer|the painter's easel
Broom blossom|54,85,54|broom flowers;yellow silk;pollen dust;spring garlands|the lane beside the hedge
Citrine|46,90,44|citrine facets;yellow glass;golden resin;polished beads|the gemstone tray
Buttercup|51,100,56|buttercup petals;yellow satin;sunlit pollen;glazed bowls|the meadow path
Forsythia|60,90,58|forsythia branches;yellow paper;spring petals;bright woven cloth|the first flowering branch`,
  'Yellow green': `Electric lime|79,90,51|lime-colored ink;bright green glass;fresh zest;festival paper|the lime-colored sign
Apple green|88,85,46|green apple skins;young vine leaves;green enamel;fruit candy|the orchard basket
Acid yellow|69,100,50|acid-yellow pigment;yellow-green glass;citrus candy;bright lichen|the unexpected stain
Kiwi green|94,80,48|kiwi flesh;green fruit juice;fresh leaves;glazed beads|the fruit on the cutting board
Lime sherbet|83,85,62|lime sherbet;green candy;fresh citrus pulp;bright ceramics|the ice-cream counter
Gooseberry|74,75,45|gooseberry skins;green-gold glass;young seeds;leaf veins|the gooseberry patch
Lettuce green|99,85,53|lettuce leaves;green cotton;garden shoots;vegetable skins|the kitchen garden bed
Parrot lime|90,100,56|parrot feathers;bright leaf edges;green ribbons;painted toys|the aviary door`,
  Green: `Kelly green|138,75,40|green sports cloth;fresh clover;painted gates;bright enamel|the green jersey
Grass green|100,60,41|fresh grass;leaf blades;green paint;cut stems|the freshly mown field
Emerald|158,95,32|emerald facets;green glass;silk ribbons;polished enamel|the emerald clasp
Viridian|162,90,33|viridian paint;green ceramic glaze;deep green glass;wet leaves|the studio sink
Chromium green|126,85,39|green pigment;painted metal;leaf shadows;glazed pottery|the pigment shelf
Spring green|145,90,52|spring shoots;green silk;bright garden leaves;backlit glass|the first new shoot
Beryl green|151,75,56|beryl crystals;green crystal glass;fresh stems;translucent beads|the crystal collection
Jungle green|150,85,35|tropical leaves;wet vines;deep green enamel;fern fronds|the jungle footbridge
Shamrock|132,85,46|shamrock leaves;green ribbons;fresh parsley;painted wood|the clover beneath the step
Billiard green|141,90,31|billiard cloth;green felt;emerald wool;dark glazed tiles|the empty billiard room`,
  Teal: `Electric aqua|173,95,49|aqua ink;bright pool reflections;blue-green glass;glossy tiles|the illuminated pool
Persian green|166,95,36|green-blue tiles;glazed ceramics;woven silk;polished beads|the tiled archway
Caribbean teal|178,85,41|clear lagoon water;teal enamel;blue-green beads;painted boats|the island jetty
Peacock green|162,80,40|peacock feather eyes;green silk;iridescent beetle wings;glazed beads|the peacock in the courtyard
Amazonite|169,80,57|amazonite stone;blue-green enamel;bright mineral seams;polished cabochons|the stone cutter's bench
Chrysocolla|182,85,37|chrysocolla veins;blue-green mineral dust;ceramic glaze;colored glass|the mineral stall
Mint enamel|158,90,64|mint enamel;bright candy;glossy green glaze;sunlit bottle glass|the painted mint tin`,
  Cyan: `Cyan ink|193,100,42|cyan printing ink;bright blue glass;pool tiles;painted signs|the printing press
Electric turquoise|185,95,48|turquoise enamel;bright lagoon water;blue-green silk;colored beads|the lit aquarium
Pacific cyan|199,90,43|clear sea water;blue glass;bright tiles;painted shutters|the open sea crossing
Aqua enamel|188,90,57|aqua enamel;glazed bowls;bright pool liners;blue-green glass|the enamel pitcher
Blue zircon|203,85,47|zircon facets;blue gemstones;crystal glass;polished enamel|the zircon ring
Capri blue|195,95,52|blue grotto water;cyan silk;sunlit sea;bright blue tiles|the grotto entrance
Swimming-pool blue|190,100,62|pool water;blue plastic;bright aqua glaze;sunlit glass|the swimming lane`,
  Blue: `Cobalt|223,75,49|cobalt pigment;blue glass;painted porcelain;deep blue silk|the cobalt jar
Ultramarine|242,55,46|ultramarine paint;lapis dust;blue cloth;mineral pigment|the lapis workshop
Indigo|253,60,35|indigo dye;blue-violet cloth;ink washes;dyed yarn|the indigo vat
Klein blue|236,95,45|intense blue pigment;matte blue paint;blue canvas;dyed paper|the blue canvas
Egyptian blue|217,90,40|blue frit;painted stone;blue faience;mineral powder|the painted tomb wall
International blue|229,90,48|blue flags;painted signs;blue ribbons;bright enamel|the flag above the station
King's blue|213,80,51|blue silk;painted china;blue glass;ceremonial cloth|the royal-blue curtain
Smalt|231,70,44|smalt glass;ground blue pigment;glazed beads;blue tiles|the glassmaker's furnace
Lapis lazuli|225,85,37|lapis stone;blue cabochons;mineral veins;painted amulets|the stone in the pouch
Electric blue|207,100,55|electric-blue ink;bright signs;blue lights;glossy enamel|the glowing blue sign`,
  Violet: `Electric violet|270,80,49|violet light;bright purple ink;dyed silk;colored glass|the violet-lit window
Dioxazine violet|277,85,32|violet paint;purple pigment;dark petals;ink stains|the violet paint tube
Gentian|253,85,44|gentian petals;blue-violet glass;bright dye;silk ribbons|the mountain flower
Pansy violet|265,75,41|pansy petals;purple cloth;violet glaze;painted beads|the pot of pansies
Campanula|248,75,57|bellflower petals;violet-blue ink;bright ribbons;glazed ceramic|the bellflowers by the wall
Spectrum violet|282,95,47|violet pigment;purple light;dyed paper;bright enamel|the prism on the desk
Fluorite violet|260,80,51|fluorite crystals;purple mineral veins;translucent beads;colored glass|the fluorite specimen
Aniline violet|273,90,43|aniline dye;violet silk;purple ink;stained cotton|the dye maker's table`,
  Purple: `Tyrian purple|307,80,33|purple-dyed wool;dark silk;berry stains;ceremonial cloth|the purple robe
Royal purple|290,85,41|purple velvet;bright brocade;colored glass;dyed ribbons|the ceremonial room
Electric purple|296,95,49|purple ink;bright lights;dyed silk;glossy enamel|the purple neon sign
Cattleya|301,75,57|orchid petals;purple silk;floral ribbons;colored beads|the orchid display
Byzantium|318,80,35|purple-red silk;dark berry juice;dyed wool;embroidered cloth|the embroidered cloak
Petunia purple|286,80,51|petunia petals;bright fabric;purple glaze;flower dye|the hanging flower basket
Phlox purple|311,90,54|phlox flowers;purple-pink silk;bright ribbons;dyed paper|the phlox border
Purple enamel|292,90,58|purple enamel;painted jewelry;bright ceramic glaze;glass ornaments|the enameled brooch`,
  Pink: `Fuchsia|307,75,48|fuchsia flowers;bright magenta silk;berry dye;pink-purple glass|the fuchsia basket
Hot pink|329,90,57|hot-pink ink;bright satin;festival paper;painted toys|the pink festival banner
Cyclamen pink|321,85,52|cyclamen petals;bright pink ribbons;dyed silk;colored glass|the cyclamen on the sill
Opera pink|337,90,59|pink pigment;bright rose petals;stage silk;painted fans|the opera fan
Shocking pink|316,95,54|bright pink cloth;magenta ink;festival ribbons;pink enamel|the pink shop window
Quinacridone rose|345,80,48|rose pigment;pink-red ink;rose petals;dyed linen|the rose-colored canvas
Dragonfruit|325,80,49|dragonfruit skins;magenta fruit juice;pink glaze;bright pulp|the fruit market
Neon rose|339,95,52|rose-colored lights;pink lacquer;bright satin;red-pink glass|the neon-lit doorway
Cerise|334,85,43|cerise cloth;cherry juice;bright embroidery;berry-colored silk|the cerise scarf
Pink tourmaline|350,75,58|pink tourmaline;rose glass;polished gemstones;bright crystal facets|the tourmaline pendant`,
  Neutral: `Blue ash|215,12,47|cool ash;blue-gray stone;dull steel;gray wool|the cold fireplace
Green flint|140,12,46|green-gray flint;weathered stone;gray-green cloth;dull glass|the flint on the path
Rose graphite|335,12,43|rose-gray stone;muted pink wool;dusky plaster;soft graphite|the gray drawing room
Violet concrete|275,12,48|violet-gray concrete;shadowed stone;dusky wool;gray-purple plaster|the concrete stairwell`
};
const blackSeeds = `Absolute black|000000|unlit space;black ink;lightless velvet;deep shadow
Pitch black|040303|tar;pitch;black lacquer;charred resin
Obsidian|111820|obsidian glass;polished black stone;dark blades;volcanic fragments
Black coffee|1B1512|coffee grounds;dark roast beans;scorched wood;wet bark
Bitter chocolate|241710|bitter chocolate;roasted cacao;dark leather;burned sugar
Black forest|0A1C10|evergreen shadows;wet holly leaves;dark green wool;forest pools
Green-black ink|102019|green-black ink;dark leaves;green bottle shadows;wet moss
Black olive|24261A|black olive skins;dark olive canvas;shaded bay leaves;olive wood
Blackened burgundy|260F19|wine sediment;dark burgundy velvet;red lacquer shadows;dried petals
Black cherry ink|19070E|black cherry skins;berry ink;dark fruit juice;red-black glass
Black plum|201322|plum skins;purple velvet folds;dark purple ink;berry shadows
Aubergine ink|1B0B1D|eggplant skin;purple-black ink;dark satin;violet shadows
Black petrol|0A2020|deep water;dark teal tiles;petrol-colored enamel;green-blue ink
Raven black|050C1C|raven feathers;blue-black satin;night glass;ink-dark water
Black sapphire|07142B|dark sapphire;blue-black glass;polished blue stone;naval silk
Black basalt|181C1C|wet basalt;black paving;volcanic stone;dark mineral dust
Ivory black|28231A|warm black pigment;blackened bone;dark canvas;charred wood
Mars black|251918|iron-black pigment;dark rust seams;blackened iron;burned clay
Midnight mulberry|310D27|mulberry skins;purple-red velvet;dark jam;wine-black silk
Black spruce ink|051814|spruce needle shadows;deep green ink;dark resin;wet evergreen bark
Smoked onyx|202228|smoked onyx;dark gray glass;polished stone;blackened steel
Black amethyst|241037|amethyst shadows;purple-black crystal;dark violet silk;ink-black petals
Black ink|12101A|dried black ink;dark paper edges;violet-black stains;matte black cloth
Black indigo|16082B|indigo-black dye;night-blue cloth;dark violet ink;dyed yarn`;

function hsl(hex) {
  const [r,g,b] = [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
  const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,l=(max+min)/2;
  const h=d?60*(max===r?((g-b)/d+6)%6:max===g?(b-r)/d+2:(r-g)/d+4):0;
  return [h,d?d/(1-Math.abs(2*l-1)):0,l];
}
function hexOf(h,s,l) {
  h=((h%360)+360)%360;
  const a=s*Math.min(l,1-l),f=n=>{const k=(n+h/30)%12;return l-a*Math.max(-1,Math.min(k-3,9-k,1));};
  return '#'+[f(0),f(8),f(4)].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('').toUpperCase();
}
function lab(hex) {
  const [r,g,b]=[1,3,5].map(i=>{const v=parseInt(hex.slice(i,i+2),16)/255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});
  const l=Math.cbrt(.4122214708*r+.5363325363*g+.0514459929*b),m=Math.cbrt(.2119034982*r+.6806995451*g+.1073969566*b),s=Math.cbrt(.0883024619*r+.2817188376*g+.6299787005*b);
  return [.2104542553*l+.793617785*m-.0040720468*s,1.9779984951*l-2.428592205*m+.4505937099*s,.0259040371*l+.7827717662*m-.808675766*s];
}
const distance=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
const points=original.map(c=>lab(c.hex)),names=new Set(original.map(c=>c.name.toLowerCase())),hexes=new Set(original.map(c=>c.hex.toUpperCase()));
const additions=[];
const fixed={'Signal red':'#EB1525','Flame orange':'#FF6200','Lemon yellow':'#F5E500','Canary yellow':'#FFEF00','Electric lime':'#B6EE18','Kelly green':'#18B347','Grass green':'#53A52A','Cobalt':'#2055D8','Ultramarine':'#3533B8','Electric violet':'#7920DC','Fuchsia':'#D520BA','Hot pink':'#F52C95','Cyan ink':'#00A8D6'};
function add(family,hex,name,associations,story) {
  if(names.has(name.toLowerCase())||hexes.has(hex))throw Error('Duplicate '+name+' '+hex);
  names.add(name.toLowerCase());hexes.add(hex);points.push(lab(hex));additions.push([family,hex,name,associations,story]);
}
function choose(h,s,l,black=false) {
  let best=null;
  for(const dh of [-12,-8,-4,0,4,8,12])for(const ds of [-.3,-.2,-.1,0,.1])for(const dl of (black?[-.025,-.0125,0,.0125,.025]:[-.14,-.1,-.06,-.03,0,.03,.06,.1,.14])){
    const sat=Math.max(0,Math.min(1,s+ds)),light=Math.max(.005,Math.min(.9,l+dl));
    if(black&&light>.16)continue;
    if(!black&&s<.2&&sat>.18)continue;
    const hex=hexOf(h+dh,sat,light);if(hexes.has(hex))continue;
    const p=lab(hex),gap=Math.min(...points.map(q=>distance(p,q)));
    // Favor clearly separated colors, then fidelity to the curated pigment.
    const score=Math.min(gap,black?.025:.035)-.001*(Math.abs(dh)/12+Math.abs(ds)/.3+Math.abs(dl)/(black?.025:.14));
    if(!best||score>best.score)best={hex,gap,score};
  }
  if(!best)throw Error('No candidate');return best.hex;
}
for(const line of blackSeeds.split('\n')) {
  const [name,raw,associations]=line.split('|'),seed='#'+raw;
  const [h,s,l]=hsl(seed),hex=name==='Absolute black'?seed:choose(h,s,l,true);
  add('Black',hex,name,associations,`The ${name.toLowerCase()} ${['coat','door','letter','window','stone','ribbon'][additions.length%6]}`);
}
const bases=Object.entries(motifs).flatMap(([family,text])=>text.split('\n').map(line=>{const[name,raw,associations,scene]=line.split('|');const[h,s,l]=raw.split(',').map(Number);return{family,name,h,s:s/100,l:l/100,associations,scene};}));
for(const base of bases.filter(base=>fixed[base.name]))add(base.family,fixed[base.name],base.name,base.associations,base.scene[0].toUpperCase()+base.scene.slice(1));
for(const tier of ['','Deep','Luminous','Pale'])for(const base of bases){
  if(!tier&&fixed[base.name])continue;
  let name=tier?`${tier} ${base.name.toLowerCase()}`:base.name;
  if(names.has(name.toLowerCase()))name=`Pigment ${name.toLowerCase()}`;
  const light=tier==='Deep'?.34:tier==='Luminous'?.64:tier==='Pale'?.79:base.l;
  const hex=!tier&&fixed[base.name]?fixed[base.name]:choose(base.h,base.s,light);
  const story=!tier?base.scene[0].toUpperCase()+base.scene.slice(1):`${tier==='Deep'?'A shadow over':tier==='Luminous'?'Light on':'The memory of'} ${base.scene}`;
  add(base.family,hex,name,base.associations,story);
}
if(additions.length!==416)throw Error('Expected 416 additions, got '+additions.length);
const block=`// BEGIN WRITER EXPANSION\n// Curated pigment motifs; HEX values selected offline for perceptual separation.\nconst writerExpansion = ${JSON.stringify(additions,null,2)};\nfamilies.push(['Black', []]);\nfor (const [family, hex, name, associations, story] of writerExpansion) {\n  families.find(([label]) => label === family)[1].push([hex, name, associations, story]);\n}\n// END WRITER EXPANSION\n`;
source=source.replace('const colors = families.flatMap',block+'const colors = families.flatMap');
// The Black family has no legacy association rows.
source=source.replace('...(i<8?extraAssociations[family][i]:[])','...(i<8&&extraAssociations[family]?extraAssociations[family][i]:[])');
fs.writeFileSync(sourcePath,source);
const gaps=additions.map((row,i)=>Math.min(...points.slice(0,original.length+i).map(p=>distance(lab(row[1]),p))));
console.log('Added',additions.length,'shades. Total:',original.length+additions.length);
console.log('Smallest distance to preceding colors:',Math.min(...gaps).toFixed(4));
console.log('Median distance:',gaps.sort((a,b)=>a-b)[Math.floor(gaps.length/2)].toFixed(4));
