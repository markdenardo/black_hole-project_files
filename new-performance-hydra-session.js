//bh_nu
//by MDN
//https://www.instagram.com/markdenardo/

s0.initVideo("https://media3.giphy.com/media/JQpH25Y6TrRQwtF0KY/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/TZf4ZyXb0lXXi/giphy.mp4")
osc(1, 1, 1)
	.blend(noise(1, 1, 1))
	.blend(src(s0), 100)
	.blend(src(s1), 0.9)
	.out(o0)
render(o0)
