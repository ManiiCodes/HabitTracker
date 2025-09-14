export const db = {
  get(key, def) {
    try { return JSON.parse(localStorage.getItem(key)) || def }
    catch(e){ return def }
  },
  set(key,val){ localStorage.setItem(key, JSON.stringify(val)) },
}