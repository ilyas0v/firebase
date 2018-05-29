firebase.auth().onAuthStateChanged(function(user) {
      if(user){
          if(!window.location.href.includes("index.html")){
              window.location.href = "index.html";
          }
      }else{
          if(!window.location.href.includes("login.html")){
              window.location.href = "login.html";
          }
      }
});


function logout(){
    firebase.auth().signOut().then(function() {
        window.location.href = "login.html";
    }).catch(function(error) {
        alert("Log out ERROR");
    });
}


function loginWithGmail(){
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
        window.location.href = "index.html";
    }).catch(function(err){
        alert("Log in ERROR");
    });
}

$("#loginForm").on('submit',function(e){
	e.preventDefault();
	var email = $("#email").val();
	var password = $("#password").val();
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		alert("error");
	});
});
