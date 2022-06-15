"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */
		var bg = document.getElementById('bg');
		var over1 = document.getElementById('over1');
		var over2 = document.getElementById('over2');
		var over3 = document.getElementById('over3');
		var over4 = document.getElementById('over4');
		function activ(e) {
			e.classList.add('active');
		}
		function remov(e) {
			e.classList.remove('active');
		}
		var videoEl = document.getElementById('video');
		switch (document.body.id) {
			case "body_top":
				// top panel code here
				break;

				case "body_left":
				// left panel code here
				document.addEventListener('DOMContentLoaded', function(){
					Premium.video.cover("#videoContainer");
					document.querySelector('body').classList.remove('preload');
				});
				videoEl.onended = function(e) {
					activ(bg);
					activ(over1);
					function scrollLeft(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						if (scrollpos >= header_height){
							activ(over2);
							setTimeout(remov(over1),300);
						}else{
							activ(over1);
							setTimeout(remov(over2),300);
						}
					}
					window.top.addEventListener("scroll", scrollLeft)
				};
				break;

				case "body_right":
				// right panel code here
				document.addEventListener('DOMContentLoaded', function(){
					Premium.video.cover("#videoContainer");
					document.querySelector('body').classList.remove('preload');
				});
				videoEl.onended = function(e) {
					activ(bg);
					activ(over3);
					function scrollRight(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						if (scrollpos >= header_height){
							activ(over4);
							setTimeout(remov(over3),300);
						}else{
							activ(over3);
							setTimeout(remov(over4),300);
						}
					}
					window.top.addEventListener("scroll", scrollRight)
				};
				break;

				case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}

