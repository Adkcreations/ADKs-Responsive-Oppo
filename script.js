var animation=bodymovin.loadAnimation({
	container:document.getElementById('anim'),
	renderer:'svg',
	loop:false,
	autoplay:true,
	playbackRate:100,
	path:'data.json'
})
animation.playbackRate = 100;