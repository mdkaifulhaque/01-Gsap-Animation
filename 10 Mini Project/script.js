var tl = gsap.timeline({defaults:{ease:"back"}});

   tl.from("h1",{ duration: 1, opacity: 0, x: 100})
   tl.from(".highlight",{duration:1, opacity: 0, x: -100, color: "blue",})
   tl.from("p",{duration:1, opacity: 0, y: 30, }, "-=0.5")
   tl.from("button",{duration:1, opacity: 0, y: 50, }, "-=0.5")
    tl.from("img",{duration:1, opacity: 0, y: 100, stagger:0.3,}, "-=0.5")

//we can set in timeline some default values and  then we dont have to write them again and again we can also set some values for specific animations
//GSDevTools.create(); 

/*Function init(){
    all gsap code
}

window.addEventListener("load", function(event){
    init();
})
*/

//autoAlpha