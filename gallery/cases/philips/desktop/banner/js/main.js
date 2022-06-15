"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				// top panel code here
					Premium.creative.createVideoPlayerAppended = function(video, container) {
					var videoEl = document.querySelector(".jpt-video-container video");
						if (videoEl) {
								Premium.video.sync(videoEl, 1);
								Premium.video.switchOnScroll(videoEl.parentElement, 2);
								var prom = videoEl.play();
								if (prom) {
										prom.catch(function() {})
								}
						}
					}
				break;

				case "body_left":
				// left panel code here
						Premium.creative.createVideoPlayerAppended = function(video, container){
						var videoEl = document.querySelector(".jpt-video-container VIDEO");
						var currentPos = "up"
						if(videoEl){
							videoEl.volume = 0;
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
					}
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					var side = document.getElementById('side');
					if (scrollpos >= header_height){
						side.classList.add('fade');
					}
					else {
						side.classList.remove('fade');

					}
				}
				try{
					window.top.addEventListener("scroll", scrollLeft)
				}catch(e){

				}
				document.addEventListener('DOMContentLoaded', function(){
					document.getElementById('side').classList.remove('preload');
				});
				break;

				case "body_right":
				// right panel code here
				function scrollRight(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					var side = document.getElementById('side');
					if (scrollpos >= header_height){
						side.classList.add('fade');
					}
					else {
						side.classList.remove('fade');

					}
				}
				try{
					window.top.addEventListener("scroll", scrollRight)
				}catch(e){

				}
				document.addEventListener('DOMContentLoaded', function(){
					document.getElementById('side').classList.remove('preload');
				});
				break;

				case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}