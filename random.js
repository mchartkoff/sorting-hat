var windowWidth = document.getElementsByTagName("body")[0].clientWidth;
//console.log(windowWidth);
const sounds = ["gryffindor.mp4","hufflepuff.mp4","ravenclaw.mp4"];
var wand = document.getElementById("wand");
var mouth = document.getElementById("mouth");
if(windowWidth < 500){
/*	wand.addEventListener("touchstart",function(e){
		e.preventDefault;
		this.style.backgroundImage="url(images/wandDown.png)";
	/*var random = Math.floor(Math.random()*sounds.length);
	mouth.setAttribute("src","sounds/"+sounds[random]);
	//mouth.currentTime = 0;
	mouth.play();
	
});*/
	
}else{
	wand.addEventListener("mousedown",function(){
		this.style.backgroundImage="url(images/wandDown.png)";
	/*var random = Math.floor(Math.random()*sounds.length);
	mouth.setAttribute("src","sounds/"+sounds[random]);
	//mouth.currentTime = 0;
	mouth.play();*/
	
});
}
var pastRandom = 1;
wand.addEventListener("mouseup",function(){
		this.style.backgroundImage="url(images/wand.png)";
		var random = Math.floor(Math.random()*sounds.length);
		if(pastRandom==random){
			random++;
			if(random > 2){
				random=0;
			}
		}
		mouth.setAttribute("src","sounds/"+sounds[random]);
		//mouth.currentTime = 0;
		mouth.play();
		pastRandom=random;
	});