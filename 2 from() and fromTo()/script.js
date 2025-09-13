gsap.from(".squareOne", { duration: 2, x: 100, opacity: 0 });
gsap.fromTo(".square", { y: 200 , duration: 2, opacity: 0 }, { x: 300, opacity: 1 });