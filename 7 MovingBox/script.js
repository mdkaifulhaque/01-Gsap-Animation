gsap.to('.card', {
    duration: 5,
    opacity: 1,
    scale: 1,
    ease: 'elastic.out(1, 0.3)',
    delay: 0.5,
    onComplete: ()=> {
       gsap.to('.card',{
           y: -20,
           repeat: -1,
           yoyo: true,
           duration: 0.5,

       });
    }
});



