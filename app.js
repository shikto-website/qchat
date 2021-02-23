console.time();
var btn = Button({text:"HELLO", id:"he", backgroundColor:Colors.green});
var img_a = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80";
var img_b = "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/474024-nature-landscape-water-clouds-trees-beach-sunset-portrait_display-748x1392.jpg";
//console.log(btn);

function hel(){
    //Quartz.instantiate(this, "ajsdkjsakdjskal")
}

function MessageTemplate({message, type, id, sender, timessamp, body, meSender}){
    var msgBody;
    if(type == "text"){
        msgBody = (
            Text({text:replaceAll(message, "\n", "<br />")})
        )
    }else if(type == "image"){
        msgBody = (
            Image({src:message})
        )
    }

    return (
        Row({
            align:"start", 
            width:"fill",
            padding:[0,5,0,5]
        },(
            (()=>{
                if(!meSender){
                    return [
                        Avatar({size:30}),
                        Card({
                            borderRadius:10,
                            backgroundColor:Colors.light_blue  ,
                            textColor:Colors.white,    
                            maxSize:[null, "70%"]            
                        }, [msgBody])
                    ]
                }else{
                    return [
                        FlexibleBox({
                        }),
                        Card({
                            borderRadius:10,
                            backgroundColor:Colors.white  ,
                            textColor:Colors.black,    
                            maxSize:[null, "70%"]          
                        }, [
                            Column({
                                crossAlign:"end"
                            },[
                                msgBody,
                                Text({text:"/"})
                            ])
                        ])
                    ]
                }
            })()            
        ))
    )
}

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


console.timeEnd()

var firebaseConfig = {
    apiKey: "AIzaSyDa4jbrWSE2Af17MASS3SBHfx3snwryw4o",
    authDomain: "databackup-31218.firebaseapp.com",
    projectId: "databackup-31218",
    storageBucket: "databackup-31218.appspot.com",
    messagingSenderId: "426070003533",
    appId: "1:426070003533:web:99599c79c6dd7d08d2f104"
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
    var user = result.user;

    console.log("user", user)
    console.log("token", token)
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