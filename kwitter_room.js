const firebaseConfig = {
  apiKey: "AIzaSyBfGLubvp54awpTn_U3zD91kxjz62IghVU",
  authDomain: "project-90-d25ea.firebaseapp.com",
  databaseURL: "https://project-90-d25ea-default-rtdb.firebaseio.com",
  projectId: "project-90-d25ea",
  storageBucket: "project-90-d25ea.appspot.com",
  messagingSenderId: "163370675806",
  appId: "1:163370675806:web:fec4bbfc7df1e3d23f0ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code

//End code
});});}
getData();
