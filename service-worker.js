const nombre_cache = "SSSB"
const archivos_en_cache = [
  'index.html',
  'nueva_entrada.html',
  'editar.html',
  'js/index.js',
  'js/editar.js',
  'js/nueva_entrada.js',
  'js/lib/sys.js',
  'favicon.ico',
  'manifest.json'
]

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(nombre_cache);//revisa que archivos estan en el cache
    console.log('[Service Worker] Caching all: app shell and content');
    cache.addAll(archivos_en_cache)
    .then(resp=>{
      console.log("Almacenado de archivos exitoso")
    })
    .catch(err=>{
      console.warn(err)
    })
  })());
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(nombre_cache);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});


/* https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers */