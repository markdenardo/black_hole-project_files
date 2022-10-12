// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// black_hole - time_dilation
// MDN (@markdenardo)

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
