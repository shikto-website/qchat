var staticFilesURL = [
    "./",
    "index.html",

    "Quartz/ui.css",
    "Quartz/animations.css",

    "Quartz/colors.js",
    "Quartz/quartz.css",
    "Quartz/UI.css",

    "asset/firebase-app.js",
    "asset/firebase-storage.js",
    "asset/firebase-auth.js",
    "asset/firebase-database.js",

    "asset/image/google.png",
    "asset/layout.js",
    "app.js"
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([]);
        })
    );
});

self.addEventListener("fetch", async (e) => {
    console.log("url", e.request.url);
    console.log("METHOD", e.request.method)
    var q = Query(e.request.url);

    if(e.request.method == "GET"){
        e.respondWith( 
            caches.match(e.request).then(response => {
                return response || fetch(e.request).then(fetchResponse=>{
                    return caches.open("static").then(cache => {
                        cache.put(e.request.url, fetchResponse.clone());
                        return fetchResponse;
                    })
                })
            })       
        ) 
    }else{
        fetch(e.request);
    }           
});

function Query(s){
    var u = s || window.location;
    return (new URL(u).search).toString().slice(1)
    .split('&')
    .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
    b = b.split('=');
    a[b[0]] = decodeURIComponent(b[1]);
    return a;
    }, {});
}