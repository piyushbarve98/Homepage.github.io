// firebase connectivity code

  // start
  var firebaseConfig = {
    apiKey: "AIzaSyBrOs40fC5z_aQdH-F9hlXAKvB5HHjG8eQ",
    authDomain: "my-portfolio-f2a52.firebaseapp.com",
    databaseURL: "https://my-portfolio-f2a52.firebaseio.com",
    projectId: "my-portfolio-f2a52",
    storageBucket: "my-portfolio-f2a52.appspot.com",
    messagingSenderId: "913127922467",
    appId: "1:913127922467:web:8cf793bdb7aaa68622ca96",
    measurementId: "G-JW6GHB78QH"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  //end






// code for mobile navbar on click of burger the navbar menu becomes active

let burger = document.getElementById('burger');
let menu = document.getElementById('menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('is-active');
});

let projectBtn = document.getElementById('nav-projects');
let modal = document.querySelector('#modal1');
let closeBtn = document.getElementById('closeBtn');
projectBtn.addEventListener('click',()=>{
    modal.classList.toggle('is-active');
});

closeBtn.addEventListener('click',()=>{
    modal.classList.remove('is-active');
});

let aboutBtn = document.getElementById('nav-about');
let modal2 = document.querySelector('#modal2');
let closeBtn2 = document.getElementById('closeBtn2');
aboutBtn.addEventListener('click',()=>{
    modal2.classList.toggle('is-active');
});

closeBtn2.addEventListener('click',()=>{
    modal2.classList.remove('is-active');
});


// code for uploading msg on to the firebase firestore on send button click

let sendBtn = document.getElementById('sendBtn');
let name = document.getElementById('name');
let msg = document.getElementById('msg');

sendBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(name.value!='' && msg.value!=''){
    db.collection('user').add({
        name: name.value,
        message:  msg.value
    }).then(()=>{
        alert('Message sent succesfully');
        name.value = '';
        msg.value = '';
    }).catch((err)=>{
        alert('Message not sent due to ' + err);
        name.value = '';
        msg.value = '';
    });
}
    
    
});
