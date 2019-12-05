$(document).ready(function() {
$("#logout").submit(function (e) {
    
    firebase.auth().signOut()
    .then(function() {
    // Sign-out successful.
    console.log("success");
    window.location ="../main.html";
  })
  .catch(function(error) {
    // An error happened
    console.log(error);
  });
})

})