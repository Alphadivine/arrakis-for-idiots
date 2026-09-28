/* Arrakis for Idiots — offline helper. Keeps the app, its scripts and item pictures on the
   device so recipes, the Guide and your lists work without signal. Group data goes through
   Firebase's own offline cache and syncs when you're back online. */
const VERSION = "20260928131533";
const APP = "afi-app-" + VERSION, LIB = "afi-lib-v1", IMG = "afi-img-v1";
const LIB_HOSTS = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];
const IMG_HOSTS = ["media.awakening.wiki"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("afi-app-") && k !== APP).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
async function trimImages() {
  const c = await caches.open(IMG), keys = await c.keys();
  for (let i = 0; i < keys.length - 900; i++) await c.delete(keys[i]);
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // the app page: newest from the network, the saved copy when offline
  if (req.mode === "navigate" || (url.origin === location.origin && /\/(index\.html)?$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(APP).then(c => c.put("./index.html", copy)); return res; })
      .catch(() => caches.match("./index.html").then(r => r || caches.match("./"))));
    return;
  }
  // Firebase and font libraries: saved copy first
  if (LIB_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(LIB).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }))));
    return;
  }
  // wiki item pictures: saved copy first, keep the most recent ~900
  if (IMG_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.open(IMG).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok || res.type === "opaque") { c.put(req, res.clone()); trimImages(); } return res; }))));
    return;
  }
  // everything else (Firestore, Google sign-in) goes straight to the network
});
