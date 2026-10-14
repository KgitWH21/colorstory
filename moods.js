// Editorial associations for writers, not universal meanings of colors.
const ColorMoods = (() => {
  const between = (v, a, b) => v >= a && v <= b;
  const definitions = [
    { id: 'calm', name: 'Calm', aliases: ['peaceful', 'quiet', 'serene'], description: 'Soft blues, greens, and restrained neutrals.', test: ([h,s,l]) => l > .32 && l < .86 && s < .6 && (between(h,120,245) || s < .16) },
    { id: 'tender', name: 'Tender', aliases: ['gentle', 'delicate', 'romantic'], description: 'Soft petals, warm creams, and gentle pinks.', test: ([h,s,l]) => l > .62 && l < .93 && s < .8 && (h > 285 || h < 65) },
    { id: 'uneasy', name: 'Uneasy', aliases: ['eerie', 'unsettling', 'ominous'], description: 'Acid greens, bruised purples, and troubled reds.', test: ([h,s,l]) => s > .25 && ((between(h,60,110) && between(l,.25,.7)) || (between(h,260,345) && between(l,.18,.47)) || ((h > 345 || h < 12) && between(l,.18,.42))) },
    { id: 'austere', name: 'Austere', aliases: ['severe', 'stark', 'restrained'], description: 'Blacks, grays, and spare, subdued tones.', test: ([h,s,l],c) => (s < .19 && l < .83) || c.family === 'Black' && s < .3 },
    { id: 'festive', name: 'Festive', aliases: ['joyful', 'celebratory', 'playful'], description: 'Bright pigments, ribbons, and lively color.', test: ([h,s,l]) => s > .68 && between(l,.35,.74) },
    { id: 'weathered', name: 'Weathered', aliases: ['worn', 'faded', 'timeworn'], description: 'Dusty surfaces, aged cloth, and softened paint.', test: ([h,s,l],c) => between(l,.22,.82) && between(s,.06,.43) || between(l,.22,.82) && c.associations.some(a => /weathered|faded|washed|tarnished|dusty/i.test(a)) && s < .6 },
    { id: 'mysterious', name: 'Mysterious', aliases: ['secretive', 'shadowy', 'nocturnal'], description: 'Deep blacks, night blues, and hidden undertones.', test: ([h,s,l]) => l < .24 },
    { id: 'hopeful', name: 'Hopeful', aliases: ['fresh', 'optimistic', 'renewing'], description: 'Young greens, clear skies, and light yellows.', test: ([h,s,l]) => between(l,.48,.82) && s > .35 && (between(h,40,165) || between(h,190,220)) },
    { id: 'melancholy', name: 'Melancholy', aliases: ['melancholic', 'wistful', 'somber', 'sombre'], description: 'Muted blues, dusk violets, and cool grays.', test: ([h,s,l]) => between(l,.2,.68) && s < .48 && (between(h,180,290) || s < .1) },
    { id: 'nostalgic', name: 'Nostalgic', aliases: ['nostalgia', 'vintage', 'remembered'], description: 'Warm earth, faded rose, and old gold.', test: ([h,s,l]) => between(l,.25,.8) && between(s,.12,.62) && (h < 75 || h > 320) }
  ];
  function hsl(hex) {
    const [r,g,b]=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
    const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,l=(max+min)/2;
    const h=d?60*(max===r?((g-b)/d+6)%6:max===g?(b-r)/d+2:(r-g)/d+4):0;
    return [h,d?d/(1-Math.abs(2*l-1)):0,l];
  }
  const tags = new Map(colors.map(c => [c, definitions.filter(m => m.test(hsl(c.hex),c)).map(m=>m.id)]));
  const get = id => definitions.find(m=>m.id===id);
  const has = (color, id) => tags.get(color)?.includes(id) || false;
  function parse(value) {
    const words=value.toLowerCase().trim().replace(/[-_]+/g,' ').replace(/\s+/g,' ').split(' ');
    for (const mood of definitions) for (const alias of [mood.id,...mood.aliases]) {
      const i=words.indexOf(alias);
      if(i!==-1)return {mood, rest:words.filter((_,index)=>index!==i).join(' ')};
    }
    return null;
  }
  function matches(id) {
    const counts=new Map(),rank=new Map(),result=colors.filter(c=>has(c,id));
    for(const color of result){const position=counts.get(color.family)||0;rank.set(color,position);counts.set(color.family,position+1);}
    // Interleave families for a useful first page instead of showing one hue.
    return result.sort((a,b)=>rank.get(a)-rank.get(b)||a.name.localeCompare(b.name));
  }
  return { definitions, get, has, parse, matches, tags: color => [...(tags.get(color)||[])] };
})();
