var i = 0;
$(document).ready(function () {
    const increment = firebase.firestore.FieldValue.increment(1);
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
        var name = $("#name").val();
        var rating = $("#rating").val();
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
            var id = "b" + increment._operand;
            console.log(increment);
            console.log(id);
            db.collection("Bathroom").doc(id).set({
                Like: 0,
                Dislike: 0,
                name: name,
                location: location,
                rating: rating
            }, {
                merge: true,
            }).then(function(docRef) {
                $(".add-box").toggle("clip");

                console.log(docRef);
                db.collection("Bathroom").doc(id).get()
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
    
                    }).catch(function(err) {
                        console.log(err);
                    }) 
            }).catch(function (err) {
                console.log(err);
            });
           
        })



    })
});