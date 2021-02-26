

window.addEventListener("load", function () {
    navigator.serviceWorker
        .register("./background.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
})

var firebaseConfig = {
    apiKey: "AIzaSyA8mtd1c4wxjRnikKnLcIIxTNpVAkLJ8dM",
    authDomain: "qchat-308cc.firebaseapp.com",
    databaseURL: "https://qchat-308cc-default-rtdb.firebaseio.com",
    projectId: "qchat-308cc",
    storageBucket: "qchat-308cc.appspot.com",
    messagingSenderId: "966004816480",
    appId: "1:966004816480:web:6271f7a2db8fb9aed0a105"
};

if(window.navigator.onLine){
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    var database = firebase.database();
}

//------------------------------------------------------------------------------

var user = {}

var loginScreen = new Screen("loginScreen", layout.loginScreen, async (data)=>{
    $$("googleLoginButton").Element.onclick = async ()=>{
        $$("loginButtonText").Element.innerHTML = "Please wait";
      
        var result = await googleLogin()

        if(result){
            user.avatar = result.user.photoURL
            user.name = result.user.displayName
            user.email = result.user.email
            
            window.localStorage.setItem("user", JSON.stringify(user))
          
            chatRoomScreen.Open()
        }
    }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        // Optionally, send analytics event that PWA install promo was shown.
        console.log(`'beforeinstallprompt' event was fired.`);
    });

    $$("installAppButton").Element.onclick = async ()=>{
        deferredPrompt.prompt();
    }
})

var chatRoomScreen = new Screen("chatRoomScreen", layout.chatRoomScreen, async()=>{
    var globalChatRoom = firebase.database().ref('global');
    globalChatRoom.on('child_added', (snapshot) => {
          message__(snapshot)
    })
    globalChatRoom.on('child_changed', (snapshot) => {
          message__(snapshot)
    })
  
    function message__(snapshot){
        var k = snapshot.key;
        var v = snapshot.val();
        UI.chatBox.addMessage({
            id: k,
            ...v,
            meSender: (v.senderEmail == user.email),
            sent:true
        })
    }  
  
  
    $$("textBox").Element.onfocus = ()=>{
        UI.chatBox.scroll();
    }
    
    $$("sendMessageButton").Element.onclick = ()=>{
        if($$("textBox").Element.value != ""){
            var kk = replaceAll((user.email || ""), ".", "(dot)") + Date.now();
            UI.chatBox.addMessage({
                id: kk,
                message:$$("textBox").Element.value,
                meSender: true,
                senderAvatar: user.avatar || "",
                senderEmail: user.email
            })
            
            firebase.database().ref('global/' + kk).set({
                message: $$("textBox").Element.value,
                timestamp: Date.now(),
                senderAvatar:user.avatar || "",
                senderEmail: user.email
           })
           $$("textBox").Element.value = "" 
           $$("textBox").Element.focus
        }
    }
})

var savedUser = window.localStorage.getItem("user")
if(!savedUser || savedUser == {}){
    loginScreen.Open()
}else{
    user = JSON.parse(savedUser)
    chatRoomScreen.Open()
}
//chatRoomScreen.Open()

function googleLogin(){
    console.log("login with google")
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
        return result
        }).catch((error) => {
            console.log("errorMessage", error.message)
    });
}





var btn = Button({text:"HELLO", id:"he", backgroundColor:Colors.green});
var img_a = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80";
var img_b = "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/474024-nature-landscape-water-clouds-trees-beach-sunset-portrait_display-748x1392.jpg";
//console.log(btn);

