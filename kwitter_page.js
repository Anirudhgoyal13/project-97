//YOUR FIREBASE LINKS
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
       user_name=localStorage.getItem("user name")
       room_name=localStorage.getItem("room name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
console.log(name);
message=message_data['message'];
console.log(message);
like=message_data['like'];
console.log(like);
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebtn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span> </button> <hr>";
row=namewithtag+messagewithtag+likebtn+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function updatelike(message_id){
console.log("clickedonlikebtn-"+message_id);
button_id=message_id;
likes=document.getElementById("button_id").value;
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
like:update_likes
});
}
function logout(){
      localStorage.removeItem("user name");
      localStorage.removeItem("room name");
      window.location="index.html";
      
      }