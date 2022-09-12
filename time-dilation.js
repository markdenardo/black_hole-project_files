//black_hole: time-dilation
//MDN cc 2022
const t =(()=>time)
const pi=(()=>Math.random(Math.PI))
const f=(()=>a.fft[0])
const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid(t).scale(pi).rotate(t,0.1).out(o))
const flt=(i,v,o)=>(src(i).scale(v).out(o))
const flt2=(i,m,v,o)=>(src(i).modulate(m).modulatePixelate(noise(v,0.5),100).out(o))
sh(pi,o0,o0)
flt(o0,f,o1)
flt2(o1,o0,f,o2)
render(o2)
