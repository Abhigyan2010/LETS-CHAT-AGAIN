var firebaseConfig = {
  apiKey: "AIzaSyD6_7NL2QDCR5xpDk5EpcwYgzvA8T3_vyY",
  authDomain: "just-finish.firebaseapp.com",
  projectId: "just-finish",
  storageBucket: "just-finish.appspot.com",
  messagingSenderId: "1073151515027",
  appId: "1:1073151515027:web:f2c9622e5ce0d360267066",
  measurementId: "G-1CXT4NJBEG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  Name=localStorage.getItem("Name");
  document.getElementById("username").innerHTML=Name;
  function add_room(){
    Room=document.getElementById("Room_name").value;
    localStorage.setItem("Room",Room);
    firebase.database().ref("/").child(Room).update({
      purpose:"adding_room_name"  
    });
    localStorage.setItem("Room",Room);
    window.location="page.html";
  }
  function getData(){firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 row="<div id='room_names' onclick='redirectToRoomName(Room)'></div>";
 });});}
getData();
function redirectToRoomName(Room){
  localStorage.setItem("Room",Room);
  window.location="page.html";
}
function log_out(){
  localStorage.removeItem("Name");
  localStorage.removeItem("Room");
  window.location.replace("index.html");
}