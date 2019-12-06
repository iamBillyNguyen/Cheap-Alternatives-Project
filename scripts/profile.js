$(document).ready(function () {
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
                        }).then( function() {
                            window.location = "../main.html";
                        });
                       
                })
                
            })
            .catch(function (err) {
                console.log(err);
            })
            
    });
});