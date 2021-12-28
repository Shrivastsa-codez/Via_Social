
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
const app = initializeApp(firebaseConfig);
  
function logout(){
    window.location="index.html";
}

function addroom(){
}