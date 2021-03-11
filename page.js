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
  user_name=localStorage.getItem("Name");
  room_name=localStorage.getItem("Room");
  function send_msg(){
      Message=document.getElementById("msg").value;
      likes=0;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:Message,
        like:0
    })
    document.getElementById("msg").value="";
  }
  function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; 
    message_data = childData;
    msg_div="<div style='background-color:dodgerblue'>";
    Username="<label>"+user_name+"</label><img src='tick.png'><br><br>";
    msg_tag="<label>"+Message+"</label><br><br>";
    like_btn="<button class='glyphicon glyphicon-thumbs-up btn btn-warning' onclick='updateLike(this.id)'>Like</button>";
    } }); }); };
    getData();