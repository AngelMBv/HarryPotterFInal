// Estrategia 0: only net
//Estrategia 1: Only Cache
//Estrategia 2: 2 first cache then network
// Estrategia 3: first network then cache
self.addEventListener('install', e => {

    const imagenes = caches.open('mi-cache').then(cache => {
        cache.add('/'),
            cache.add('index.html'),
            cache.add('Personajes.html'),
            cache.add('Houses.html'),
            cache.add('menu.html'),
            cache.add('Books.html'),
            cache.add('Movies.html'),
            cache.add('style.css'),
            cache.add('style1.css'),
            cache.add('sw.js'),
            cache.add('manifest.json'),
            cache.add('img/harry.png'),
            cache.add('img/snape.png'),
            cache.add('img/hermione.png'),
            cache.add('img/ron.png'),
            cache.add('img/cedric.png'),
            cache.add('img/luna.png'),
            cache.add('img/sirius.png'),
            cache.add('img/dumbledore.png'),
            cache.add('img/draco.png'),
            cache.add('img/Logo.png'),
            cache.add('img/voldemort.png'),
            cache.add('img/logo1.png'),
            cache.add('img/logo2.png'),
            cache.add('img/gryffindor.png'),
            cache.add('img/ravenclaw.png'),
            cache.add('img/huffleupff.png'),
            cache.add('img/slytherin.png'),
            cache.add('img/Spells.png'),
            cache.add('img/H1.png'),
            cache.add('img/H2.png'),
            cache.add('img/H3.png'),
            cache.add('img/H4.png'),
            cache.add('img/H5.png'),
            cache.add('img/H6.png'),
            cache.add('img/H7.png'),
            cache.add('img/H8.png')

    })
    e.waithUntil(imagenes);
  });  
  
self.addEventListener("fetch", (event) => {
  const respuesta = fetch(event.request).then((newResp) => {
    caches.open("mi-cache").then((cache) => {
      cache.put(event.request, newResp);
    });
    return newResp.clone();
  }).catch(err=>{
    return caches.match(event.request); 
  })
  event.respondWith(respuesta);
  });