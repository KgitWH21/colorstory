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
