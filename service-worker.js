const CACHE_NAME = 'v14-4-combat-system-v1';
const urlsToCache = [
  '.',
  '.index.html',
  '.manifest.json',
  '.icon-192.png'
];

 安裝階段：將指定檔案寫入本機快取
self.addEventListener('install', event = {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache = cache.addAll(urlsToCache))
  );
});

 攔截請求：斷網時強制從快取提取資料
self.addEventListener('fetch', event = {
  event.respondWith(
    caches.match(event.request)
      .then(response = {
         若快取中有資料，直接回傳；否則才透過網路抓取
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});