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
            
            db.collection("Bathroom").doc("b" + i).set({
                Like: 1,
                name: name,
                location: location,
                rating: rating
            },{merge: true,})
            $(".add-box").toggle("clip");
            i++;
        })
        


    })
});