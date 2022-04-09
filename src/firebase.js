import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCH8Ir1K7Wf8PAJ629k8Xrs9JiUdOzhYmc",
    authDomain: "abcfrr-576e3.firebaseapp.com",
    projectId: "abcfrr-576e3",
    storageBucket: "abcfrr-576e3.appspot.com",
    messagingSenderId: "925887166205",
    appId: "1:925887166205:web:7acca4c00aaa0b276c7094"
});

export var db = firebaseApp.firestore();

// export { db };
// const firebaseConfig = {
    
//   };

//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
  
//   export { db };