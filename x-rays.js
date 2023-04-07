// licensed with CC BY-NC-SA 4.0 
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// black_hole - x-rays 
// MDN (@markdenardo)

bpm = 300

const t = (() => time)
const pi = (() => Math.random(Math.PI))
const f = (() => a.fft[0])
const sh = (s, o, m) => (shape(s)
	.repeat(t, 1)
	.kaleid(t)
	.scale(pi)
	.rotate(t, 0.1)
	.out(o))

sh(pi, o0, o1)
render(o0)
