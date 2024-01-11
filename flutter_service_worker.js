'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "48997b8312268c21c031229c28ad16ac",
"assets/AssetManifest.bin.json": "d921c1457040f12eb738635326c24735",
"assets/AssetManifest.json": "f96dca3a9d9277da64427f42c3196544",
"assets/assets/background.png": "a9614f1184cd9e5304c77245866024cd",
"assets/assets/cv/CV.pdf": "ff5f4101ae6f6aad99ae41e664014a00",
"assets/assets/dash1.png": "6bb0a63c2184e319aa11707013e74966",
"assets/assets/dash2.png": "aae77da7335ed05c4bf7231dd1985ef7",
"assets/assets/gv.png": "dfe8f20a1de7a4abe4a962f3d09ab948",
"assets/assets/me.png": "287052b66b6a6d1d5197b4d262f880af",
"assets/assets/menu/about.svg": "efec9bfda02377f4b4db3cc10be981c3",
"assets/assets/menu/about_active.svg": "abf60273058955e47f5fbbbdccbc1c56",
"assets/assets/menu/contact.svg": "7a144b9ffbc0d432a72a9160a759cc8e",
"assets/assets/menu/contact_active.svg": "5a87c7ee1926f3c9a59076ec7c7e8a1f",
"assets/assets/menu/experience.svg": "eb2b80309553d5567f50d3877b66ebb9",
"assets/assets/menu/experience_active.svg": "1748921d61e76c089670932ac46dd0bd",
"assets/assets/menu/home.svg": "53d22148a04e9c7b184951d02b86a3a0",
"assets/assets/menu/home_active.svg": "3bcf7379a185ff3e859b55328fc08089",
"assets/assets/menu/portfolio.svg": "96e633be0821f1773ff483ba549aae44",
"assets/assets/menu/portfolio_active.svg": "c9aa12983056a8975c78bf099641a5b6",
"assets/assets/menu/services.svg": "766b96236bb6a3b4b3a17322cb4c319d",
"assets/assets/menu/services_active.svg": "aa337b44ec5a92b3030568f86f54e5a6",
"assets/assets/paint.jpg": "5ba0892fe8674dad4b3f6a7cc531c75f",
"assets/assets/profile_background.png": "37e1c8b1bae6e8536022282c0addd329",
"assets/assets/songs_nepal.png": "7de658aab7b14ba18e3ce33017839b0b",
"assets/assets/svg/call_icon.svg": "e10d1acb42efd62dbffefbf32f5c9ae9",
"assets/assets/svg/design_icon.svg": "ee086f751f7713c6be0d1e2d18d8c2dd",
"assets/assets/svg/drawer_icon.svg": "fc701fdb58e93d1c6f472a50db3c802a",
"assets/assets/svg/male_icon.svg": "38c66f71645b4010b681ff1506889dbd",
"assets/assets/svg/mobile_icon.svg": "d48049a893af8d77ba072e1e67d35fe1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c53f9166f923b56b781529273473467c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e17477cd88ea3f550588e2f19846784f",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "87cbf3caf7ed44b01e1403ed251d2dfb",
"/": "87cbf3caf7ed44b01e1403ed251d2dfb",
"main.dart.js": "dddf978696b2db966fabdf09a0ab4841",
"manifest.json": "8e784a6959cce33ccf38214ba8290ff3",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
