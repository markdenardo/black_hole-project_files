//ritchse helper code (deprecated from time-dilation)

let rrand = (min, max) => Math.random() * (max - min) + min;
let clamp = (x) => Math.max(0, Math.min(x, 1));
let either = (x,y,w=0.5) => Math.random() > w ? x : y;

perms = 0;
function cM(){navigator.permissions.query({name: 'microphone'}).then((pS)=>{perms = pS.state !== 'denied';});}
cI = window.cI ? cI : 0;clearInterval(cI);cI = setInterval(cM,3000);if(/iPad|iPhone|iPod/.test(navigator.userAgent)) clearInterval(cI);
let x = 0
let nomic = ()=> x = either(clamp(x += rrand(-.05,.12)) , x *= 0.7 )
let yesmic = ()=> a.fft[0];
let f = ()=> perms ? yesmic() : nomic();
