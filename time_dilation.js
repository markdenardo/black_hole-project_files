// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// black_hole - time_dilation
// MDN (@markdenardo)

perms = 0;
function cM(){navigator.permissions.query({name: 'microphone'}).then((pS)=>{perms = pS.state !== 'denied';});}
cI = window.cI ? cI : 0;clearInterval(cI);cI = setInterval(cM,3000);if(/iPad|iPhone|iPod/.test(navigator.userAgent)) clearInterval(cI);

let nomic = ()=> Math.sin(time*4);
let yesmic = ()=> a.fft[0];
let f = ()=> perms ? yesmic() : nomic();

const t =(()=>time)
const pi=(()=>Math.random(Math.PI))
const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid([1,2,3].fast()).scale(pi).rotate(t,0.1).out(o))
const flt=(i,v,o)=>(src(i).scale(v).out(o))
const flt2=(i,m,v,o)=>(src(i).modulate(m).modulatePixelate(noise(v,0.5),100).out(o))

sh(f,o0,o0)
flt(o0,f,o1)
flt(o0,pi,o2)
flt2(o0,o1,f,o3)
render(o3)
