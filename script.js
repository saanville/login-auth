firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').style.display = 'block';
    document.getElementById('login_div').style.display = 'none';
  } else {
    // No user is signed in.
    document.getElementById('user_div').style.display = 'none';
    document.getElementById('login_div').style.display = 'block';
  }
})

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password_field").value;

  firebase
  .auth()
  .signInWithEmailAndPassword(userEmail, userPassword)
  .catch(function (error){
  var errorCode = error.code;
  var errorMessage = error.message;

  window.message('Error: ' + errorMessage);
  })
}

function logout(){
  firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});

}