const intro=document.querySelector('.intro');
const video=intro.querySelector('video');
const text=intro.querySelector('h1');

const section=document.querySelector('section');
const end=section.querySelector('h1');

const controller=new ScrollMagic.Controller();


let scene=new ScrollMagic.Scene({
    duration:3000,
    triggerElement:intro,
    triggerHook:0
})
.setPin(intro)
.addTo(controller);

let accelamount=0.1;
let scrollpos=0;
let delay=-0.5;

scene.on("update",e =>{
    scrollpos=e.scrollPos/1000;
});

setInterval(()=>{
    delay+=(scrollpos-delay*accelamount);
    console.log(scrollpos,delay);
    video.currentTime=scrollpos;
},41.6);


