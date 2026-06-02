// Минимальный сервис-воркер для поддержки PWA установки
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Позволяет приложению подгружать ресурсы онлайн
  e.respondWith(fetch(e.request));
});
