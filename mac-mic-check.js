// Mac mic permissions check

perms = 0;
function cM(){navigator.permissions.query({name: 'microphone'}).then((pS)=>{perms = pS.state !== 'denied';});}
cI = window.cI ? cI : 0;clearInterval(cI);cI = setInterval(cM,3000);if(/iPad|iPhone|iPod/.test(navigator.userAgent)) clearInterval(cI);

let nomic = ()=> Math.sin(time*4);
let yesmic = ()=> a.fft[0];
let f = ()=> perms ? yesmic() : nomic();
osc(30,.1,f).out()
