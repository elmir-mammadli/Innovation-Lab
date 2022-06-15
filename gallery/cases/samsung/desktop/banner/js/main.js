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
				var videoEl = document.querySelector(".jpt-video-container VIDEO");
				var currentPos = "up"
				if (videoEl) {
					videoEl.volume = 0;
					PremiumJpControls.callOnClickFullScreen(function() {
						Premium.expand.expand("expanded.html", "width:70vw;height:40vw;")
					});
					Premium.video.sync(videoEl, 1);
					Premium.video.switchOnScroll(document.querySelector(".jpt-video-container"), 2, function(pos){
						currentPos = pos;
						if (currentPos === "down"){
							gsap.set(".jpt-video-container", {opacity:"1"});
							PremiumJpControls.resizeAll();
						} else {
							gsap.set(".jpt-video-container", {opacity:"0"});
							PremiumJpControls.resizeAll();
						}
					});
					var prom = videoEl.play();
					if (prom) {
						prom.catch(function() {})
					}
				}
				// left panel code here
				
				break;

				case "body_right":
				// back panel code here
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
					window.top.addEventListener("scroll", scrollLeft)
				}catch(e){

				}
				var videoEl = document.querySelector(".jpt-video-container VIDEO");
				var currentPos = "up"
				if (videoEl) {
					videoEl.volume = 0;
					PremiumJpControls.callOnClickFullScreen(function() {
						Premium.expand.expand("expanded.html", "width:70vw;height:40vw;")
					});
					Premium.video.sync(videoEl, 1);
					Premium.video.switchOnScroll(document.querySelector(".jpt-video-container"), 2, function(pos){
						currentPos = pos;
						if (currentPos === "down"){
							gsap.set(".jpt-video-container", {opacity:"1"});
							PremiumJpControls.resizeAll();
						} else {
							gsap.set(".jpt-video-container", {opacity:"0"});
							PremiumJpControls.resizeAll();
						}
					});
					var prom = videoEl.play();
					if (prom) {
						prom.catch(function() {})
					}
				}
				break;
			}

			/* END OF CUSTOM JS */
		}
	}