"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				break;

			case "body_left":
				// left panel code here
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side= document.getElementById("side");
						side.classList.add("fade");
					}else{
						var side= document.getElementById("side");
						side.classList.remove("fade");
					}
				}
				try{
					window.top.addEventListener("scroll", scrollLeft)
				}catch(e){

				}
				break;

			case "body_right":
				// right panel code here
				function scrollRight(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side= document.getElementById("side");
						side.classList.add("fade");
					}else{
						var side= document.getElementById("side");
						side.classList.remove("fade");
					}
				}
				try{
					window.top.addEventListener("scroll", scrollRight)
				}catch(e){

				}
				var videoEl = document.querySelector(".jpt-video-container VIDEO");
				var currentPos = "up"
				if (videoEl) {
					Premium.video.switchOnScroll(document.querySelector(".jpt-video-container"), 1, function(pos){
						currentPos = pos;
						if (currentPos === "down"){
							gsap.set(".jpt-video-container", {opacity:"1"});
							PremiumJpControls.resizeAll();
							videoEl.play();
						} else {
							gsap.set(".jpt-video-container", {opacity:"0"});
							PremiumJpControls.resizeAll();
							videoEl.pause();
						}
					});
				}
				break;

			case "body_back":
				// back panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
}