$(document).ready(function(){
    $("#box5").css("display", "none");
    $("#comment1").css("display", "none");
    $("#submit1").css("display", "none");
    $("#comment2").css("display", "none");
    $("#submit2").css("display", "none");
    $("#comment3").css("display", "none");
    $("#submit3").css("display", "none");
    $("#comment4").css("display", "none");
    $("#submit4").css("display", "none");
    $("#comment5").css("display", "none");
    $("#submit5").css("display", "none");

    $("#submit").click(function(){
        $("#box5").slideDown(500);
    });

    $("#cmt1").click(function(){
        $("#comment1").toggle("clip");
        $("#submit1").toggle("clip");
    });

    $("#cmt2").click(function(){
        $("#comment2").toggle("clip");
        $("#submit2").toggle("clip");
    });

    $("#cmt3").click(function(){
        $("#comment3").toggle("clip");
        $("#submit3").toggle("clip");
    });

    $("#cmt4").click(function(){
        $("#comment4").toggle("clip");
        $("#submit4").toggle("clip");
    });

    $("#cmt5").click(function(){
        $("#comment5").toggle("clip");
        $("#submit5").toggle("clip");
    });

    $("#add-bathroom").click(function(){
        $(".add-box").toggle("clip");
    });
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
    document.getElementById("dislikes1").innerHTML = snap.data()
        .Dislike; //Get dislike
    console.log("Current likes: ", snap.data().Like);
    console.log("Current dislikes: ", snap.data().Dislike);

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
    document.getElementById("dislikes1").innerHTML = snap.data()
        .Dislike; //Get dislike    
    console.log("Current likes: ", snap.data().Like);

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
    document.getElementById("dislikes1").innerHTML = snap.data()
        .Dislike; //Get dislike
    console.log("Current likes: ", snap.data().Like);

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
    document.getElementById("dislikes1").innerHTML = snap.data()
        .Dislike; //Get dislike
    console.log("Current likes: ", snap.data().Like);
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
    document.getElementById("dislikes1").innerHTML = snap.data()
        .Dislike; //Get dislike
    console.log("Current likes: ", snap.data().Like);
});

setAddListener("1");
setAddListener2("1");
setAddListener("2");
setAddListener2("2");
setAddListener("3");
setAddListener2("3");
setAddListener("4");
setAddListener2("4");


function showLikes(n) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom")
        .doc("b"+n)
            .onSnapshot(function (d) {
                // console.log("Current data: ", d.data().Like);
                document.getElementById(("likes"+n).innerHTML = d.data().Like);
            });
    })
}

function showDislikes(n) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Bathroom")
        .doc("b" + n)
            .onSnapshot(function (d) {
                // console.log("Current data: ", d.data().Dislike);
                document.getElementById(("dislikes" + n).innerHTML = d.data().Dislike);
            });
    })
}


function setAddListener(n) {
    document.getElementById("like-btn" + n).addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("b" + n);

        var increment = firebase.firestore.FieldValue.increment(1);
        console.log("Like:" + increment);

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

function setAddListener2(n) {
    document.getElementById("dislike-btn" + n).addEventListener("click", function (e) {

        var like = db.collection("Bathroom").doc("b" + n);

        var increment = firebase.firestore.FieldValue.increment(1);
        console.log("Dislike:" + increment);

        e.preventDefault();

        like.update({
                Dislike: increment
            })
            .then(function () {
                showDislikes(n);
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    });
}