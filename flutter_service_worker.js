'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "cc4c019d651c7a574464912e2886d1fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f0724a8fde979913203698fb5a5085e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1264fb66fdea5687a501057695dd6788",
".git/logs/refs/heads/main": "b6de604284db4af40470523e0ad2dec0",
".git/logs/refs/remotes/origin/main": "ee6cbb938155f765e342a381cda0f040",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/95ec1419b43ee8f8bfd4e9253061e55b484b4d": "c6426504ba4d61769af22fa3c34b9ecf",
".git/objects/17/c3e8a8f7c19f0b0036db21f0102bbf7d2f8388": "5a0c6c73744f6b66ad06c394a69f5588",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/27/cbf16788596b29a7d9a897f1dc7cda6066611d": "140292a657580f821aa8d1a21e8282cd",
".git/objects/28/37fab6f71d7ae80c0d58da7378d53a55304853": "48f85c7e1c3a533728b4f12f9c9ddd90",
".git/objects/2a/9d82c084c3b0176ec4fd048ade62249593a36f": "1e160ae6de393db6196fff34f7c5fcbc",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/30/6aa3275dd7daddb318bc68fce523ca96a88026": "8306e7ade6da4f9d9b48c635d2955a8f",
".git/objects/31/510b21abe57078044e6bb406a11d9b6aadfa8a": "aaf56a229b867f9f291cfb4237985a3e",
".git/objects/34/0d9fc6e4711139e47fc4dbf3ede706dc3685fe": "aba4e3d66c25b3c8eb42605366455eaf",
".git/objects/34/59ca76cae112057faf6b0d6bec28543ff279e6": "2c314bc52e92ef915d655ed70dc3ed23",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/e96f93ef6ac5c2743a5be6d9d1a4fe7b46ccb6": "7842d55f59d8216358dabada9b8f0f99",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3f/b76e504f155db19c6bd2ed3897bef3344a8502": "2018fcd8c78f0a34cf5f3dde5d0aa8a7",
".git/objects/40/6dc3fc3ef601e3edd88c7a88059b22848973ce": "c727d040986cfd267b439cbb547b7e25",
".git/objects/41/07b18b5e998c3196c4b2410750da27714687f3": "334103807e553f81ca6aca68808c91fd",
".git/objects/44/3d452bee2634617d78f41bd63d9b5d46f37fd5": "99a06c4316805877dd6665dd4159234e",
".git/objects/44/6893f59f99303a218e90a60275c7358f1cdb48": "8cbc77f9402d6ab2be903fb13def7f17",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/48/2b7c0d8e8665eb24b93b2851fc995963966bb7": "3f56a51b2c5097d43642c606aca751d4",
".git/objects/48/97184555fbd3784031adb164eaa29759934490": "7bb287ee5509281d4067551a5047f878",
".git/objects/49/09e48740e631b41da1ceb97e1fd7ad5a9b76a9": "d7c1eb6bde39cc8e42beb8b48c0faf29",
".git/objects/50/439a18753524e96a0526d5a062c9fcadf1a822": "7e4dd9a7000bfb454cd7a381712feaa7",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/57/ab00ce24633c0841bd9996e80e18d96ac6222e": "03096dd7eea3dd3dc7083d02b77f848e",
".git/objects/59/b31e135bf94de8a2094ea505988eb4e3dc34c9": "e7c490530c707f002f50fc35b1fc2545",
".git/objects/60/3021275181362ef76914194c4f1979fcca1349": "e52ae57c59e3640172b471b231286bed",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/c84bc117b59166eb5dafe4120603843a3a16a5": "dada156359fb688b56e64991dc745325",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6d/31aa7f2a96e4a8d07d1c4262b2a7c7f85ba49f": "3d0fe42d0fad7fb0a7311109136cd0cb",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/2479743887256e564171aee1f5363c7ba0d3d3": "411163bf3927f3ad3ecb12b877a62730",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/86/cffd131d29853e44ba22720345f10dc67042c9": "676d25395ac30c66474f042249ae108b",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/e45d484e5db52107a28b40f18e433c545b7502": "0b5412e6ec2e566a12aeb8739b51786a",
".git/objects/88/a64e04ea535dbca5dc5410346dcdc1e3a3936f": "52d41116c407b208ad4ccb69160a81ab",
".git/objects/8c/01252d6c2207304cf80de245f85a5859c2449a": "2ca2c75665026318e18ac677a336b44c",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/754b63db803b1eb00022b8dbcd7adc622d83bb": "969d63218a10b3c5633188635e834c15",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/98/bdc8eb5fdac7d22375f992c73c90120601021b": "08a9b866dc6efc4d307b81fc6e82db1a",
".git/objects/a2/2a4be5749d8e143a3792a573f712456c3b894b": "e0ff9104d610b7794ecd2ea167fdbbe2",
".git/objects/a3/a17fb990a655c6e655fe278c564aade0fed80c": "f29b7b60edb634c14d631a42ba9561f9",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c8/92cbf2139b5ebc19af7f6fabfdf54d2bd59042": "0c34898fabaeace7e3d332fc26ac50ab",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cd/0b24b3b9ee22a8c24fc9ec9ffd47dbeffa2ae5": "aadbf1e18cc4afbea6863bd1bae6c008",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/10726e3bc60e1b6f526565c64a16d4192f3c02": "43da0827d118fb340fe56a8245b1aa07",
".git/objects/d7/b35ec47b5814344571558da2e3204044eb909f": "7961957ef945c2f5d8d56ac245a2fe33",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e1/7230b3a664839094835c0661c1bc3fc4feee25": "9290759cd9c7fc5816b8e58f6e1702ba",
".git/objects/e5/fd047a33a175e58bdd020a1c8f4fe5092ca755": "745df5fb8a55cc63a01f0ff39e5a395b",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/ea/7463bc08e1cb668b1b926223b1e3b661132b94": "54e0334ad5b6a6d0cc68a5d0a310c942",
".git/objects/fa/24e183cb48962e070f4307a42178db2c2b450f": "02c8410821a3901c15dea7a84bca9f7b",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/1c1a0412ebdc6ac451b4543063484b02a754a5": "befc75ce9acfc1ed243224f81d1c878d",
".git/refs/heads/main": "3fe75a13692c87190652ceef8b4b0472",
".git/refs/remotes/origin/main": "3fe75a13692c87190652ceef8b4b0472",
"assets/AssetManifest.bin": "df053bea123f4f3e525a5e6cfdc53d08",
"assets/AssetManifest.json": "9be76ef1dde70e0709967e8e204a3392",
"assets/assets/favicon.png": "681cb82b810083c6c9b94d868bd265b2",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/my%2520(1).png": "7b86ae88ec954d213806e8e7122e1949",
"assets/assets/photos/my%2520(2).png": "a191f4d23592e56c2f03657d11cd4aaf",
"assets/assets/photos/my%2520(3).png": "0e87e7876c5070951c4df6ee9b2a27cd",
"assets/assets/projects/aim_logo.png": "ee077e61bf899fd30ff53363f5f62341",
"assets/assets/projects/aim_poster.png": "43a1200d6a367770bf2534b20ecbae6b",
"assets/assets/projects/alarm_logo.png": "e39fd0f953c3b8cbd767f2a35195af72",
"assets/assets/projects/alarm_poster.png": "97c2b9064f95aea8c4bec67466f4bd5c",
"assets/assets/projects/apple.png": "422c73496a1b944d454fccfd8122dd9d",
"assets/assets/projects/fresh_logo.png": "de96ac5aa1cd75c09bd2fae031634cbd",
"assets/assets/projects/fresh_poster.jpg": "e8efa39e438371f954a0b2558df68979",
"assets/assets/projects/git.png": "67665858201c855e516907ede07b7629",
"assets/assets/projects/google.png": "0e2cb26de76f0d988af9001cdf8aedf8",
"assets/assets/projects/logo_phc.png": "43884f22012d93f06635ede6d14a5351",
"assets/assets/projects/myploto_logo.png": "f3f1782ac332db4f02323998953d5132",
"assets/assets/projects/myploto_poster.png": "d1f894ee70674b09d664da0cd72fe4af",
"assets/assets/projects/poster_phc.png": "a18ed6cf47f43a4105e5acbd1a088cf4",
"assets/assets/projects/salut_icon.png": "43e43d8f0bdcf43caf07fb270d32a36a",
"assets/assets/projects/salut_poster.jpg": "c06379d1b3e359511dccfc20ded53908",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/data.json": "09dfc9eb55819e52c3dc74b0f114dae8",
"assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "e544a9972bdbffeb004e390ea45589a5",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "fe003b7d59948cc76a8561deb8a0aba0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "61ff82d2379931c5b4d419534a300e3b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "23767cec00727aead78521ac33973fbe",
"icons/Icon-512.png": "1ac5f4d4614dbb7da77452dec9726096",
"icons/Icon-maskable-192.png": "23767cec00727aead78521ac33973fbe",
"icons/Icon-maskable-512.png": "1ac5f4d4614dbb7da77452dec9726096",
"index.html": "2bbd4448ed847c7293e28ea072c1979c",
"/": "2bbd4448ed847c7293e28ea072c1979c",
"main.dart.js": "d9a703857f107d5ebfb915ff9a03d695",
"manifest.json": "360f18a4adf17b9e63cb5300c56f0de5",
"version.json": "c2abcafb9cc879484eba84b3e94b3d51"};
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
