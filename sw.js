self.addEventListener("install",(e=>{e.waitUntil(caches.open("akarin-msg-tools-1659317928968").then((e=>e.addAll([".","icon-1024px.png","https://avatars.githubusercontent.com/u/47057319?s=128","assets/index.27a3f766.js","assets/vendor.27f8b880.js","assets/vendor.be4bf70c.css"]))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"akarin-msg-tools-1659317928968"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));