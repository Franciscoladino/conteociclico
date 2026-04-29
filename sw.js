const cacheName = "Inventario-v1";
const assets = ["./", "./Conteociclico.html"];

self.addEventListener("install", e => {
    e.waitUntil(caches.open(cacheName).then(cache => caches.adsAll(assets)));
});

self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});