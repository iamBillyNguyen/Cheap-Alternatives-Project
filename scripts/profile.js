$(document).ready(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD_pDCpAP6mtBObEgjgFJWQ7uDmeAZt8ng",
        authDomain: "washlab-e7c59.firebaseapp.com",
        databaseURL: "https://washlab-e7c59.firebaseio.com",
        projectId: "washlab-e7c59",
        storageBucket: "washlab-e7c59.appspot.com",
        messagingSenderId: "832183689756",
        appId: "1:832183689756:web:6a44c4e8616fe77e0ef5d9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    $("#newUser").submit(function (e) {
        e.preventDefault();
        console.log("Hello");
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
        })
        .catch(function(err) {
            console.log(err);
        })
    });
});