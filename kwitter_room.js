
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDeEk1rAZ4m7gKWZHX4asQbUKE81PRbmm4",
      authDomain: "classtest-aae72.firebaseapp.com",
      databaseURL: "https://classtest-aae72-default-rtdb.firebaseio.com",
      projectId: "classtest-aae72",
      storageBucket: "classtest-aae72.appspot.com",
      messagingSenderId: "550602113713",
      appId: "1:550602113713:web:4d57c3e042297594799890"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+ Room_names);
row = "<div class = 'room_name' id=" +Room_names+ " onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose: "adding room name" });
             localStorage.setItem("room_name",room_name);
             window.location = "kwitter_page.html";

} 

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
