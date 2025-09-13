const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const resume = document.querySelector('#resume');
const reverse = document.querySelector('#reverse');
const restart = document.querySelector('#restart');
const kill = document.querySelector('#kill');
const yoyo = document.querySelector('#yoyo');

const anime = gsap.to('.card', {
    opacity: 1,
    rotation:360,
    background:'#ff6f51',
    scale: 1.2,
    duration: 2,
    ease: 'bounce',
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    //paused: true,
    stagger:1,
    borderRadius: '50%',


});

play.addEventListener('click', () => {
    anime.play();
    
});

pause.addEventListener('click', () => {
    anime.pause();
});

resume.addEventListener('click', () => {
    anime.resume();
});

reverse.addEventListener('click', () => {
    anime.reverse();
});

restart.addEventListener('click', () => {
    anime.restart();
});

kill.addEventListener('click', () => {
    anime.kill();
});

yoyo.addEventListener('click', () => {
    anime.yoyo();
});

