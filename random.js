const sounds = ["gryffindor.mp4","hufflepuff.mp4","ravenclaw.mp4"];
var wand = document.getElementById("wand");
var mouth = document.getElementById("mouth");

wand.addEventListener("mousedown", () =>{
	wand.style.backgroundImage="url(images/wandDown.png)";	
});

var pastRandom = 1;
wand.addEventListener("mouseup", () => {
		wand.style.backgroundImage="url(images/wand.png)";
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