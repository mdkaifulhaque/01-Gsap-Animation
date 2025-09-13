gsap.timeline()
  .from(".circle", { duration: 1, scale: 0, stagger: 0.2 })
  .from(".time", { duration: 1, x: 100, opacity: 0 })
  .from(".heading", { duration: 1, y: 50, opacity: 0 });