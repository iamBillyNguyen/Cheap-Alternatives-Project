$(document).ready(function(){
    $("#box5").css("display", "none");

    $("#submit").click(function(){
        $("#box5").slideDown(500);
    })
})

db.collection("Bathroom").doc("b1").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name1").innerHTML = snap.data()
        .name; //Get name value from document
    document.getElementById("rating1").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location1").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes1").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener("1");
});

db.collection("Bathroom").doc("b2").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name2").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating2").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location2").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes2").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener("2");
});

db.collection("Bathroom").doc("b3").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name3").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating3").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location3").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes3").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener("3");
});

db.collection("Bathroom").doc("b4").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name4").innerHTML = snap.data().name; //Get name value from document
    document.getElementById("rating4").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location4").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes4").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener("4");
});

db.collection("Bathroom").doc("b5").onSnapshot(function (snap) {
    console.log("Current data is ... ", snap.data().name);
    document.getElementById("name5").innerHTML = snap.data()
        .name; //Get name value from document
    document.getElementById("rating5").innerHTML = snap.data()
        .rating; //Get rating value from document
    document.getElementById("location5").innerHTML = snap.data()
        .location; //Get location value from document

    document.getElementById("likes5").innerHTML = snap.data()
        .Like; //Get like
    console.log("Current likes: ", snap.data().Like);

    setAddListener("5");
});


function showLikes(n) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom")
        .doc("b"+n)
            .onSnapshot(function (d) {
                console.log("Current data: ", d.data().Like);
                document.getElementById(("likes"+n).innerHTML = d.data().Like);
            });
    })
}


function setAddListener(n) {
    document.getElementById("bathroom" + n).addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("b" + n);

        var increment = firebase.firestore.FieldValue.increment(1);
        console.log("showing" + increment);

        e.preventDefault();

        like.update({
                Like: increment
            })
            .then(function () {
                showLikes(n);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}