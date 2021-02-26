var layout = {
    loginScreen:[
        Button({text:"", id:"googleLoginButton"},[
            Row([
                Container({
                    size:[50,50],
                    backgroundColor:Colors.white
                },[                
                    Image({
                        src:"asset/image/google.png",
                        height:"fill"
                    })
                ]),
                Container({size:[10,20]}),
                Text({
                    id:"loginButtonText",
                    text:"Continue with Google",
                    textStyle:"bold",
                    textSize:18
                })
            ])
        ]),
        (()=>{
            if(Query().pwa){
                return Container()
            }else{
                return (
                    Button({text:"", id:"installAppButton", backgroundColor:Colors.white},[
                        Row([
                            Container({
                                size:[50,50],
                                backgroundColor:Colors.white
                            },[                
                                Image({
                                    src:"asset/image/favicon.png",
                                    height:"fill"
                                })
                            ]),
                            Container({size:[10,20]}),
                            Text({
                                text:"Install App",
                                textStyle:"bold",
                                textSize:18,
                                textColor:Colors.black
                            })
                        ])
                    ])
                )
            }
        })()
    ],

    chatRoomScreen:[
        ChatInterphase({id:"chatBox"}),
        Paper({
            width:"fill"
        },[
            FlexibleBox([
                Row([
                    TextBox({
                        id:"textBox",
                        size:[45, "fill"],
                        backgroundColor:Colors.light_grey
                    }),
                    Button({
                        id:"sendMessageButton",
                        text:">",
                        size:[45, 45],
                        margin:[0,0,0,5]
                    })
                ])
            ])
        ])
    ]
}




