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
        var formEmail = $("#email").val();
        var formPassword = $("#password").val();
        var formFirstName = $("#firstName").val();
        var formPhone = $("#phoneNumber").val();
        console.log(formEmail);
        console.log(formFirstName);

        firebase.auth().createUserWithEmailAndPassword(formEmail, formPassword)
            .then(function (user) {
                firebase.auth().onAuthStateChanged(function (user) {
                    console.log(user);
                    console.log(user.uid);
                    db.collection("users")
                        .doc(user.uid)
                        .set({
                            email: formEmail,
                            password: formPassword,
                            firstName: formFirstName,
                            phoneNumber: formPhone
                        }, {
                            merge: true
                        });


                })

            })
            .catch(function (err) {
                console.log(err);
            })
    });
});