// Service Worker for Kyoto 2026 Travel Guide PWA
const CACHE_NAME = 'kyoto2026-v1';
const OFFLINE_URL = 'offline.html';

// 核心資源清單 - 安裝時立即快取
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/itinerary.html',
  '/pic.html',
  '/tools.html',
  '/offline.html',
  // 每日行程頁面
  '/day_1_itinerary.html',
  '/day_2_itinerary.html',
  '/day_3_itinerary.html',
  '/day_4_itinerary.html',
  '/day_5_itinerary.html',
  '/day_6_itinerary.html',
  '/day_7_itinerary.html',
  '/day_8_itinerary.html',
  // 圖片資源
  '/image/day0.jpg',
  '/image/day1.jpg',
  '/image/day2.jpg',
  '/image/day3.jpg',
  '/image/day4.jpg',
  '/image/day5.jpg',
  '/image/day6.jpg',
  '/image/day7.jpg',
  '/image/day8.jpg',
  '/image/hotel.jpg',
  // 圖片瀏覽資源
  '/pic/001.JPG',
  '/pic/002.JPG',
  '/pic/003.JPG',
  '/pic/004.JPG',
  '/pic/005.JPG',
  '/pic/006.JPG',
  '/pic/007.JPG',
  '/pic/008.JPG',
  '/pic/009.JPG',
  '/pic/010.JPG',
  '/pic/011.JPG',
  // PWA 資源
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// 安裝事件 - 預快取核心資源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] 快取核心資源');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] 安裝完成');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] 快取失敗:', error);
      })
  );
});

// 啟動事件 - 清理舊快取
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] 啟動中...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] 刪除舊快取:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] 啟動完成');
        return self.clients.claim();
      })
  );
});

// Fetch 事件 - 快取優先策略
self.addEventListener('fetch', (event) => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') {
    return;
  }

  // 跳過外部 API 請求 (天氣、翻譯等)
  if (event.request.url.includes('api.open-meteo.com') ||
      event.request.url.includes('translate.googleapis.com') ||
      event.request.url.includes('corsproxy.io')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // 如果快取中有,直接返回
        if (cachedResponse) {
          console.log('[Service Worker] 從快取返回:', event.request.url);
          return cachedResponse;
        }

        // 否則從網路獲取
        return fetch(event.request)
          .then((response) => {
            // 檢查是否為有效回應
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 複製回應並加入快取
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[Service Worker] Fetch 失敗:', error);
            
            // 如果是導航請求且失敗,返回離線頁面
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            
            return new Response('網路錯誤', {
              status: 408,
              headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
          });
      })
  );
});

// 訊息事件 - 處理來自頁面的訊息
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
