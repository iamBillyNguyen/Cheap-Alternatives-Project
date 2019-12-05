$(document).ready(function () {
    var i = 0;
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
    if(!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    }
    var db = firebase.firestore();

    $("#addBathRoom").submit(function (e) {
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

        firebase.auth().onAuthStateChanged(function (user) {
                i++;
                db.collection("Bathroom").doc("b" + i)
                    .add(bathroom);
            }).then(function(currentDoc) {
                db.collection("Bathroom").doc(currentDoc).get().then(function(snap) {
                    snap.forEach(review => {
                    var n = review.data().text;
                    var rating = review.data().overallRating;
                    var temph4 = document.createElement("h4");
                    var tempDiv = document.createElement("div");
                    var tempStar = document.createElement("div");
                    while (rating > 0) {
                        if (rating >= 1) {
                            var tempSpan = document.createElement("span");
                            tempSpan.className = "fa fa-star checked";
                            tempStar.appendChild(tempSpan);
                            rating -= 1;
                        } else if (rating > 0.4) {
                            var tempSpan = document.createElement("span");
                            tempSpan.className = "fa fa-star-half-o checked";
                            tempStar.appendChild(tempSpan);
                            rating -= 0.5;
                        }
                    }
                    tempDiv.innerHTML = n;
    
                    temph4.innerHTML = review.data().author;
                    document.getElementById("review_container").appendChild(temph4);
                        document.getElementById("review_container").appendChild(tempStar);
                    document.getElementById("review_container").appendChild(tempDiv);
            })



            

            })
        })
    });


});