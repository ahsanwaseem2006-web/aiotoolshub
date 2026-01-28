const CACHE_NAME = "aiotoolshub-v1";
const OFFLINE_URL = "/offline.html";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/offline.html",
  "/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(OFFLINE_URL))
  );
});
