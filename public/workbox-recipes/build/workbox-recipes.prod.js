this.workbox=this.workbox||{},this.workbox.recipes=function(e,s,t,n,o,a,c,r,i){"use strict";try{self["workbox:recipes:6.5.2"]&&_()}catch(e){}function u(e){self.addEventListener("install",(s=>{const t=e.urls.map((t=>e.strategy.handleAll({event:s,request:new Request(t)})[1]));s.waitUntil(Promise.all(t))}))}return e.googleFontsCache=function(e={}){const c=(e.cachePrefix||"google-fonts")+"-stylesheets",r=(e.cachePrefix||"google-fonts")+"-webfonts",i=e.maxAgeSeconds||31536e3,u=e.maxEntries||30;s.registerRoute((({url:e})=>"https://fonts.googleapis.com"===e.origin),new t.StaleWhileRevalidate({cacheName:c})),s.registerRoute((({url:e})=>"https://fonts.gstatic.com"===e.origin),new n.CacheFirst({cacheName:r,plugins:[new o.CacheableResponsePlugin({statuses:[0,200]}),new a.ExpirationPlugin({maxAgeSeconds:i,maxEntries:u})]}))},e.imageCache=function(e={}){const t=e.cacheName||"images",c=e.matchCallback||(({request:e})=>"image"===e.destination),r=e.maxAgeSeconds||2592e3,i=e.maxEntries||60,w=e.plugins||[];w.push(new o.CacheableResponsePlugin({statuses:[0,200]})),w.push(new a.ExpirationPlugin({maxEntries:i,maxAgeSeconds:r}));const l=new n.CacheFirst({cacheName:t,plugins:w});s.registerRoute(c,l),e.warmCache&&u({urls:e.warmCache,strategy:l})},e.offlineFallback=function(e={}){const s=e.pageFallback||"offline.html",t=e.imageFallback||!1,n=e.fontFallback||!1;self.addEventListener("install",(e=>{const o=[s];t&&o.push(t),n&&o.push(n),e.waitUntil(self.caches.open("workbox-offline-fallbacks").then((e=>e.addAll(o))))})),r.setCatchHandler((async e=>{const o=e.request.destination,a=await self.caches.open("workbox-offline-fallbacks");if("document"===o){return await i.matchPrecache(s)||await a.match(s)||Response.error()}if("image"===o&&!1!==t){return await i.matchPrecache(t)||await a.match(t)||Response.error()}if("font"===o&&!1!==n){return await i.matchPrecache(n)||await a.match(n)||Response.error()}return Response.error()}))},e.pageCache=function(e={}){const t=e.cacheName||"pages",n=e.matchCallback||(({request:e})=>"navigate"===e.mode),a=e.networkTimeoutSeconds||3,r=e.plugins||[];r.push(new o.CacheableResponsePlugin({statuses:[0,200]}));const i=new c.NetworkFirst({networkTimeoutSeconds:a,cacheName:t,plugins:r});s.registerRoute(n,i),e.warmCache&&u({urls:e.warmCache,strategy:i})},e.staticResourceCache=function(e={}){const n=e.cacheName||"static-resources",a=e.matchCallback||(({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),c=e.plugins||[];c.push(new o.CacheableResponsePlugin({statuses:[0,200]}));const r=new t.StaleWhileRevalidate({cacheName:n,plugins:c});s.registerRoute(a,r),e.warmCache&&u({urls:e.warmCache,strategy:r})},e.warmStrategyCache=u,e}({},workbox.routing,workbox.strategies,workbox.strategies,workbox.cacheableResponse,workbox.expiration,workbox.strategies,workbox.routing,workbox.precaching);
//# sourceMappingURL=workbox-recipes.prod.js.map
