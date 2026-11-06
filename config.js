// Udfyldes efter opsætning af Firebase (se OPSÆTNING.md). Intet her er hemmeligt.
window.KONFIG = {
  firebase: { apiKey:"", authDomain:"", projectId:"", messagingSenderId:"", appId:"" },
  vapidKey: "",
  apiUrl: ""   // adressen på funktionen "api", som Firebase udskriver ved deploy
};
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBD3dwt-hSt3BEm2ufvc-3hwdBW-1sQvIQ",
    authDomain: "afdeling-55-strandhusene.firebaseapp.com",
    projectId: "afdeling-55-strandhusene",
    storageBucket: "afdeling-55-strandhusene.firebasestorage.app",
    messagingSenderId: "829581605493",
    appId: "1:829581605493:web:9ef160aa5728e13693563c",
    measurementId: "G-NXWGB3DLJP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
