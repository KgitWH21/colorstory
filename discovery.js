const ColorDiscovery = (() => {
  const limit = 12, key = 'color-story-recent-v1';
  function pool(family = '', mood = '', excluded = null) {
    return colors.filter(c => (!family || c.family===family) && (!mood || ColorMoods.has(c,mood)) && c!==excluded);
  }
  function createHistory(storage) {
    const byHex = new Map(colors.map(c=>[c.hex.toUpperCase(),c]));
    let recent=[],persistent=!!storage;
    try {
      const saved=JSON.parse(storage?.getItem(key)||'[]');
      if(Array.isArray(saved))recent=[...new Set(saved.filter(hex=>typeof hex==='string').map(hex=>hex.toUpperCase()).filter(hex=>byHex.has(hex)))].slice(0,limit);
    } catch { persistent=false; /* Storage is optional, including private browsing and file URLs. */ }
    const save = () => { try { storage?.setItem(key,JSON.stringify(recent)); } catch { persistent=false; } };
    return {
      list: () => recent.map(hex=>byHex.get(hex)),
      get persistent() { return persistent; },
      add(color) {
        const hex=color.hex.toUpperCase();
        if(!byHex.has(hex))return;
        recent=[hex,...recent.filter(value=>value!==hex)].slice(0,limit);save();
      },
      clear() { recent=[];save(); }
    };
  }
  return { pool, createHistory, limit };
})();
