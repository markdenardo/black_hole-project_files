// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// black_hole - time_dilation
// MDN (@markdenardo)

const t =(()=>time)
const pi=(()=>Math.random(Math.PI))
const f=(()=>a.fft[0])
const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid([1,2,3].fast()).scale(pi).rotate(t,0.1).out(o))
const flt=(i,v,o)=>(src(i).scale(v).out(o))
const flt2=(i,m,v,o)=>(src(i).modulate(m).modulatePixelate(noise(v,0.5),100).out(o))
sh(f,o0,o0)
flt(o0,f,o1)
flt(o0,pi,o2)
flt2(o0,o1,f,o3)
render(o3)
