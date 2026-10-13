// Editorial shade names and sensory associations; HEX/RGB values are exact.
const families = [
['Red', [
['#3D101C','Oxblood','Old leather;dried rose petals','An old wound'],['#651D32','Burgundy','Wine sediment;velvet curtains','The empty theater'],['#8B2332','Garnet','Polished stone;pomegranate skin','A ring in candlelight'],['#A84343','Brick red','Kiln-fired clay;weathered masonry','The abandoned school'],['#BE4050','Rose madder','Dyed linen;pressed roses','A letter kept too long'],['#D52D3A','Scarlet','Lacquer;signal flags','The warning flag'],['#EE6774','Watermelon','Cut fruit;summer ice pops','The last summer'],['#F1A1AA','Dusty rose','Faded upholstery;dried petals','The guest bedroom']]],
['Rust', [
['#502B27','Burnt umber','Charred timber;dark earth','After the fire'],['#763B2E','Mahogany','Polished wood;aged leather','The captain’s desk'],['#9B4934','Okinawa Rust','Salt-eaten railings;corroded iron','The seawall gate'],['#B65F42','Terracotta','Roof tiles;unglazed pottery','Rain on the rooftops'],['#CC7354','Copper','Old coins;hammered metal','The coin in his palm'],['#D88B71','Clay pink','Wet clay;earthen walls','The potter’s hands'],['#E6A58E','Salmon','Fish flesh;sunlit stucco','The harbor at dawn'],['#F3C5B3','Shell pink','Conch interiors;washed shells','What the tide left']]],
['Orange', [
['#6D3B18','Bronze','Cast statues;dark honey','The forgotten monument'],['#945020','Cinnamon','Bark curls;spice dust','The kitchen cupboard'],['#BE651C','Burnt orange','Autumn leaves;glazed pottery','October afternoon'],['#DD7C27','Ochre orange','Desert stone;pumpkin rind','The canyon road'],['#F29438','Tangerine','Citrus peel;marigold petals','A market morning'],['#F7AB65','Apricot','Dried fruit;late sunlight','The orchard wall'],['#F4C193','Peach','Fruit flesh;faded silk','The dress in the attic'],['#F6DBC0','Biscuit','Baked dough;unbleached cloth','Breakfast before leaving']]],
['Gold', [
['#5F4B20','Dark olive gold','Old brass;dry reeds','The locked cabinet'],['#8B6B2E','Antique brass','Tarnished fittings;old keys','The key nobody used'],['#B28C38','Yellow ochre','Earth pigment;dry grass','The empty field'],['#D2A53C','Honey gold','Amber honey;wheat stalks','The harvest jar'],['#E7BC43','Saffron','Dyed cloth;flower stamens','A cloth in the wind'],['#F1D268','Straw','Dried stalks;woven baskets','The stable loft'],['#F2DFA0','Champagne','Pale silk;sunlit glass','The untouched toast'],['#F6ECCC','Ivory','Piano keys;aged enamel','The silent piano']]],
['Yellow green', [
['#424925','Dark olive','Olive skins;military canvas','The abandoned pack'],['#626A35','Moss','Damp stone;forest floors','Behind the shrine'],['#858447','Khaki','Canvas tents;dry lichen','The field tent'],['#9FAD46','Pea green','Split peas;unripe pears','The pantry jar'],['#B8C94A','Citron','Citrus rind;young leaves','The greenhouse door'],['#CEDF64','Chartreuse','Lime peel;bright lichen','The strange bloom'],['#D9DE9F','Pistachio','Nut flesh;faded paint','The ice-cream shop'],['#E7EBCC','Pale lichen','Chalky stone;silver-green leaves','The north-facing wall']]],
['Green', [
['#173E2E','Pine','Needle shadows;deep woodland','The last trail'],['#285C3E','Forest green','Fern beds;wet foliage','Under the canopy'],['#3E7553','Bottle green','Old glass;ivy leaves','The bottle on the beach'],['#4D9765','Jade','Polished stone;waxed leaves','The inherited pendant'],['#65AF79','Fern','Unfurling fronds;spring growth','The garden after rain'],['#8CAA92','Sage','Dusty leaves;dried herbs','The herb drawer'],['#A9CEB2','Celadon','Ceramic glaze;pale sea glass','The chipped bowl'],['#D4E8D8','Mint mist','Frosted glass;light green paper','Morning at the window']]],
['Teal', [
['#123D3C','Deep petrol','Oil-dark water;enamel paint','The flooded stairwell'],['#1C605A','Deep teal','Tidal channels;dark glazed tiles','The channel at dusk'],['#2F8075','Verdigris','Weathered copper;oxidized roofs','The old bell'],['#409E92','Sea green','Shallow water;glass fishing floats','The reef’s edge'],['#55BFB0','Turquoise','Mineral stone;lagoon water','Beyond the breakwater'],['#83C7B9','Seafoam','Sea glass;washed paint','The beach house'],['#AFDDD0','Pale jade','Translucent stone;glazed porcelain','The cup in her hands'],['#D7EEE5','Eau de nil','Pale silk;frosted green glass','The folded scarf']]],
['Cyan', [
['#183E4E','Deep ocean','Offshore water;storm shadows','Where the seabed vanishes'],['#285D70','Prussian teal','Blue ink;deep channels','The captain’s chart'],['#3B7D94','Blue slate','Wet slate;rain-dark stone','The roof in the rain'],['#489DB5','Cerulean','Open sky;painted shutters','The island afternoon'],['#5BBCD0','Aquamarine','Shallow reefs;blue-green glass','The swimming hole'],['#84C9D7','Glacier blue','Ice seams;glazed tiles','The frozen lake'],['#B1DFE7','Ice blue','Thin ice;pale glass','The first frost'],['#DAEDF0','Blue frost','Frosted windows;winter haze','The breath on the glass']]],
['Blue', [
['#18263E','Midnight blue','Night water;naval wool','The watch before dawn'],['#283F64','Ink blue','Fountain-pen ink;dark denim','The unfinished letter'],['#355E8C','Cobalt slate','Painted steel;storm clouds','The shipyard fence'],['#477CC0','Cornflower','Wildflowers;blue porcelain','The field beyond town'],['#6297DB','Azure','Clear skies;enameled signs','The cloudless day'],['#839BB6','Steel blue','Brushed metal;rain clouds','The elevator doors'],['#ABC4E4','Powder blue','Chalk pastels;faded cotton','The childhood bedroom'],['#D4E2F3','Porcelain blue','Glazed china;blue-white ice','The last teacup']]],
['Violet', [
['#29223F','Blackberry','Berry skins;velvet shadows','The hedge at night'],['#443663','Aubergine','Eggplant skin;heavy drapery','The curtained room'],['#61518C','Dusky violet','Dried flowers;faded brocade','The old bouquet'],['#7964B2','Iris','Flower petals;violet ink','The ink-stained cuff'],['#9780CC','Wisteria','Hanging blossoms;dyed silk','Under the garden arch'],['#AAA0C2','Lavender gray','Dried lavender;evening haze','The empty promenade'],['#C9BADD','Lilac','Spring blossoms;pastel chalk','The spring letter'],['#E6DDF0','Pale lavender','Scented paper;faded petals','The envelope lining']]],
['Purple', [
['#42243D','Dark plum','Plum skins;dark velvet','The winter coat'],['#68395E','Mulberry','Crushed berries;dyed wool','The stained fingertips'],['#895077','Heather','Moorland flowers;woven wool','The hillside path'],['#A45D96','Orchid','Flower petals;colored glass','The conservatory'],['#C47AB4','Mauve pink','Faded ribbons;rose shadows','The ribbon in the book'],['#C195B7','Dusty mauve','Old wallpaper;dried petals','The room left untouched'],['#DDB9D5','Thistle','Soft wool;thistle blossoms','The scarf on the hook'],['#EEDCEB','Pink lilac','Tissue paper;pale blossoms','The wrapped gift']]],
['Pink', [
['#582A3D','Black cherry','Dark fruit;stained wood','The orchard after dark'],['#853D5B','Wine rose','Wine stains;rose velvet','The spill on the table'],['#B34F7C','Raspberry','Berry juice;dyed satin','The summer stain'],['#D05B91','Deep rose','Rose petals;painted silk','The florist’s window'],['#E884AE','Flamingo','Feathers;pink grapefruit','The salt lagoon'],['#DCA2B8','Old rose','Faded fabric;vintage wallpaper','The wedding photograph'],['#EDBFD2','Blush','Petal interiors;powdered pigment','The folded letter'],['#F5DFE7','Petal pink','Fallen blossoms;pale tissue','The garden steps']]],
['Neutral', [
['#202124','Charcoal','Coal dust;charred wood','The cold hearth'],['#4A4B50','Graphite','Pencil marks;dark stone','The sketchbook page'],['#747779','Pewter','Old tankards;overcast skies','The rainbound morning'],['#A2A4A4','Silver gray','Worn silver;fog','The ferry crossing'],['#D2D2CC','Dove gray','Feathers;chalky plaster','The attic window'],['#EAE9E1','Chalk','Limestone;whitewashed walls','The classroom wall'],['#756255','Taupe','Mushroom caps;weathered bark','The woodland floor'],['#B39B80','Sandstone','Desert rock;dry sand','The ruined courtyard']]]
];
const additionalShades = [
  [
    "Red",
    "300D12",
    "Clotted crimson",
    "Dried blood;blackened cherry skins;wax seals in shadow;aged cordovan leather",
    "The seal on the summons"
  ],
  [
    "Red",
    "782C37",
    "Rosewood",
    "Cut rosewood;dark blush lacquer;red pear skins;worn violin varnish",
    "The violin case"
  ],
  [
    "Red",
    "922A39",
    "Alizarin crimson",
    "Oil paint on linen;madder-dyed wool;crushed red berries;the underside of rose petals",
    "The painter’s sleeve"
  ],
  [
    "Red",
    "B02738",
    "Carmine",
    "Red ink;festival banners;cranberry sauce;embroidered silk",
    "The procession route"
  ],
  [
    "Red",
    "BF5148",
    "Venetian red",
    "Faded frescoes;iron-rich plaster;red roof dust;sun-warmed masonry",
    "The wall beneath the mural"
  ],
  [
    "Red",
    "D94843",
    "Vermilion",
    "Shrine gates;red sealing wax;lacquered bowls;painted wooden masks",
    "The gate after rain"
  ],
  [
    "Red",
    "DC807D",
    "Faded coral",
    "Sun-bleached paint;old coral beads;rose-colored plaster;guava flesh",
    "The shutter facing the sea"
  ],
  [
    "Red",
    "E8B8B6",
    "Rose ash",
    "Dried pink petals;faded damask;rose quartz dust;old face powder",
    "The powder in the compact"
  ],
  [
    "Rust",
    "402B25",
    "Dark sepia",
    "Old photograph shadows;walnut ink;soaked bark;dark tobacco leaf",
    "The face in the photograph"
  ],
  [
    "Rust",
    "623628",
    "Chestnut",
    "Horse coats;chestnut shells;polished banisters;dark bread crust",
    "The stable door"
  ],
  [
    "Rust",
    "85412B",
    "Iron oxide",
    "Rusted bolts;red mineral seams;weathered culverts;orange-brown runoff",
    "The stain below the hinge"
  ],
  [
    "Rust",
    "A0522D",
    "Sienna",
    "Earth pigment;dry river clay;leather straps;sun-baked furrows",
    "The road beyond the fence"
  ],
  [
    "Rust",
    "B9694A",
    "Red earth",
    "Freshly exposed soil;broken terracotta;clay on boots;mud-brick walls",
    "The trench in the orchard"
  ],
  [
    "Rust",
    "C88767",
    "Canyon clay",
    "Sandstone ledges;pottery shards;dry ravines;dust on a windowsill",
    "The house above the wash"
  ],
  [
    "Rust",
    "DA9D86",
    "Baked adobe",
    "Earthen walls;sun-faded tiles;pinkish desert dust;rough pottery",
    "The courtyard at noon"
  ],
  [
    "Rust",
    "E8B9A4",
    "Shrimp shell",
    "Cooked shellfish;peach-colored stone;shell fragments;faded coral cotton",
    "The fishmonger’s counter"
  ],
  [
    "Orange",
    "512F19",
    "Roasted coffee",
    "Coffee beans;scorched sugar;dark walnut shells;oven-darkened crust",
    "The cup before sunrise"
  ],
  [
    "Orange",
    "80532D",
    "Saddle brown",
    "Oiled tack;worn belts;dry bark;aged leather satchels",
    "The rider’s empty saddle"
  ],
  [
    "Orange",
    "A56D36",
    "Caramel",
    "Cooked sugar;toffee shards;polished amber;bread crust",
    "The sweetshop window"
  ],
  [
    "Orange",
    "C4813B",
    "Raw sienna",
    "Golden earth;dry creek beds;ochre dust;weathered leather",
    "The dry river crossing"
  ],
  [
    "Orange",
    "DE8B48",
    "Persimmon",
    "Ripe fruit;orange earthenware;maple leaves;old orange enamel",
    "The fruit on the sill"
  ],
  [
    "Orange",
    "EBA16F",
    "Melon rind",
    "Cantaloupe skin;sun-faded awnings;warm peach stucco;dried papaya",
    "The closed market stall"
  ],
  [
    "Orange",
    "F3BB84",
    "Butterscotch",
    "Hard candy;amber glass in sunlight;pale toffee;golden pear flesh",
    "The jar behind the counter"
  ],
  [
    "Orange",
    "F3D0A8",
    "Almond cream",
    "Almond paste;unbleached silk;light pastry crust;cream-colored suede",
    "The lining of the glove"
  ],
  [
    "Gold",
    "4E4022",
    "Peat gold",
    "Dried peat edges;dark reeds;aged bronze;tea-stained wood",
    "The lantern in the marsh"
  ],
  [
    "Gold",
    "75602C",
    "Old coin",
    "Worn brass coins;aged buckles;tarnished medallions;dry tobacco",
    "The fare in his pocket"
  ],
  [
    "Gold",
    "9C7D30",
    "Mustard seed",
    "Ground mustard;old gold braid;dry seed heads;yellowed varnish",
    "The general’s old coat"
  ],
  [
    "Gold",
    "BF983D",
    "Beeswax",
    "Wax blocks;honeycomb;golden resin;varnished pine",
    "The candle maker’s bench"
  ],
  [
    "Gold",
    "D9B551",
    "Marigold gold",
    "Dried garlands;gold thread;ripe grain;mustard blossoms",
    "The garland on the door"
  ],
  [
    "Gold",
    "EACB7B",
    "Chamois",
    "Soft leather;buff paper;dried wheat;straw hats",
    "The polishing cloth"
  ],
  [
    "Gold",
    "EBDDAD",
    "Parchment",
    "Old writing skins;aged maps;yellowed book edges;faded cream linen",
    "The map beneath the floor"
  ],
  [
    "Gold",
    "F4E6B8",
    "Butter yellow",
    "Fresh butter;primrose centers;pale custard;sunlit muslin",
    "The morning kitchen"
  ],
  [
    "Yellow green",
    "343B23",
    "Bog olive",
    "Waterlogged moss;algae-dark pools;old canvas;olive leaves in shade",
    "The path that sank"
  ],
  [
    "Yellow green",
    "53603C",
    "Lichen olive",
    "Tree lichen;olive twigs;lichen-covered gravestones;dry bay leaves",
    "The name on the stone"
  ],
  [
    "Yellow green",
    "758152",
    "Artichoke",
    "Outer artichoke leaves;dusty agave;dry sage stems;faded green canvas",
    "The abandoned greenhouse"
  ],
  [
    "Yellow green",
    "939D65",
    "Dried fennel",
    "Seed stalks;sun-dried herbs;old straw matting;olive-green paper",
    "The bundle above the stove"
  ],
  [
    "Yellow green",
    "ADB961",
    "Pear skin",
    "Unripe pears;green-gold apples;new vine leaves;yellow-green glazed bowls",
    "The fruit before ripening"
  ],
  [
    "Yellow green",
    "C1CE7B",
    "Young bamboo",
    "Fresh bamboo leaves;split green cane;spring grasses;pale lime zest",
    "The grove behind the house"
  ],
  [
    "Yellow green",
    "D4DCA7",
    "Willow leaf",
    "Willow leaves in sunlight;soft green wool;faded botanical prints;young seed pods",
    "The branch at the window"
  ],
  [
    "Yellow green",
    "E1E7BA",
    "Celery heart",
    "Inner celery leaves;pale cabbage;sunlit leaf veins;light green linen",
    "The kitchen garden"
  ],
  [
    "Green",
    "103128",
    "Black spruce",
    "Dense evergreen shade;wet pine bark;dark green enamel;fir needles at dusk",
    "The cabin beyond the trees"
  ],
  [
    "Green",
    "24513A",
    "Bay leaf",
    "Fresh bay leaves;waxy ivy;green bottle shoulders;laurel wreaths",
    "The wreath left behind"
  ],
  [
    "Green",
    "386548",
    "Laurel",
    "Laurel leaves;deep green silk;shaded ferns;painted garden gates",
    "The gate into the orchard"
  ],
  [
    "Green",
    "568365",
    "Eucalyptus",
    "Round eucalyptus leaves;soft green bark;faded workwear;matte glazed pottery",
    "The branch in the vase"
  ],
  [
    "Green",
    "739B77",
    "Olive jade",
    "Cloudy green stone;lichen-covered branches;avocado skin highlights;old green ceramic",
    "The stone in her pocket"
  ],
  [
    "Green",
    "94B99B",
    "Sprout green",
    "Young shoots;sweet pea leaves;spring cabbage;green glass lit from behind",
    "The seedling in the crack"
  ],
  [
    "Green",
    "BDD6C0",
    "Green porcelain",
    "Pale ceramic glaze;milk glass with a green cast;sea-glass edges;unripe grape flesh",
    "The bowl on the shelf"
  ],
  [
    "Green",
    "E1ECDD",
    "Fennel mist",
    "Pale fennel stalks;nearly white jade;frosted pale-green glass;washed green linen",
    "The vase at daybreak"
  ],
  [
    "Teal",
    "103332",
    "Blackwater teal",
    "Deep shaded pools;wet dark tiles;algae-covered stone;green-black ink",
    "The well beneath the house"
  ],
  [
    "Teal",
    "20504C",
    "Patina shadow",
    "Dark copper patina;bronze crevices;tidal rock pools;weathered green doors",
    "The underside of the bell"
  ],
  [
    "Teal",
    "347068",
    "Oxidized copper",
    "Copper roofs;green-stained gutters;old bronze plaques;weathered metal railings",
    "The roof nobody repaired"
  ],
  [
    "Teal",
    "4D8F83",
    "River jade",
    "River stones under water;cloudy jade;green ceramic bowls;wet reeds",
    "The river under the bridge"
  ],
  [
    "Teal",
    "6DAA9B",
    "Weathered shutter",
    "Salt-faded shutters;old boat paint;green stucco;chalky painted wood",
    "The house at the harbor"
  ],
  [
    "Teal",
    "99C7B7",
    "Tidal glass",
    "Rounded beach glass;shallow sand-bottomed water;pale green bottles;thin jade slices",
    "The glass after the storm"
  ],
  [
    "Teal",
    "C2E0D3",
    "Green opal",
    "Milky green stone;translucent porcelain;watery paint washes;sea-glass highlights",
    "The gem in the drawer"
  ],
  [
    "Teal",
    "E0F0E7",
    "Sea-glass white",
    "Almost colorless beach glass;white jade with green veins;pale mint enamel;thin porcelain rims",
    "The rim of the broken cup"
  ],
  [
    "Cyan",
    "102E3D",
    "Abyssal blue",
    "Deep water shadows;dark blue glass;black-blue tiles;wet ink on stone",
    "The light below the boat"
  ],
  [
    "Cyan",
    "234C60",
    "Harbor blue",
    "Shaded harbor water;blue work jackets;storm-dark paint;naval charts",
    "The last ferry berth"
  ],
  [
    "Cyan",
    "386C80",
    "Kingfisher slate",
    "Blue-green feather shadows;wet blue stone;old fountain tiles;oxidized blue metal",
    "The fountain without water"
  ],
  [
    "Cyan",
    "508CA0",
    "Worn denim teal",
    "Washed blue-green denim;faded fishing nets;weathered boat hulls;slate in sunlight",
    "The jacket on the pier"
  ],
  [
    "Cyan",
    "70AFC0",
    "Blue topaz",
    "Pale blue gemstones;clear pool tiles;sunlit blue glass;glacier meltwater",
    "The ring at the bottom"
  ],
  [
    "Cyan",
    "9ACFDA",
    "Pool tile",
    "Glazed swimming-pool tiles;blue glass bowls;shallow clear water;faded turquoise signs",
    "The drained swimming pool"
  ],
  [
    "Cyan",
    "C4E2E7",
    "Saltwater blue",
    "Water over white sand;pale aqua glass;washed blue linen;ice along a lake edge",
    "The shoal at low tide"
  ],
  [
    "Cyan",
    "E6F1F2",
    "Blue milk glass",
    "Opalescent pale-blue glass;thin ice;blue-white porcelain;mist over snow",
    "The bottle on the windowsill"
  ],
  [
    "Blue",
    "101C30",
    "Blue-black ink",
    "Fresh ink pools;navy wool in shadow;deep night sky;darkened steel",
    "The signature at midnight"
  ],
  [
    "Blue",
    "223550",
    "Storm navy",
    "Rain clouds at dusk;old navy uniforms;blue-black roof slate;open water before rain",
    "The storm beyond the island"
  ],
  [
    "Blue",
    "324D73",
    "Indigo denim",
    "Dark denim folds;indigo-dyed cotton;blue cloth bindings;ink-washed paper",
    "The pocket with the letter"
  ],
  [
    "Blue",
    "456B9B",
    "Wedgwood blue",
    "Blue ceramic reliefs;painted crockery;dusty blue shutters;faded officer’s cloth",
    "The plate behind the glass"
  ],
  [
    "Blue",
    "5D85B7",
    "Rainwashed blue",
    "Wet painted fences;faded blue canvas;rain-lit slate;worn chambray",
    "The fence after the storm"
  ],
  [
    "Blue",
    "8EADCF",
    "Forget-me-not",
    "Small blue blossoms;blue embroidery;pale summer sky;pastel pigment",
    "The flower inside the book"
  ],
  [
    "Blue",
    "BBD0E8",
    "Blue chalk",
    "Pastel dust;powder-blue walls;pale glazed pottery;faded blue paper",
    "The mark on the classroom wall"
  ],
  [
    "Blue",
    "E2EAF5",
    "Winter porcelain",
    "Blue-white china;snow in open shade;pale enamel basins;thin blue ice",
    "The basin in the cold room"
  ],
  [
    "Violet",
    "211C34",
    "Ink violet",
    "Purple-black ink;dark grape bloom;deep violet cloth;blackberry shadows",
    "The words under the blot"
  ],
  [
    "Violet",
    "3A3054",
    "Damson",
    "Dark plum skins;purple slate;dried berry stains;velvet in shadow",
    "The orchard wall at dusk"
  ],
  [
    "Violet",
    "52446F",
    "Heliotrope shadow",
    "Dark violet petals;purple wool;faded ecclesiastical cloth;slate-purple clouds",
    "The chapel at evening"
  ],
  [
    "Violet",
    "6F6097",
    "Amethyst smoke",
    "Cloudy amethyst;purple-gray glass;violet dusk clouds;faded silk lining",
    "The stone in the smoke"
  ],
  [
    "Violet",
    "8F7EBB",
    "Crocus",
    "Spring crocus petals;violet pastels;light purple ink;dyed silk ribbon",
    "The first flower through snow"
  ],
  [
    "Violet",
    "B0A1CF",
    "Lavender chalk",
    "Lavender pastel dust;pale iris petals;faded lilac paint;powdered violet pigment",
    "The sketch on the wall"
  ],
  [
    "Violet",
    "D4C7E5",
    "Wisteria mist",
    "Pale hanging blossoms;lavender-tinted glass;light lilac gauze;pressed flower edges",
    "The arbor after the rain"
  ],
  [
    "Violet",
    "EEE7F6",
    "Orchid white",
    "White petals with violet shading;pale amethyst edges;lavender-white porcelain;frosted lilac glass",
    "The flower in the empty room"
  ],
  [
    "Purple",
    "352132",
    "Prune",
    "Dried plum skins;deep purple leather;wine-dark wool;berry-stained wood",
    "The old traveling bag"
  ],
  [
    "Purple",
    "55314D",
    "Fig skin",
    "Purple fig skins;dark mauve silk;red cabbage shadows;plum-colored velvet",
    "The fig tree behind the wall"
  ],
  [
    "Purple",
    "764462",
    "Smoked plum",
    "Dried plum flesh;wine-stained linen;muted purple paint;old brocade",
    "The stain that stayed"
  ],
  [
    "Purple",
    "965781",
    "Mallow",
    "Mallow flowers;mulberry juice on cloth;purple-pink yarn;painted ceramics",
    "The flowers by the fence"
  ],
  [
    "Purple",
    "B574A4",
    "Foxglove",
    "Pink-purple flower bells;dyed ribbons;mauve glass;orchid petal veins",
    "The bells in the garden"
  ],
  [
    "Purple",
    "CCA2C4",
    "Heather silk",
    "Pale purple silk;heather blossoms;soft mauve wool;faded ribbon folds",
    "The scarf in the suitcase"
  ],
  [
    "Purple",
    "E3C8DE",
    "Mauve pearl",
    "Pearlescent shell interiors;light orchid petals;pink-lilac satin;pale amethyst beads",
    "The necklace on the dresser"
  ],
  [
    "Purple",
    "F1E3EE",
    "Magnolia shade",
    "Magnolia petal shadows;blushed white silk;pale orchid tissue;lavender-tinted cream paint",
    "The petal on the doorstep"
  ],
  [
    "Pink",
    "482132",
    "Dried hibiscus",
    "Dried hibiscus petals;berry tea stains;dark pink leather;red-purple bark",
    "The tea left to cool"
  ],
  [
    "Pink",
    "70314E",
    "Beetroot",
    "Cut beet flesh;magenta ink stains;dark rose velvet;red cabbage veins",
    "The knife on the board"
  ],
  [
    "Pink",
    "9B426C",
    "Bougainvillea",
    "Deep pink bracts;bright dyed cotton;berry sorbet;rose-colored glass",
    "The vine over the wall"
  ],
  [
    "Pink",
    "BE6089",
    "Camellia",
    "Pink camellia petals;rose satin;floral enamel;raspberry cream",
    "The bloom in the courtyard"
  ],
  [
    "Pink",
    "D484A6",
    "Rose quartz",
    "Cloudy pink stone;soft pink porcelain;faded ballet satin;petal undersides",
    "The stone held to the light"
  ],
  [
    "Pink",
    "E3A8C1",
    "Peony",
    "Layered peony petals;pink silk folds;rose confectionery;pale pink glass",
    "The bouquet in the sink"
  ],
  [
    "Pink",
    "F0CDDD",
    "Cherry blossom",
    "Pale cherry petals;pink tissue;blossom-strewn water;washed rose linen",
    "The river carrying spring"
  ],
  [
    "Pink",
    "F8E9F0",
    "Blossom white",
    "Nearly white pink petals;blushed porcelain;pale rose paper;faint pink frosting",
    "The last blossom on the branch"
  ],
  [
    "Neutral",
    "111315",
    "Lampblack",
    "Soot;unlit charcoal;black ink;burned wick ends",
    "The lamp after midnight"
  ],
  [
    "Neutral",
    "34383B",
    "Gunmetal",
    "Dark brushed steel;worn machinery;oxidized tools;graphite slabs",
    "The machine that stopped"
  ],
  [
    "Neutral",
    "5E6264",
    "Wet concrete",
    "Rain-soaked pavement;unfinished cement;dark mortar;storm-gray stone",
    "The empty parking structure"
  ],
  [
    "Neutral",
    "8B8E8B",
    "Ash gray",
    "Cold fireplace ash;weathered cement;gray bark;dusty slate",
    "The morning after the fire"
  ],
  [
    "Neutral",
    "BBBAB2",
    "Oyster shell",
    "Weathered shell exteriors;old plaster;pale driftwood;warm gray linen",
    "The shell in the gutter"
  ],
  [
    "Neutral",
    "F4F1E8",
    "Bone white",
    "Sun-bleached bone;unglazed porcelain;old ivory paper;chalky limestone",
    "The thing beneath the sand"
  ],
  [
    "Neutral",
    "8E7666",
    "Driftwood brown",
    "Salt-worn timber;dry mushroom gills;faded brown linen;weathered shingles",
    "The plank on the shore"
  ],
  [
    "Neutral",
    "CABAA2",
    "Unbleached linen",
    "Linen fibers;dry oatmeal;buff canvas;light sand",
    "The sheet over the furniture"
  ]
];
for (const [family, hex, name, associations, story] of additionalShades) { families.find(([f]) => f === family)[1].push(["#"+hex, name, associations, story]); }
const expandedFamilies = [
  ['Red', [
    ['#491821','Crimson velvet','Theater seats;dark cherries;velvet hems;red wine shadows','The seat in the back row'],
    ['#70202A','Red currant','Currant jelly;glazed berries;red glass;stained cutting boards','The jar in the cellar'],
    ['#812838','Cordovan','Polished boots;leather satchels;old saddles;book bindings','The boots by the door'],
    ['#983A42','Madder lake','Pigment cakes;dyed yarn;faded flags;paint-stained cloth','The dyer’s notebook'],
    ['#AC303D','Ruby lacquer','Lacquer boxes;glass beads;red enamel;polished garnets','The box beneath the bed'],
    ['#C23D46','Poppy red','Poppy petals;paper lanterns;signal lamps;red ribbons','The lantern at the crossing'],
    ['#E3454E','Tomato red','Tomato skins;market awnings;painted buckets;summer peppers','The stall at noon'],
    ['#E95D63','Geranium','Window-box flowers;red cotton;painted toys;bright lip stain','The flowers above the street'],
    ['#CB6A6C','Weathered rose','Faded red doors;rose clay;old quilts;worn silk','The door nobody painted'],
    ['#D88C90','Tea rose','Tea roses;pink pottery;washed cotton;faded invitations','The invitation in the drawer'],
    ['#E7A0A0','Coral blush','Coral beads;pink salt;soft peach skins;petal shadows','The necklace she left'],
    ['#EBB0AD','Pink clay','Pottery slip;rose plaster;sunlit tile;powdered clay','The unfinished vase'],
    ['#F2C6C5','Rosewater','Rosewater sweets;pale petals;pink glass;washed muslin','The bowl beside the window'],
    ['#F7D8D5','Apple blossom','Apple petals;blush paper;cream silk;dawn clouds','The orchard gate'],
    ['#B8797B','Cedar rose','Weathered cedar;faded brocade;dry petals;pink sandstone','The cedar chest'],
    ['#9D6268','Muted cranberry','Dried cranberries;old wool;rose shadows;wine-stained linen','The scarf from the winter market']
  ]],
  ['Rust', [
    ['#38201C','Hearth brown','Cold embers;smoked beams;dark pottery;burnt bark','The house after winter'],
    ['#5C3026','Walnut stain','Walnut shells;wood stain;leather belts;dry soil','The restored table'],
    ['#713226','Redwood','Redwood bark;wooden shingles;dry cedar;old paneling','The cabin in the clearing'],
    ['#8E4837','Burnished chestnut','Roasted chestnuts;polished timber;leather gloves;acorn shells','The gloves on the bench'],
    ['#A65B40','Potter’s earth','Earthenware;clay dust;roof fragments;sun-baked soil','The kiln at sundown'],
    ['#BA704F','Cedar bark','Peeling bark;clay paths;worn cork;dry leaves','The path behind the cabin'],
    ['#D17F5D','Copper glow','Copper pans;warm brick;coin edges;late sunlight','The pan above the stove'],
    ['#DB967D','Desert rose','Desert rocks;pink stucco;dry clay;weathered murals','The motel at dusk'],
    ['#EAAF94','Cantaloupe shell','Melon skins;salmon pottery;sunlit plaster;pale copper','The courtyard breakfast'],
    ['#F0BEAA','Peach stone','Peach pits;pink marble;warm pebbles;washed terracotta','The pebble from the canyon'],
    ['#F5D4C5','Blushed sand','Shell dust;pink beaches;pale brick;unfired porcelain','The beach before sunrise'],
    ['#F8E2D6','Warm shell','Shell interiors;cream paper;sunlit linen;pale stone','The shell on the sill'],
    ['#875D4C','Leather tan','Worn leather;tree roots;dry earth;wooden handles','The bag on the hook'],
    ['#AD806A','Fawn clay','Fawn fur;brown pottery;dusty tiles;raw cork','The empty pottery shop'],
    ['#C9A18E','Rose beige','Faded plaster;warm linen;pink pebbles;dry mushroom caps','The landing upstairs'],
    ['#DEC1B2','Adobe mist','Dusty adobe;washed cotton;clay powder;hazy canyon walls','The village beyond the dust']
  ]],
  ['Orange', [
    ['#452917','Espresso brown','Coffee grounds;dark toast;wood grain;roasted nuts','The café before opening'],
    ['#70431F','Toasted pecan','Pecan shells;oven crust;leather straps;dry bark','The pie cooling on the sill'],
    ['#92591F','Nutmeg','Ground spices;wooden spoons;tea leaves;autumn bracken','The spice tin'],
    ['#AF701F','Maple syrup','Maple syrup;amber bottles;warm varnish;fallen leaves','The sugarhouse door'],
    ['#C77822','Pumpkin','Pumpkin skins;orange glaze;wool scarves;ochre dust','The pumpkin on the steps'],
    ['#E1842E','Mandarin','Mandarin peel;festival cloth;marigolds;orange paper','The fruit in the coat pocket'],
    ['#F08D24','Zest orange','Citrus zest;traffic cones;bright enamel;nasturtiums','The detour through town'],
    ['#F6A047','Mango','Mango flesh;warm lanterns;orange candy;sunlit silk','The fruit seller’s umbrella'],
    ['#F8B477','Sunlit apricot','Apricot halves;peach jam;warm sand;faded curtains','The curtain in the morning'],
    ['#FACB9C','Peach nectar','Peach nectar;pale melon;cream pottery;soft candlelight','The glass at breakfast'],
    ['#F9DFC4','Oat biscuit','Oat biscuits;light wood;cream wool;sunlit paper','The biscuit tin'],
    ['#FBEAD9','Vanilla peach','Vanilla custard;pale silk;peach blossoms;cream plaster','The room above the bakery'],
    ['#A57C51','Honeyed oak','Oak flooring;dry leaves;worn baskets;toasted grain','The floor beneath the rug'],
    ['#C29969','Wheat crust','Bread crust;wheat bundles;buff leather;dry reeds','The loaf on the table'],
    ['#D6B18A','Toffee cream','Toffee wrappers;cream suede;light bark;almond shells','The sweets in the drawer'],
    ['#E9CBA9','Pale camel','Camel wool;unbleached paper;light sand;dry grasses','The coat on the train']
  ]],
  ['Gold', [
    ['#40351C','Bronze shadow','Bronze recesses;dark reeds;old buckles;dry peat','The buckle in the mud'],
    ['#685324','Smoked brass','Brass lamps;aged hinges;tobacco leaves;dark honey','The lamp in the hall'],
    ['#957327','Gilded olive','Olive wood;old gilt;dry stems;mustard powder','The frame around the portrait'],
    ['#AD872B','Harvest gold','Grain fields;gold thread;warm sandstone;dry straw','The field after harvest'],
    ['#C9A02E','Goldenrod','Goldenrod flowers;yellow cloth;wheat heads;gold paint','The path along the field'],
    ['#DFB735','Sunflower','Sunflower petals;yellow enamel;festival ribbons;corn kernels','The flowers at the fence'],
    ['#F0CA42','Dandelion','Dandelions;lemon candy;yellow pencils;buttercups','The lawn before mowing'],
    ['#F7DB78','Lemon chiffon','Lemon mousse;pale yellow silk;soft wax;sunlit curtains','The dress in the photograph'],
    ['#F5E3A1','Primrose','Primrose petals;cream blossoms;light straw;pale honey','The first flowers'],
    ['#F9EDC1','Custard','Egg custard;cream paper;vanilla wafers;warm porcelain','The dessert left untouched'],
    ['#FCF3D9','Candle cream','Wax candles;cream linen;pale parchment;soft lamplight','The candle beside the book'],
    ['#B49B65','Dry reed','Dry reeds;woven mats;old canvas;tanned grass','The reed bed in winter'],
    ['#C8B481','Wheat dust','Grain dust;buff wool;dry hay;weathered baskets','The granary window'],
    ['#DACEAA','Vellum','Vellum pages;faded maps;pale suede;old envelopes','The map without a date'],
    ['#E8D7B0','Pale honey','Light honey;cream glass;sunlit oak;beeswax polish','The jar in the sunlight'],
    ['#F3E8D1','Rice paper','Rice paper;ivory cloth;pale wheat;cream shells','The screen in the doorway']
  ]],
  ['Yellow green', [
    ['#29321C','Olive shadow','Olive branches;dark moss;wet seed pods;forest shade','The grove after sunset'],
    ['#48542C','Juniper olive','Juniper needles;olive cloth;leaf shadows;damp bark','The hidden footpath'],
    ['#69783B','Avocado skin','Avocado skins;green canvas;leaf undersides;lichen patches','The picnic basket'],
    ['#849544','Fern olive','Dry fern fronds;seedling leaves;olive glaze;green reeds','The reeds by the bridge'],
    ['#A0B44B','Meadow lime','Meadow grass;young pears;green apples;fresh shoots','The meadow after mowing'],
    ['#B7CC56','Lime zest','Lime zest;bright leaves;green candy;spring buds','The lime in the glass'],
    ['#D0E479','Lemon leaf','New citrus leaves;yellow-green glass;sunlit grass;lime sorbet','The tree by the kitchen'],
    ['#E0EDAD','Honeydew','Honeydew flesh;pale foliage;light jade;green paper','The melon at breakfast'],
    ['#EDF2D0','Green chalk','Pale chalk;cream leaves;light lichen;washed linen','The schoolroom in spring'],
    ['#F3F5E4','Linen leaf','Green-tinted linen;cream buds;thin porcelain;morning mist','The sheets on the line'],
    ['#5D6242','Marsh lichen','Marsh plants;wet lichen;old canvas;damp moss','The marsh beyond the road'],
    ['#7E8760','Sage olive','Sage stems;dusty olives;dry leaves;woven wool','The garden in late summer'],
    ['#A1AB83','Dried thyme','Dried thyme;olive soap;faded green paint;seed husks','The herbs above the sink'],
    ['#BDC6A0','Soft fennel','Fennel stalks;light canvas;pale leaves;green-gray stone','The garden wall'],
    ['#D1D8B9','Pear mist','Pale pear skins;green silk;lichen dust;soft foliage','The orchard in fog'],
    ['#E5E9D7','Willow haze','Willow leaves;washed cotton;light moss;misty fields','The willow by the ferry']
  ]],
  ['Green', [
    ['#0D281D','Yew shadow','Yew needles;deep woods;dark glass;wet ivy','The path through the yews'],
    ['#1C4830','Holly','Holly leaves;green enamel;pine shade;waxed foliage','The wreath on the door'],
    ['#2C6941','Emerald grove','Emerald facets;wet leaves;green tiles;forest pools','The pool under the trees'],
    ['#3B8554','Malachite','Malachite bands;green stone;painted gates;glazed pots','The stone in the cabinet'],
    ['#51A46D','Garden mint','Mint leaves;fresh grass;green cotton;spring moss','The mint beside the steps'],
    ['#70BE88','Clover','Clover leaves;green ribbon;young fern;apple stems','The patch behind the barn'],
    ['#96D3A8','Apple mint','Mint tips;pale apples;green glass;light silk','The glasshouse bench'],
    ['#BCE4C6','Spring celadon','Celadon bowls;new leaves;green porcelain;soft yarn','The bowl in the shop window'],
    ['#DDF1E2','Mint cream','Mint sweets;pale jade;cream flowers;green-white tiles','The sweetshop counter'],
    ['#EFF7EF','Leaf white','White petals;light green paper;thin frost;pale buds','The buds before opening'],
    ['#3D5545','Cypress gray','Cypress foliage;weathered gates;green-gray wool;forest stones','The gate at the cemetery'],
    ['#627F69','Rosemary','Rosemary leaves;dusty needles;faded shutters;old garden chairs','The chair beneath the rosemary'],
    ['#83A28D','Garden sage','Sage foliage;green linen;soft moss;worn paint','The herb bed in autumn'],
    ['#A2BBA8','Mist fern','Fern shadows;foggy gardens;gray-green glaze;washed wool','The garden before dawn'],
    ['#C1D1C0','Lichen jade','Pale lichen;river stones;muted jade;green plaster','The stone bridge'],
    ['#DEE6D9','Pale eucalyptus','Eucalyptus dust;light foliage;faded cloth;cool cream stone','The leaves pressed in the journal']
  ]],
  ['Teal', [
    ['#0B2928','Tidal shadow','Deep tide pools;dark bottles;wet copper;shadowed reeds','The tide pool at night'],
    ['#15504B','Peacock shadow','Peacock feathers;dark teal velvet;river depths;glazed stone','The curtain behind the stage'],
    ['#23776E','Lagoon teal','Lagoon channels;green-blue glass;wet tiles;dark turquoise','The channel through the reef'],
    ['#319B8D','Tropical jade','Bright jade;sea tiles;painted boats;clear shoals','The boat in the shallows'],
    ['#46B7A5','Reef green','Reef water;turquoise beads;green enamel;sunlit shallows','The reef at low tide'],
    ['#68CEBB','Lagoon mint','Lagoon ripples;mint silk;sea glass;blue-green glaze','The scarf on the boat'],
    ['#92DECE','Aqua glass','Aqua bottles;light turquoise;pool reflections;glass floats','The float caught in the net'],
    ['#BCEBDD','Foam jade','Pale seafoam;jade dust;green glass;light silk','The foam along the seawall'],
    ['#DEF5EC','Lagoon mist','Pale water;green-white shells;misty glass;light porcelain','The inlet in the morning'],
    ['#EFF9F3','Seafoam white','White seafoam;pale glass;washed shells;mint-tinted paper','The edge of the wave'],
    ['#3E635E','Weathered teal','Faded boats;wet slate;green copper;old shutters','The boat left ashore'],
    ['#648780','River reed','River reeds;muted teal paint;green-gray stone;wet driftwood','The reeds around the landing'],
    ['#88AAA0','Patina silk','Patinated bronze;green silk;weathered tiles;faded wallpaper','The lining of the old coat'],
    ['#ACC9BE','Opal foam','Green opals;pale glazed bowls;light foam;sea-worn glass','The bowl from the island'],
    ['#CBDDD4','Estuary haze','Estuary mist;gray-green water;pale marble;washed curtains','The ferry in the fog'],
    ['#DDEAE1','Mist jade','Jade porcelain;pale foliage;cool plaster;clouded glass','The cup left to cool']
  ]],
  ['Cyan', [
    ['#0C2936','Trench blue','Ocean trenches;blue-black glass;night harbors;deep ink','The sounding line'],
    ['#16485C','Petrol blue','Petrol-blue enamel;dark water;ship hulls;blue stone','The hull in dry dock'],
    ['#226D86','Marine blue','Marine charts;deep pools;blue tiles;kingfisher wings','The chart on the wall'],
    ['#2D91AB','Blue lagoon','Lagoon water;blue glass;painted skiffs;pool tiles','The skiff beyond the pier'],
    ['#3AB4CC','Bright turquoise','Turquoise beads;clear pools;blue enamel;summer skies','The bracelet from the market'],
    ['#64CADC','Robin’s egg','Blue eggshells;light water;glazed cups;turquoise silk','The nest beneath the eaves'],
    ['#8DDAE5','Arctic pool','Meltwater pools;blue ice;cool glass;pale sky','The thaw at the glacier'],
    ['#B9EAF0','Frost aqua','Thin frost;pale pool tiles;blue-white shells;light gauze','The frozen fountain'],
    ['#DDF4F6','Ice mist','Icy mist;white-blue glass;frosted tiles;pale clouds','The lake beyond the fog'],
    ['#F0FAFB','Polar white','Snow shadows;white ice;cool paper;thin cloud','The snowfield at noon'],
    ['#3F6371','Harbor slate','Harbor stones;wet slate;dark blue wool;rainy water','The quay in the rain'],
    ['#628B99','Rain blue','Rain clouds;blue-gray glass;old roof tiles;faded sails','The sails after the storm'],
    ['#88AFBB','Duck egg','Duck eggs;faded blue paint;glazed pottery;hazy water','The kitchen dresser'],
    ['#ABCBD3','Blue pewter','Blue-gray metal;pale rain clouds;frosted glass;washed cotton','The cup at the station'],
    ['#CBDDE2','Cloud cyan','Pale clouds;blue-white linen;cool marble;misty windows','The window above the harbor'],
    ['#E2EBED','Mist blue','Thin fog;pale slate;cool plaster;blue-gray paper','The empty promenade at dawn']
  ]],
  ['Blue', [
    ['#0D1830','Night indigo','Night skies;dark ink;naval coats;deep blue velvet','The coat on the night train'],
    ['#1C2E56','Prussian blue','Prussian pigment;blue uniforms;ink bottles;deep shadows','The bottle in the desk'],
    ['#294776','Sapphire','Sapphire facets;blue glass;silk ties;polished enamel','The ring beneath the glove'],
    ['#3263A6','Royal blue','Royal-blue cloth;painted signs;blue ribbons;lapis stone','The ribbon at the fair'],
    ['#4086D0','Sky enamel','Blue enamel;clear sky;bright shutters;painted bicycles','The bicycle at the wall'],
    ['#66A4E4','Summer blue','Summer skies;blue chalk;pool reflections;fresh paint','The day without a cloud'],
    ['#95C1ED','Daybreak blue','Daybreak skies;pale denim;blue silk;light porcelain','The balcony before sunrise'],
    ['#BDDAF4','Angel blue','Pale blue ribbons;soft clouds;glazed tiles;light cotton','The ribbon in the keepsake box'],
    ['#DFEDFA','Sky milk','Blue-white glass;thin clouds;pale ice;cool porcelain','The pitcher on the sill'],
    ['#F0F5FC','Blue whisper','White-blue paper;frost haze;cool linen;pale sky','The first page of the notebook'],
    ['#3D4F6C','Blue dusk','Dusk clouds;slate shadows;old denim;blue-gray stone','The town at closing time'],
    ['#607799','Faded indigo','Faded jeans;washed canvas;storm skies;old blue paint','The jacket from the attic'],
    ['#859AB7','Pigeon blue','Pigeon feathers;gray-blue wool;cloudy glass;weathered metal','The birds at the station'],
    ['#AABCD5','Blue linen','Blue linen;washed cotton;soft chalk;hazy hills','The linen cupboard'],
    ['#C9D5E5','Horizon blue','Distant hills;cloud shadows;pale denim;cool marble','The horizon from the roof'],
    ['#DEE4EF','Blue pearl','Blue-tinted pearls;cool satin;light clouds;pale glaze','The pearl in the velvet box']
  ]],
  ['Violet', [
    ['#19162E','Violet night','Night violets;dark ink;velvet folds;plum shadows','The garden after midnight'],
    ['#32264F','Purple slate','Purple slate;dark petals;ink stains;shadowed stone','The slate roof at dusk'],
    ['#4B3977','Deep amethyst','Amethyst crystals;purple glass;dyed silk;dark irises','The crystal in the drawer'],
    ['#654DA0','Violet ink','Violet ink;printed stamps;purple ribbons;iris petals','The stamp on the envelope'],
    ['#8163C1','Bellflower','Bellflower petals;violet silk;colored glass;pastel pencils','The flowers along the path'],
    ['#A18AD7','Periwinkle violet','Periwinkle flowers;light purple paint;soft chalk;lavender cloth','The painted garden bench'],
    ['#BBA7E6','Hyacinth','Hyacinth florets;violet tissue;glazed beads;spring ribbons','The pot by the kitchen window'],
    ['#D7C7F0','Lilac veil','Lilac petals;sheer fabric;lavender paper;pale glass','The veil in the wardrobe'],
    ['#EDE3F8','Violet cream','Pale violets;cream satin;lavender soap;white-purple shells','The soap in the guest room'],
    ['#F6F0FC','Lavender white','White lavender;light gauze;pale clouds;violet-tinted paper','The letter written at dawn'],
    ['#504762','Violet smoke','Purple-gray smoke;dried stems;dusky wool;shadowed stone','The chimney at twilight'],
    ['#746A8B','Moorland violet','Moorland heather;old wool;muted petals;evening hills','The cottage on the moor'],
    ['#9890AF','Lavender stone','Lavender-gray stones;weathered plaster;soft suede;hazy ridges','The stone on the windowsill'],
    ['#B8AFCB','Lilac linen','Lilac linen;faded wallpaper;dry lavender;pale wool','The room beneath the eaves'],
    ['#D4CCDF','Dusk lilac','Dusk clouds;muted lilac petals;cool silk;pale chalk','The sky after the guests left'],
    ['#E8E3EE','Orchid mist','Orchid shadows;soft mist;pale lilac paper;white silk','The greenhouse before opening']
  ]],
  ['Purple', [
    ['#2D192B','Plum ink','Plum-black ink;dark satin;berry skins;deep velvet','The note without a signature'],
    ['#4A2846','Black fig','Fig skins;purple leather;dark petals;old velvet','The fig tree behind the house'],
    ['#66335D','Grape skin','Grape skins;dyed cotton;purple glass;fruit stains','The basket from the vineyard'],
    ['#844374','Hollyhock','Hollyhock petals;purple silk;embroidered cloth;colored enamel','The flowers against the wall'],
    ['#A35C95','Dahlia','Dahlia petals;purple ribbons;glazed pottery;dyed wool','The bouquet at the station'],
    ['#BE7FB2','Wild orchid','Wild orchids;mauve paper;violet silk;glass beads','The clearing beyond the trail'],
    ['#D39AC9','Mauve blossom','Mauve flowers;soft ribbons;pink-purple glass;light brocade','The ribbon around the bouquet'],
    ['#E7BDDE','Orchid blush','Orchid petals;pale silk;lavender sweets;pink glass','The orchid on the desk'],
    ['#F1D9EA','Magnolia pink','Magnolia petals;pale pink gauze;rose soap;cream silk','The tree outside her room'],
    ['#FAEDF6','Mallow white','Pale mallow;white-pink tissue;light porcelain;soft clouds','The gift left at the door'],
    ['#674C61','Plum taupe','Muted plum skins;old suede;purple-gray stone;faded velvet','The gloves in the drawer'],
    ['#8B7084','Heather ash','Dry heather;ash-colored wool;faded curtains;muted petals','The curtains in the empty house'],
    ['#AB90A5','Mauve suede','Mauve suede;old wallpaper;soft leather;dried flowers','The handbag in the wardrobe'],
    ['#C6AFC1','Thistle gray','Thistle down;gray-mauve cloth;soft wool;pale petals','The hillside in late summer'],
    ['#DFCEDB','Plum pearl','Mauve pearls;pale satin;clouded glass;light lilac silk','The pearls on the dressing table'],
    ['#EBE0E8','Heather fog','Fog over heather;pale wool;muted orchid petals;soft chalk','The moor before sunrise']
  ]],
  ['Pink', [
    ['#391B2A','Berry shadow','Dark berries;wine velvet;plum wood;rose shadows','The orchard without moonlight'],
    ['#60243F','Cranberry velvet','Cranberries;velvet ribbons;dark rose petals;wine stains','The ribbon in the drawer'],
    ['#8A2F59','Red beet','Cut beets;berry ink;purple-red silk;stained fingers','The cutting board'],
    ['#B43D79','Magenta rose','Magenta petals;bright satin;dyed feathers;berry jam','The rose in the buttonhole'],
    ['#D55496','Azalea','Azalea flowers;pink enamel;bright ribbons;festival paper','The hedge in full bloom'],
    ['#E875AD','Candy pink','Pink candy;bright cotton;painted toys;rose sorbet','The candy bag at the fair'],
    ['#F49BC5','Pink satin','Pink satin;rose petals;light candy;glazed beads','The dress on the hanger'],
    ['#F7BBDC','Cotton candy','Cotton candy;pale ribbons;soft blossoms;pink tissue','The fairground at dusk'],
    ['#FAD5E7','Pink frosting','Pink icing;pale peonies;soft yarn;rose paper','The cake in the kitchen'],
    ['#FDECF3','Rose white','White roses;blush porcelain;pale tissue;pink dawn haze','The roses on the bedside table'],
    ['#975C75','Rose smoke','Dried roses;muted velvet;pink-gray wool;faded silk','The bouquet kept all winter'],
    ['#B58099','Antique pink','Old pink wallpaper;faded lace;rose tiles;worn ribbons','The room in the photograph'],
    ['#CBA0B3','Rose linen','Rose linen;dusty petals;soft suede;washed cotton','The tablecloth on the line'],
    ['#DFBECC','Pink oyster','Pink shell interiors;pearl dust;light satin;pale pottery','The shells in the bowl'],
    ['#EED7E0','Blush mist','Blush paper;rose-tinted fog;pale petals;soft muslin','The garden through the window'],
    ['#F4E5EB','Petal frost','Frosted petals;pale silk;rose-white glass;light snow shadows','The roses after the frost']
  ]],
  ['Neutral', [
    ['#080A0C','Soot black','Chimney soot;black velvet;dark ink;coal fragments','The chimney sweep’s brush'],
    ['#292C30','Basalt','Basalt rock;dark pavement;wet stone;iron filings','The stone beneath the bridge'],
    ['#42484C','Iron gray','Iron tools;storm shadows;steel wool;slate dust','The tools in the shed'],
    ['#686F72','Slate gray','Roof slate;gray wool;river stones;cloud shadows','The roof over the station'],
    ['#929A9D','Tin gray','Tin cans;worn metal;overcast light;gray glass','The tin on the shelf'],
    ['#B6BEC0','Mist gray','Morning fog;silver cloth;pale stone;cool plaster','The road disappearing in mist'],
    ['#DBDFDF','Cloud gray','Light clouds;white-gray marble;washed linen;soft ash','The sky over the courtyard'],
    ['#F7F8F5','Paper white','White paper;fresh plaster;cotton sheets;porcelain cups','The unwritten page'],
    ['#362F2A','Dark truffle','Truffle skins;dark earth;old timber;brown wool','The basket in the woodland'],
    ['#574B40','Bark brown','Dry bark;mushroom caps;worn leather;wooden crates','The crate beneath the stairs'],
    ['#807266','Mushroom','Mushroom gills;weathered wood;warm stone;dry leaves','The basket after the rain'],
    ['#A59585','Warm stone','Warm pebbles;buff plaster;soft suede;dry clay','The steps in the afternoon'],
    ['#C2B5A5','Putty','Window putty;linen folds;pale wood;dusty shelves','The window being repaired'],
    ['#DED4C5','Oatmeal','Oat flakes;undyed wool;pale cork;cream paper','The bowl on a winter morning'],
    ['#EBE4D8','Limestone','Limestone walls;chalk dust;light canvas;cream shells','The wall beside the sea'],
    ['#FAF6ED','Alabaster','Alabaster lamps;warm porcelain;ivory silk;cream marble','The lamp beside the bed']
  ]]
];
for (const [family, rows] of expandedFamilies) {
  families.find(([name]) => name === family)[1].push(...rows);
}
const extraAssociations = {
  "Red": [
    [
      "Dark red boot polish",
      "aged saddle stitching"
    ],
    [
      "Ruby glass in shadow",
      "red onion skins"
    ],
    [
      "Cut garnet faces",
      "red currant jelly"
    ],
    [
      "Crushed brick dust",
      "red chimney pots"
    ],
    [
      "Faded red quilts",
      "rosehips"
    ],
    [
      "Red warning lamps",
      "festival ribbons"
    ],
    [
      "Guava pulp",
      "pink-red candy"
    ],
    [
      "Washed rose linen",
      "sun-faded curtains"
    ]
  ],
  "Rust": [
    [
      "Coffee-dark soil",
      "burned bark"
    ],
    [
      "Dark wood paneling",
      "violin varnish"
    ],
    [
      "Flaking harbor bollards",
      "red streaks beneath bolts"
    ],
    [
      "Broken flowerpots",
      "earthen roof ridges"
    ],
    [
      "Copper pipe highlights",
      "orange metal filings"
    ],
    [
      "Clay-dusted fingertips",
      "faded adobe"
    ],
    [
      "Coral fabric",
      "rose-orange clouds"
    ],
    [
      "Blush shell fragments",
      "pale peach stone"
    ]
  ],
  "Orange": [
    [
      "Aged bronze medals",
      "dark amber beads"
    ],
    [
      "Spice-stained wood",
      "dry oak leaves"
    ],
    [
      "Pumpkin-colored cloth",
      "orange brick dust"
    ],
    [
      "Golden canyon walls",
      "dried orange peel"
    ],
    [
      "Orange lanterns",
      "bright glazed tiles"
    ],
    [
      "Apricot jam",
      "sunlit peach paint"
    ],
    [
      "Dried peach slices",
      "warm pale plaster"
    ],
    [
      "Tan pastry edges",
      "buff book paper"
    ]
  ],
  "Gold": [
    [
      "Tarnished buckles",
      "olive-brown seed pods"
    ],
    [
      "Dull door handles",
      "old instrument fittings"
    ],
    [
      "Yellow clay banks",
      "ochre-stained boots"
    ],
    [
      "Golden syrup",
      "varnished wood"
    ],
    [
      "Golden ceremonial fabric",
      "dried calendula"
    ],
    [
      "Pale straw hats",
      "sun-dried reeds"
    ],
    [
      "Golden silk highlights",
      "pale amber glass"
    ],
    [
      "Aged billiard balls",
      "cream-colored stone"
    ]
  ],
  "Yellow green": [
    [
      "Old olive canvas",
      "shaded bay leaves"
    ],
    [
      "Velvety moss cushions",
      "green roof growth"
    ],
    [
      "Dried tobacco leaves",
      "dusty canvas bags"
    ],
    [
      "Green pea soup",
      "young olive fruit"
    ],
    [
      "Yellow-green apples",
      "lime candy"
    ],
    [
      "Acid-green glass",
      "fresh grape skins"
    ],
    [
      "Light green confectionery",
      "faded olive walls"
    ],
    [
      "Pale leaf undersides",
      "dry greenish plaster"
    ]
  ],
  "Green": [
    [
      "Deep green wool",
      "shaded holly leaves"
    ],
    [
      "Dense ivy",
      "wet evergreen boughs"
    ],
    [
      "Green wine bottles",
      "shaded laurel"
    ],
    [
      "Carved green beads",
      "enamel pendants"
    ],
    [
      "Young fern blades",
      "green painted fences"
    ],
    [
      "Silver-green herbs",
      "matte pottery"
    ],
    [
      "Pale ceramic bowls",
      "cloudy jade"
    ],
    [
      "Light mint paper",
      "washed green cotton"
    ]
  ],
  "Teal": [
    [
      "Dark green-blue ink",
      "shaded glazed stone"
    ],
    [
      "Deep swimming holes",
      "blue-green bottles"
    ],
    [
      "Green-stained bronze statues",
      "old copper gutters"
    ],
    [
      "Tidal pools",
      "weathered turquoise doors"
    ],
    [
      "Green-blue beads",
      "shallow tropical water"
    ],
    [
      "Light green-blue plaster",
      "foam-colored ceramics"
    ],
    [
      "Pale jade bangles",
      "milky green glass"
    ],
    [
      "Watery green paint",
      "fine silk lining"
    ]
  ],
  "Cyan": [
    [
      "Deep ocean troughs",
      "dark blue enamel"
    ],
    [
      "Shaded blue glass",
      "dark teal cloth"
    ],
    [
      "Blue-gray shingles",
      "wet paving slabs"
    ],
    [
      "Blue pottery glaze",
      "summer sky gaps"
    ],
    [
      "Aqua beads",
      "sunlit seawater"
    ],
    [
      "Ice-blue bottle glass",
      "faded pool paint"
    ],
    [
      "Blue-tinted glass edges",
      "frozen puddles"
    ],
    [
      "Pale blue tile",
      "mist over cold water"
    ]
  ],
  "Blue": [
    [
      "Dark navy uniforms",
      "blue-black velvet"
    ],
    [
      "Dried blue ink",
      "clothbound atlases"
    ],
    [
      "Dull blue enamel",
      "steel painted for sea"
    ],
    [
      "Blue flower petals",
      "painted china"
    ],
    [
      "Blue flags",
      "bright glazed bowls"
    ],
    [
      "Dull metal panels",
      "worn blue-gray canvas"
    ],
    [
      "Powder-blue shirts",
      "pastel-painted doors"
    ],
    [
      "Pale porcelain rims",
      "winter sky reflections"
    ]
  ],
  "Violet": [
    [
      "Deep purple fruit",
      "dark violet ink"
    ],
    [
      "Eggplant gloss",
      "purple-dyed leather"
    ],
    [
      "Faded violet upholstery",
      "purple-gray stone"
    ],
    [
      "Iris petal veins",
      "violet ribbon"
    ],
    [
      "Hanging purple flowers",
      "amethyst beads"
    ],
    [
      "Lavender wool",
      "purple-gray chalk"
    ],
    [
      "Pale lilac silk",
      "spring flower clusters"
    ],
    [
      "Pale violet tissue",
      "washed lilac linen"
    ]
  ],
  "Purple": [
    [
      "Dark plum preserves",
      "wine-colored leather"
    ],
    [
      "Mulberry stains",
      "dark purple cloth"
    ],
    [
      "Heather sprigs",
      "faded purple tweed"
    ],
    [
      "Orchid petal veins",
      "purple enamel"
    ],
    [
      "Mauve ribbons",
      "purple-pink paint"
    ],
    [
      "Faded floral wallpaper",
      "old mauve silk"
    ],
    [
      "Thistle heads",
      "pale lavender-pink yarn"
    ],
    [
      "Lilac-pink paper",
      "orchid-tinted porcelain"
    ]
  ],
  "Pink": [
    [
      "Cherry preserves",
      "dark rose leather"
    ],
    [
      "Wine-dark rose petals",
      "old pink lacquer"
    ],
    [
      "Raspberry pulp",
      "magenta embroidery"
    ],
    [
      "Rose-colored enamel",
      "pink camellias"
    ],
    [
      "Pink bird plumage",
      "rose sorbet"
    ],
    [
      "Dried rose buds",
      "faded pink drapery"
    ],
    [
      "Pale pink satin",
      "rose-tinted glass"
    ],
    [
      "Pink porcelain rims",
      "nearly white peony petals"
    ]
  ],
  "Neutral": [
    [
      "Blackened firewood",
      "charcoal sketches"
    ],
    [
      "Pencil graphite",
      "dark gray wool"
    ],
    [
      "Tin rooftops",
      "gray rainwater"
    ],
    [
      "Brushed silver",
      "gray beach stones"
    ],
    [
      "Dove wing feathers",
      "aged mortar"
    ],
    [
      "Chalk sticks",
      "pale limestone"
    ],
    [
      "Mushroom gills",
      "dry bark dust"
    ],
    [
      "Buff stone walls",
      "sun-dried river sand"
    ]
  ]
};
const colors = families.flatMap(([family, rows])=>rows.map(([hex,name,associations,story],i)=>({family,hex,name,associations:[...associations.split(";"),...(i<8?extraAssociations[family][i]:[])],story})));
