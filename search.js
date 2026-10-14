// Local color search: no network, accounts, or external color catalog.
const ColorSearch = (() => {
  const normalize = value => value.toLowerCase().trim().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ');
  const phraseContains = (text, term) => {
    const words = value => ' ' + normalize(value).replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    return words(text).includes(words(term));
  };
  const groups = [
    { name: 'green', families: ['Green'], nearby: ['Yellow green', 'Teal'], anchor: 'Fern', featured: ['Forest green', 'Sage', 'Fern', 'Jade', 'Mint mist', 'Dark olive'], terms: ['moss', 'forest', 'woodland', 'fern', 'foliage', 'leaves', 'ivy', 'lichen', 'sea glass', 'weathered copper', 'oxidized'] },
    { name: 'red', families: ['Red'], nearby: ['Rust', 'Pink'], anchor: 'Scarlet', featured: ['Scarlet', 'Burgundy', 'Garnet', 'Brick red', 'Rose madder', 'Watermelon'], terms: ['cherry', 'pomegranate', 'cranberry', 'wine', 'rose petals', 'red', 'sealing wax', 'lacquer'] },
    { name: 'blue', families: ['Blue', 'Cyan'], nearby: ['Teal'], anchor: 'Azure', featured: ['Azure', 'Midnight blue', 'Cornflower', 'Steel blue', 'Powder blue', 'Cerulean'], terms: ['sky', 'ocean', 'water', 'denim', 'blue', 'ice', 'ink', 'porcelain'] },
    { name: 'yellow', families: ['Gold'], nearby: ['Yellow green', 'Orange'], anchor: 'Saffron', featured: ['Saffron', 'Honey gold', 'Straw', 'Yellow ochre', 'Champagne', 'Ivory'], terms: ['sunlight', 'wheat', 'honey', 'straw', 'brass', 'gold', 'pollen', 'dry grass'] },
    { name: 'orange', families: ['Orange', 'Rust'], nearby: ['Gold'], anchor: 'Tangerine', featured: ['Tangerine', 'Burnt orange', 'Apricot', 'Peach', 'Terracotta', 'Copper'], terms: ['citrus', 'orange', 'pumpkin', 'autumn', 'clay', 'terracotta', 'copper', 'rust', 'ember'] },
    { name: 'purple', families: ['Purple', 'Violet'], nearby: ['Pink'], anchor: 'Orchid', featured: ['Orchid', 'Dark plum', 'Mulberry', 'Iris', 'Lilac', 'Wisteria'], terms: ['plum', 'berry', 'berries', 'velvet', 'lavender', 'violet', 'lilac', 'blossom', 'dyed silk'] },
    { name: 'pink', families: ['Pink'], nearby: ['Purple', 'Red'], anchor: 'Blush', featured: ['Blush', 'Deep rose', 'Flamingo', 'Old rose', 'Raspberry', 'Petal pink'], terms: ['rose', 'petal', 'pink', 'ribbon', 'blossom', 'satin', 'peony', 'grapefruit'] },
    { name: 'brown', families: ['Rust', 'Orange', 'Neutral'], anchor: 'Mahogany', featured: ['Mahogany', 'Chestnut', 'Burnt umber', 'Saddle brown', 'Taupe', 'Roasted coffee'], filter: c => c.hsl[2] < .53 && c.hsl[0] < 65 && c.hsl[1] > .12, terms: ['wood', 'leather', 'bark', 'earth', 'coffee', 'walnut', 'tobacco', 'soil'] },
    { name: 'gray', aliases: ['grey'], families: ['Neutral'], anchor: 'Pewter', featured: ['Charcoal', 'Graphite', 'Pewter', 'Silver gray', 'Dove gray', 'Chalk'], filter: c => c.hsl[1] < .18, terms: ['fog', 'stone', 'slate', 'silver', 'gray', 'grey', 'rain', 'ash', 'graphite'] },
    { name: 'black', families: ['Black', 'Neutral'], anchor: 'Absolute black', featured: ['Absolute black', 'Soot black', 'Black coffee', 'Raven black', 'Black olive', 'Black plum'], filter: c => c.family === 'Black' || c.hsl[2] < .23, terms: ['coal', 'charred', 'blackened', 'shadow', 'night', 'dark', 'ink'] },
    { name: 'white', families: ['Neutral', 'Gold'], anchor: 'Chalk', featured: ['Chalk', 'Ivory', 'Blue frost', 'Pale lichen', 'Porcelain blue', 'Petal pink'], filter: c => c.hsl[2] > .83, terms: ['chalk', 'white', 'porcelain', 'frost', 'linen', 'limestone', 'pale', 'snow'] }
  ];

  // OKLab distance compares perceived lightness and color, including near-neutrals.
  function lab(hex) {
    const [r, g, b] = [1, 3, 5].map(i => {
      const v = parseInt(hex.slice(i, i + 2), 16) / 255;
      return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
    });
    const l = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b);
    const m = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b);
    const s = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
    return [.2104542553 * l + .793617785 * m - .0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + .4505937099 * s,
      .0259040371 * l + .7827717662 * m - .808675766 * s];
  }
  const index = colors.map(color => ({ color, name: normalize(color.name), lab: lab(color.hex) }));
  const byName = name => colors.find(c => normalize(c.name) === normalize(name));
  const distance = (a, b) => a.reduce((sum, value, i) => sum + (value - b[i]) ** 2, 0);
  function nearest(hex, count = 24) {
    const target = lab(hex);
    return [...index].sort((a, b) => distance(a.lab, target) - distance(b.lab, target)).slice(0, count).map(item => item.color);
  }
  function parseHex(value) {
    const raw = value.trim().replace(/^#/, '');
    if (!/^(?:[\da-f]{3}|[\da-f]{6})$/i.test(raw)) return null;
    return '#' + (raw.length === 3 ? [...raw].map(c => c + c).join('') : raw).toUpperCase();
  }
  function familyGroup(color) {
    return groups.find(g => g.families.includes(color.family)) || groups.find(g => g.name === 'gray');
  }
  function resolveMood(value) {
    const query=normalize(value),parsed=ColorMoods.parse(query);
    if(!parsed)return null;
    let matches=ColorMoods.matches(parsed.mood.id);
    if(parsed.rest){const related=resolve(parsed.rest);matches=matches.filter(c=>related?.matches.includes(c));}
    return {query,kind:'mood',mood:parsed.mood,anchor:matches[0]||null,matches,group:null};
  }
  function resolve(value) {
    const query = normalize(value);
    if (!query) return null;
    const group = groups.find(g => g.name === query || g.aliases?.includes(query));
    if (group) {
      const anchor = byName(group.anchor);
      const target = lab(anchor.hex);
      const pool = index.filter(({ color }) => group.filter ? group.filter(color) : [...group.families, ...(group.nearby || [])].includes(color.family));
      pool.sort((a, b) => (group.families.includes(b.color.family) - group.families.includes(a.color.family)) || distance(a.lab, target) - distance(b.lab, target));
      const matches = [...new Set([...group.featured.map(byName).filter(Boolean), ...pool.map(item => item.color)])];
      return { query, kind: 'group', anchor, matches, group };
    }
    // A named shade such as "Red earth" takes precedence over an unprefixed HEX.
    const exact = byName(query);
    if (exact) return { query, kind: 'name', anchor: exact, matches: nearest(exact.hex), group: familyGroup(exact) };
    const hex = parseHex(query);
    if (hex) {
      const matches = nearest(hex);
      return { query, kind: 'hex', hex, anchor: matches[0], matches, group: familyGroup(matches[0]) };
    }
    const moodQuery=resolveMood(query);
    if(moodQuery)return moodQuery;
    const words = query.split(' ');
    const hits = index.filter(item => words.every(word => item.name.includes(word) || normalize(item.color.family).includes(word)));
    hits.sort((a, b) => Number(b.name.startsWith(query)) - Number(a.name.startsWith(query)) || a.name.localeCompare(b.name));
    const matches = hits.map(item => item.color);
    if (!matches.length) return { query, kind: 'text', anchor: null, matches: [], group: null };
    return { query, kind: 'text', anchor: matches[0], matches, group: familyGroup(matches[0]) };
  }
  function imagery(search) {
    if (!search) return [];
    const direct = search.query;
    const terms = search.group?.terms || [];
    return colors.map(color => {
      let best = null;
      for (const phrase of color.associations) {
        const text = normalize(phrase);
        const directHit = search.kind !== 'hex' && phraseContains(text, direct);
        const hits = terms.filter(term => phraseContains(text, term)).length;
        const score = (directHit ? 10 : 0) + hits + (search.matches.includes(color) ? .5 : 0);
        if ((directHit || hits || search.matches.includes(color)) && (!best || score > best.score)) best = { color, phrase, score };
      }
      return best;
    }).filter(Boolean).sort((a, b) => b.score - a.score || a.color.name.localeCompare(b.color.name));
  }
  return { resolve, resolveMood, imagery, nearest, parseHex };
})();
