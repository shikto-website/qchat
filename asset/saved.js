var firebaseConfig = {
    apiKey: "AIzaSyA8mtd1c4wxjRnikKnLcIIxTNpVAkLJ8dM",
    authDomain: "qchat-308cc.firebaseapp.com",
    databaseURL: "https://qchat-308cc-default-rtdb.firebaseio.com",
    projectId: "qchat-308cc",
    storageBucket: "qchat-308cc.appspot.com",
    messagingSenderId: "966004816480",
    appId: "1:966004816480:web:6271f7a2db8fb9aed0a105"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    user.avatar = result.user.photoURL;

    console.log("user", user)
    console.log("token", token)

    show_now()
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log("errorMessage", errorMessage)
  });

function show_now(){
    Quartz.Render([
        Container({
            id:"msgBase",
            classNames:["scroll-v"],
            size:["fill", "fill"], 
            align:"end"
        },[
            Container({
                classNames:["animation-smoothWidth"],
                id:"aaaa"
            },[
                MessageTemplate({
                    message:"KAJIFJK\nSJFKJK",
                    type:"text"
                }),
                MessageTemplate({
                    message:img_a,
                    type:"image",
                    meSender:true
                }),
                MessageTemplate({
                    message:img_a,
                    type:"text",
                    meSender:true
                }),
                MessageTemplate({
                    message:img_b,
                    type:"image"
                })
            ])
        ])    
    ])
}