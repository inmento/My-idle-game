self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Simple pass-through so the app is installable
  e.respondWith(fetch(e.request));
});
