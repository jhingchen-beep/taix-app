const CACHE_NAME = 'taxi-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  // 如果有外部 CSS 或圖片也放進來
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
