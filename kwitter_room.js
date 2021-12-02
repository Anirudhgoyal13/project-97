
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
 var firebaseConfig = {
       apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
        authDomain: "kwitter-6abca.firebaseapp.com",
         databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
          projectId: "kwitter-6abca", 
          storageBucket: "kwitter-6abca.appspot.com",
           messagingSenderId: "231606977400",
            appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
       };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="welcome"+username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      confirm.log("room name-"+Room_names);
      row="<div class='roomname' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function addroom(){
Room_name=document.getElementById("roomname").value;
firebase.database().ref("/").child(Room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room name",Room_name);
window.location="kwitter_page.html";
}

function redirect_to_room_name(name){
console.log(name);
localstorage.setItem("Room_name",name);
window.location="kwitter_room.html"
}

function logout(){
localStorage.removeItem("user name");
localStorage.removeItem("room name");
window.location="index.html";

}