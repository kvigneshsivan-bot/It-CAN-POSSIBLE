const firebaseConfig = {
  apiKey:"AIzaSyAefyVd8gJSWXd3ZKB_dgDG4pvFqq3IiLs",
  authDomain: "brainboost-b7355.firebaseapp.com",
  projectId: "brainboost-b7355",
  storageBucket: "brainboost-b7355.firebasestorage.app",
  messagingSenderId: "209254656655",
  appId: "1:209254656655:web:23f109f9aba79455a09efa",
  measurementId: "G-H2DG2L8FEF"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();