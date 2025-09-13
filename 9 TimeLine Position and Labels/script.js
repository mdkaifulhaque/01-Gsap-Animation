let tl = gsap.timeline({ paused: true });

// Add labels for clarity
tl.addLabel("titleIn")
  .to(".title", { opacity: 1, y: 0, duration: 1 })

  .addLabel("box1In")
  .to(".box1", { opacity: 1, y: 0, duration: 1 }, ">")  // after title

  .addLabel("box2In")
  .to(".box2", { opacity: 1, y: 0, duration: 1 }, "<+=0.5") // 0.5s overlap

  .addLabel("box3In")
  .to(".box3", { opacity: 1, y: 0, duration: 1 }, "box2In+=1"); // 1s after box2

// Buttons
document.getElementById("start").addEventListener("click", () => tl.restart());
document.getElementById("second").addEventListener("click", () => tl.play("box2In"));
document.getElementById("third").addEventListener("click", () => tl.play("box3In"));


//Relative Positioning
/*

"-=1" → previous se 1 sec pehle start

"+=1" → previous ke baad 1 sec delay se start

"<" → same time as previous start

">" → same time as previous end (default)

^ → start = previous end (delay ignore karke)

*/

/*
. Labels

Add Labels

tl.addLabel("start")
  .to(".box1", { x: 100 })
  .addLabel("middle")
  .to(".box2", { y: 100 })
  .addLabel("end")
  .to(".box3", { rotation: 360 });


Play / Seek

tl.play("middle");
tl.seek("end");


Add animation at label

tl.to(".circle", { scale: 2 }, "middle");
tl.to(".circle", { scale: 2 }, "middle+=0.5"); // 0.5s after
tl.to(".circle", { scale: 2 }, "middle-=0.5"); // 0.5s before
*/
