self.addEventListener("install",(e=>{e.waitUntil(caches.open("akarin-msg-tools-1659969244494").then((e=>e.addAll([".","icon-1024px.png","https://avatars.githubusercontent.com/u/47057319?s=128","assets/index.617a8c21.js","assets/vendor.b41914d6.css","assets/vendor.d83bc788.js"]))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"akarin-msg-tools-1659969244494"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));