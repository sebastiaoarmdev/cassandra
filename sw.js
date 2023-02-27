const cacheName = 'cache';
const precacheResources = [
    "index.html",
    "styles/main.css",
    "scripts/app.js",
    "scripts/main.js",
    "images/avatar.gif",
    "images/avatar.png",
    "images/favicon.ico"
];

self.addEventListener('install', (event) => {
    console.log('Installing Service worker...');
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => cache.addAll(precacheResources))
    );    
    console.log('Service workeri installed!');
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated!');
});


self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }),
    );
});
