'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2fef174c65083578d2764782b7e97f91",
"assets/AssetManifest.bin.json": "1d15ba5d7d14e6ef177bca5d58f92cbb",
"assets/AssetManifest.json": "a402e027341e29d60e365b438599ba79",
"assets/assets/cv/suraj_shrestha_cv.pdf": "a4591d7f12657d40567b4eacfd547644",
"assets/assets/fonts/Rubik-Bold.ttf": "7b1bc86cceee88d88080a03e1d37c9fa",
"assets/assets/fonts/Rubik-Light.ttf": "23061741bd91192fd8f0fcc2ef2c1d15",
"assets/assets/fonts/Rubik-Medium.ttf": "73e9a5833dcf4b0e27fcd431d660b38d",
"assets/assets/fonts/Rubik-Regular.ttf": "e3dfaffb698c7742c8b0f2a10978e3f0",
"assets/assets/fonts/Syne-Bold.ttf": "0b46d64e8d5b1ef476fee2b8922818e2",
"assets/assets/fonts/Syne-ExtraBold.ttf": "67fd7d06cb7e7803883b3f3154620782",
"assets/assets/fonts/Syne-Medium.ttf": "e4be2541dd148f0e8a6c6b5ff75228f6",
"assets/assets/fonts/Syne-Regular.ttf": "08f75a7b35006089ecfb46871891eaa6",
"assets/assets/fonts/Syne-SemiBold.ttf": "7ce75086f1539b40100f53503385b5d9",
"assets/assets/images/brand_logo.svg": "edda35ec99059eff757e0c37ba8d3ec6",
"assets/assets/images/city_pay.png": "be0f83c7d4cdd6186ff2dc3fbceb734f",
"assets/assets/images/facebook.png": "eb37e72f083e69b5fd01ab574f07d4a7",
"assets/assets/images/facebook.svg": "560298201b8d6f6e447bf1be4a86c03e",
"assets/assets/images/GitHub.png": "54b8824063147d8e75ee193c11505257",
"assets/assets/images/github.svg": "2f8ec2c576bf873318e4f39e3aee0753",
"assets/assets/images/gv.png": "3c44426fdbe28904de2b5c82436a58c6",
"assets/assets/images/gv_large.png": "dc3f3f769f22d41ed1aa55aa497f71ba",
"assets/assets/images/icons/Algolia.png": "ebbc2a02aad8e822f7a9fd90abf8d054",
"assets/assets/images/icons/android_icon.png": "74647d89f1e293e316df049925d9f358",
"assets/assets/images/icons/AWS.png": "a1d8340b4f22ec4bb485db553b3a4596",
"assets/assets/images/icons/Azure.png": "bb0abeadf25635a39ebb09df669d7f9f",
"assets/assets/images/icons/Dart.png": "3d4712fbcc4ccae798a6a212e78d686a",
"assets/assets/images/icons/Firebase.png": "a437fec0dc5342244c27303a05c634ae",
"assets/assets/images/icons/Flutter.png": "11d934b216851323c314f435701ff6d1",
"assets/assets/images/icons/GraphQL.png": "e12ada58cb5d5775f57663955ff0093a",
"assets/assets/images/icons/ios_icon.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/images/icons/MongoDB.png": "36ffda1a0321d6fdff7cff97e855b755",
"assets/assets/images/icons/nodejs.png": "f6c7482cf03db5c1ba7f882115784601",
"assets/assets/images/icons/React.png": "036311d3a4efb5f380adc7fd2d955c23",
"assets/assets/images/icons/star-gradient.png": "8bd5fb29dfde84af45d1eec694f2b2ab",
"assets/assets/images/icons/TypeScript.png": "4ec83d0f7fc81fb66e5896647f52cf47",
"assets/assets/images/insta.svg": "85d2b0439027f9b53eed0696c6462180",
"assets/assets/images/instagram.png": "f2b2862fea4884dd70ae5dc5d859eb65",
"assets/assets/images/kfc.png": "9719341717137a9bd154cc12eaf67806",
"assets/assets/images/linkedIn.png": "c3e290adcf4f676dc2df70c604c99b97",
"assets/assets/images/LinkedIn.svg": "91af5088cdf6f6a0139d3a78f3d06bc0",
"assets/assets/images/merokinmel.png": "e973d0967826863b689b9e8a6b3390e4",
"assets/assets/images/merokishan.png": "9b530e23aef67f0df749a8c7312e4b89",
"assets/assets/images/profile.png": "2f8609e121cf5b1c33f91ad21d3258f7",
"assets/assets/images/profile2.png": "b08c67d6565044f1c9463e8a3d40fa94",
"assets/assets/images/profile3.png": "c4d016620403de7adc9b50b6fa4db953",
"assets/assets/images/quote.png": "47bfa33f5f63fd7d5d7c883b553e587e",
"assets/assets/images/Screenshot%25202025-06-17%2520004919.png": "5dfd446bc8eb3ee0c722170bbea3cfb8",
"assets/assets/images/Screenshot%25202025-06-17%2520005054.png": "e3c2d0dc5fd8d08a44bf3fda782ecc1a",
"assets/assets/images/Screenshot%25202025-06-17%2520005115.png": "be9d57840a1b3c2808d120b5b0585948",
"assets/assets/images/shadow.png": "493d4b5f2f9ea520ed692bec1d1d29a6",
"assets/assets/images/shadow.svg": "507be93806274d2f3f35bd1a8b8f916a",
"assets/assets/images/twiter.svg": "5147b073127c12354b820dcb26382126",
"assets/FontManifest.json": "db9f8451e576c6c18fc3b89a2959d56c",
"assets/fonts/MaterialIcons-Regular.otf": "07c64f2d5fb5019203019f0c1a5a0985",
"assets/NOTICES": "959b7c87740ebe9c9d80972856382e93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fba3c8d24c77c9ab6a55d63f08a469a8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55b6a7325ad22c493677c28e077799ea",
"/": "55b6a7325ad22c493677c28e077799ea",
"main.dart.js": "8dee8fc3c1aeb8daff56560980e50a72",
"manifest.json": "45ed13e73ec724f75046ab22eadaec01",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
