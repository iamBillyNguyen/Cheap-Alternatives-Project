var i = 0;
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
    if (!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    var db = firebase.firestore();

    $(".add-box").submit(function (e) {
        e.preventDefault();
        console.log("Hello");
        var location = $("#location").val();
        var rating = $("#rating").val();
        var name = $("#name").val();
        console.log(location);
        console.log(name);
        console.log(rating);

        var bathroom = {
            Like: 1,
            location: location,
            name: name,
            rating: rating
        };

        firebase.auth().onAuthStateChanged(function (bathroom) {
            var increment = firebase.firestore.FieldValue.increment(1);

            db.collection("increment").doc("counter").update({
                val: increment
            }).then(function () {
                db.collection("increment").doc("counter").get()
                    .then(function (doc) {
                        console.log(doc.data().val)
                        i = doc.data().val
                    }).catch(function (err) {
                        console.log(err);
                    })
            }).then(function () {
                console.log("b" +i);

                db.collection("Bathroom").doc("b" + i).set({
                    Like: 0,
                    Dislike: 0,
                    name: name,
                    location: location,
                    rating: rating
                }, {
                    merge: true,
                }).then(function (docRef) {
                    $(".add-box").toggle("clip");
                    db.collection("Bathroom").doc("b" + i).get()
                        .then(function (doc) {

                            var n = doc.data().name;
                            var loc = doc.data().location;
                            var rating = doc.data().rating;
                            var like = doc.data().Like;
                            console.log(n);
                            $("#name5").text(n);
                            $("#rating5").text(rating);
                            $("#location5").text(loc);
                            $("#likes5").text(like);
                            $("#dislikes5").text(like);

                        }).catch(function (err) {
                            console.log(err);
                        })
                }).catch(function (err) {
                    console.log(err);
                });
            })





        })



    })
});