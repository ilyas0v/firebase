var config = {
  apiKey: "AIzaSyCIvfPr2iO3EXXzGleAHUa6MZsf39Lp-Xk",
  authDomain: "shopping-2ade3.firebaseapp.com",
  databaseURL: "https://shopping-2ade3.firebaseio.com",
  projectId: "shopping-2ade3",
  storageBucket: "shopping-2ade3.appspot.com",
  messagingSenderId: "772756147027"
};


firebase.initializeApp(config);
var dbRef = firebase.database();
var productsRef = dbRef.ref('products');
