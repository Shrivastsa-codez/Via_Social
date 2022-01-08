const firebaseConfig = {
    apiKey: "AIzaSyBgcieGYfaHJM3Iv5p6EFFSMC_2e6X2YWE",
    authDomain: "via-social-b6aa7.firebaseapp.com",
    databaseURL: "https://via-social-b6aa7-default-rtdb.firebaseio.com/",
    projectId: "via-social-b6aa7",
    storageBucket: "via-social-b6aa7.appspot.com",
    messagingSenderId: "805180648373",
    appId: "1:805180648373:web:c822af5bfe265846df87fc"
  };

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, 
          message:msg,
          like:0
    });
    document.getElementByI("msg").value;

     
}