"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","9ccdb6244caeed16592c4946cf800052"],["static/css/main.60ca7037.css","d1581707ec6ec4cce9945046082cdd10"],["static/js/main.3979e13e.js","78eb981413b11a7b42504da62a798d0a"],["static/media/1.3d8f3ceb.jpg","3d8f3ceb8da68b253708a1a6edae57a1"],["static/media/2.32b16fbb.jpg","32b16fbb7335ebcb0d6404a0ae8075f3"],["static/media/apple-store.699459d2.svg","699459d2fe8b648e9dd8475414a2525d"],["static/media/facebook.27d15bc0.svg","27d15bc0c9f96a6bde88555629a8ff22"],["static/media/form.0c4944db.svg","0c4944db0dddaff68ef114d5eaa5ac4f"],["static/media/hand.2e35fda9.png","2e35fda9c92ab8b331de247102fa527b"],["static/media/hard.d4d3fb95.svg","d4d3fb950f2347a5c79fb8a0a717bf20"],["static/media/instagram.dd6dfab3.svg","dd6dfab30f0d2c5a9d47219c38ad9061"],["static/media/intro-bg.ac096ee9.jpg","ac096ee958b16cb95c51b9110dfb9cd4"],["static/media/list.108e7497.svg","108e7497c326ae0a10a51dd44438e6bb"],["static/media/logo.e269a3e7.svg","e269a3e704d91f090740e3dbd441080d"],["static/media/logobranca.9c7e8f9c.svg","9c7e8f9c3590293d407ee16bb4605066"],["static/media/mail.395141f4.svg","395141f40d2b32ba960b20895c4d3aff"],["static/media/meu.158bca4c.svg","158bca4ce92b462a945dc04835a42254"],["static/media/motivation.816b71cd.svg","816b71cd2c1c3ca4d59522cb2138c98c"],["static/media/play-store.b9597078.svg","b959707805c96ef0838b15869abf5cf8"],["static/media/share.7153f777.svg","7153f77784ddfae523053a61258a6898"],["static/media/site.49751c48.svg","49751c48d8deea77184d160edb9037ba"],["static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["static/media/stakeholders-bg.46e5fded.jpeg","46e5fded35a45e3905edce0e6015e937"],["static/media/travel.43a2e722.svg","43a2e7222681dba8ebf01ceae3dea95b"],["static/media/web-app.ac25c946.svg","ac25c94646b05e483ebd222bba291b14"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});