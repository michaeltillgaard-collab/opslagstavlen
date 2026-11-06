importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js","config.js");
firebase.initializeApp(self.KONFIG.firebase);
firebase.messaging(); // viser notifikationer, når appen er lukket
self.addEventListener("notificationclick",e=>{e.notification.close();
  e.waitUntil(clients.openWindow(new URL("index.html",self.registration.scope).href))});
