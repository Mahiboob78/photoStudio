const firebaseConfig = {
    apiKey: "AIzaSyCGmdtQOn5F0oho121yunFhyGHdyfRumK8",
    authDomain: "kirunageusersdata.firebaseapp.com",
    databaseURL: "https://kirunageusersdata-default-rtdb.firebaseio.com",
    projectId: "kirunageusersdata",
    storageBucket: "kirunageusersdata.appspot.com",
    messagingSenderId: "690254739354",
    appId: "1:690254739354:web:2a111d24f75493897e6c23"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var userdatabase = firebase.database().ref("kirunageusersdata");

function submitData() {

  var name = getElementVal("username");
  var mobNum = getElementVal("mobNum");
  var emailid = getElementVal("email");
  var optns = getElementVal("optns");


  saveData(name, mobNum, emailid, optns);

  // console.log(name);
  alert("Data Sent Successfully. We will get back you Soon");
 
  // reset the form
  document.getElementById("userdata").reset();
}

const saveData = (name, mobNum, emailid, optns) => {
  firebase
  .database()
  .ref("kirunageusersdata/" + mobNum)
  .set({
    Name: name,
    Mobile_num: mobNum,
    Email_Id: emailid,
    Reason: optns,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

