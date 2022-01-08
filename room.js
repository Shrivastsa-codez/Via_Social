
const firebaseConfig = {
  apiKey: "AIzaSyBgcieGYfaHJM3Iv5p6EFFSMC_2e6X2YWE",
  authDomain: "via-social-b6aa7.firebaseapp.com",
  databaseURL: "https://via-social-b6aa7-default-rtdb.firebaseio.com/",
  projectId: "via-social-b6aa7",
  storageBucket: "via-social-b6aa7.appspot.com",
  messagingSenderId: "805180648373",
  appId: "1:805180648373:web:c822af5bfe265846df87fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome to Via Social" + user_name + "!";
  
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding a room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location="vs_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+  Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;

//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="vs_page.html";
}
