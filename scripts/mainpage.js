$(document).ready(function(){
    $("#box5").css("display", "none");

    $("#submit").click(function(){
        $("#box5").slideDown(500);
    })
})

db.collection("Bathroom").doc("dt.0001").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name1").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating1").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location1").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes1").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener();
});

db.collection("Bathroom").doc("bcit.0001").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name2").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating2").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location2").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes2").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener();
});

db.collection("Bathroom").doc("dt.0002").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name4").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating4").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location4").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes4").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener4();
});

db.collection("Bathroom").doc("bcit.0001").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name2").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating2").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location2").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes2").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener2();
});

db.collection("Bathroom").doc("bcit.0002").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name3").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating3").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location3").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes3").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener3();
});


function showLikes() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom").doc("dt.0001")
            .onSnapshot(function (d) {
                console.log("Current data: ", d.data());
                if (d.get("Like") != null)
                    x = d.data()["Like"];
                else
                    x = 0; // user has not added any cups yet
                console.log(x);
                document.getElementById("likes1").innerHTML = x;
            });
    })
}

function showLikes2() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom").doc("bcit.0001")
            .onSnapshot(function (d) {
                console.log("Current data: ", d.data());
                if (d.get("Like") != null)
                    x = d.data()["Like"];
                else
                    x = 0; // user has not added any cups yet
                console.log(x);
                document.getElementById("likes2").innerHTML = x;
            });
    })
}

function showLikes3() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom").doc("bcit.0002")
            .onSnapshot(function (d) {
                console.log("Current data: ", d.data());
                if (d.get("Like") != null)
                    x = d.data()["Like"];
                else
                    x = 0; // user has not added any cups yet
                console.log(x);
                document.getElementById("likes3").innerHTML = x;
            });
    })
}

function showLikes4() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom").doc("dt.0002")
            .onSnapshot(function (d) {
                console.log("Current data: ", d.data());
                if (d.get("Like") != null)
                    x = d.data()["Like"];
                else
                    x = 0; // user has not added any cups yet
                console.log(x);
                document.getElementById("likes4").innerHTML = x;
            });
    })
}

function setAddListener() {
    document.getElementById("bathroom1").addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("dt.0001");

        var increment = firebase.firestore.FieldValue.increment(1);

        e.preventDefault();

        like.update({
                Like: increment
            })
            .then(function () {
                showLikes();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}

function setAddListener2() {
    document.getElementById("bathroom2").addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("bcit.0001");

        var increment = firebase.firestore.FieldValue.increment(1);

        e.preventDefault();

        like.update({
                Like: increment
            })
            .then(function () {
                showLikes2();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}

function setAddListener3() {
    document.getElementById("bathroom3").addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("bcit.0002");

        var increment = firebase.firestore.FieldValue.increment(1);

        e.preventDefault();

        like.update({
                Like: increment
            })
            .then(function () {
                showLikes3();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}

function setAddListener4() {
    document.getElementById("bathroom4").addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("dt.0002");

        var increment = firebase.firestore.FieldValue.increment(1);

        e.preventDefault();

        like.update({
                Like: increment
            })
            .then(function () {
                showLikes3();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}