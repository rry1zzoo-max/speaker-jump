self.addEventListener('fetch', (event) => {
  // This is a minimal service worker to allow installation
  event.respondWith(fetch(event.request));
});