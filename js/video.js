var video = document.querySelector("#player1")

window.addEventListener("load", function(){
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speeding up");
	video.playbackRate /= 0.95;
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead!");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video time is ", video.currentTime)
});

// document.querySelector("#mute").addEventListener("click", function(){
// 	console.log("Mute the video");
// 	video.muted = true;
// 	if (video.muted = true){
// 		document.querySelector("#mute").innerHTML = "Unmutes";
// 	}
// 	// else (video.muted = false) {
// 	// 	document.querySelector("#mute").innerHTML ="Mute";
// 	// }

// });

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false) {    
    video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute";
}
else {
	video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
}
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function(){
	console.log("Select volume");
	console.log("The current volume is", this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Add filter");
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove filter");
	video.classList.remove("oldSchool");
})

// var volslider = document.getElementById("slider");
// var output = document.getElementById("volume")
// output.innerHTML = volslider.value;
// volslider.oninput = function(){
// 	output.innerHTML = this.value;
// }

// function myFunction() {
// 	var element = document.getElementById("vintage");
// 	element.classList.remove("oldSchool");
//   }