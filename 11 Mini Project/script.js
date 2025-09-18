var tl = gsap.timeline()



tl.to("#main",{
    y:"100vh",
    scale:0.5,
    duration:0,
})

tl.to("#main",{
     y:"30vh",
     duration:1,
     delay:1,
})

tl.to("#main",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration: 0.8,
})



tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

tl.from("#bottom h3",{
    y:50,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.3
})



