import fs from 'fs/promises';

await fs.writeFile('dist/manifest.json', JSON.stringify(JSON.parse(await fs.readFile('dist/manifest.json'))));

// const CACHE_NAME = 'akarin-msg-tools';
//
// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(CACHE_NAME).then(cache => cache.addAll([]))
//     );
// });
//
// self.addEventListener('activate', e => {
//     e.waitUntil(
//         caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
//     );
// });
//
// self.addEventListener('fetch', e => {
//     e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
// });

const cacheName = `akarin-msg-tools-${Date.now()}`;
const cacheFiles = [
    '.',
    'favicon.png',
    'https://avatars.githubusercontent.com/u/47057319?s=128',
    ...(await fs.readdir('dist/assets')).map(e => `assets/${e}`),
];
await fs.writeFile(
    'dist/sw.js',
    `self.addEventListener("install",(e=>{e.waitUntil(caches.open("${cacheName}").then((e=>e.addAll(${JSON.stringify(cacheFiles)}))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>"${cacheName}"!==e&&caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));`
);