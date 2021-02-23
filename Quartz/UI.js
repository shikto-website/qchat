function RawButton(prop, child){
    return Quartz.newElement("button", (prop || {}), (child || []))
}

function RawContainer(prop, child){ 
    return Quartz.newElement("div", (prop || {}), (child || []))
}

function RawText(prop, child){
    return Quartz.newElement("span", (prop || {}), (child || []))
}

function RawImage(prop, child){
    return Quartz.newElement("img", (prop || {}), (child || []))
}

//----------------------------------------

function Button(){
    Quartz.newComponent(this, (prop)=>{
        return RawButton({
            ...prop
        }, this.children)
    })
    this.addClasses(["button", "animation-elevate", "animation-ripple"])
    return this.render({
        innerHTML: this.text,
        ...this.properties
    });
}

function TinyText(){
    Quartz.newComponent(this, (prop)=>{
        return RawText({
            ...prop
        }, this.children)
    })
    this.addClasses([])
    return this.render({
        innerHTML: this.text,
        textSize: 10,
        ...this.properties
    });
}

function SmallText(){
    Quartz.newComponent(this, (prop)=>{
        return RawText({
            ...prop
        }, this.children)
    })
    this.addClasses([])
    return this.render({
        innerHTML: this.text,
        textSize: 13,
        ...this.properties
    });
}

function BigText(){
    Quartz.newComponent(this, (prop)=>{
        return RawText({
            ...prop
        }, this.children)
    })
    this.addClasses([])
    return this.render({
        innerHTML: this.text,
        textSize: 20,
        ...this.properties
    });
}

function HugeText(){
    Quartz.newComponent(this, (prop)=>{
        return RawText({
            ...prop
        }, this.children)
    })
    this.addClasses([])
    return this.render({
        innerHTML: this.text,
        textSize: 25,
        ...this.properties
    });
}

function Text(){
    Quartz.newComponent(this, (prop)=>{
        return RawText({
            ...prop
        }, this.children)
    })
    this.addClasses([])
    return this.render({
        innerHTML: this.text,
        ...this.properties
    });
}

function Image(){
    Quartz.newComponent(this, (prop)=>{
        return RawImage({
            ...prop
        }, this.children)
    })
    this.addClasses(["image"])
    return this.render({
        ...this.properties
    });
}

function Container(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["container"])
    return this.render({
        ...this.properties
    });
}

function Card(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["card", "paper", "animation-ripple", "animation-ripple-dark"])
    return this.render({
        ...this.properties
    });
}

function Paper(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["paper"])
    return this.render({
        ...this.properties
    });
}

function FlexibleBox(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["flexible-box"])
    return this.render({
        ...this.properties
    });
}

function StrechBox(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["strech-box"])
    return this.render({
        ...this.properties
    });
}

function Column(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["column"])
    return this.render({
        ...this.properties
    });
}

function Row(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["row"])
    return this.render({
        ...this.properties
    });
}

function ScrollColumn(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["column", "scroll-v"])
    return this.render({
        ...this.properties
    });
}

function ScrollRow(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["row", "scroll-h"])
    return this.render({
        ...this.properties
    });
}

function Circle(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["circle", "center-box"])
    return this.render({        
        height: this.size || 50,
        width: this.size || 50,
        ...this.properties
    });
}

function CenterBox(){
    Quartz.newComponent(this, (prop)=>{
        return RawContainer({
            ...prop
        }, this.children)
    })
    this.addClasses(["center-box"])
    return this.render({
        ...this.properties
    });
}

function Avatar(){
    Quartz.newComponent(this, (prop)=>{
        return Circle({
            padding: prop.size * 0.2 || 10,
            ...prop
        },[
            StrechBox([
                Image({
                    onclick:prop.onclick,
                    src: (prop.src || prop.image) || "https://microsoft.com/favicon.ico"
                })
            ])
        ])
    })
    this.addClasses(["avatar"])
    return this.render({
        ...this.properties
    });
}


