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
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
				});
				var back = document.querySelectorAll('.back');
				var index = 0;
				var interval = setInterval(function() {
					back[index++].classList.add("active");
					if (index === back.length) {
						var active = document.querySelectorAll('.active');
						for (var i=1;i<active.length;i++) {
							active[i].classList.remove('active')
						}
						index = 0;
					}
				}, 1000);
				var overlay = document.querySelectorAll('.overlay');
				var ind = 0;
				var interval2 = setInterval(function() {
					if ( 0 < ind) {
						document.querySelector('.fade').classList.remove('fade');
						overlay[ind++].classList.add("fade");
						if (ind === overlay.length) {
							clearInterval(interval2);
						}
					}
					else {
						overlay[ind++].classList.add("fade");
					}
					
				}, 2000);
				break;

				case "body_left":
				// left panel code here
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
				});
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					var side = document.getElementById('side');
					if (scrollpos >= header_height){
						side.classList.add("op");
						if (side.classList.contains('time')) {}
							else {
								side.classList.add('time');
								var back = document.querySelectorAll('.sback');
								var index = 0;
								var interval3 = setInterval(function() {
									back[index++].classList.add("active");
									if (index === back.length) {
										var active = document.querySelectorAll('.active');
										for (var i=1;i<active.length;i++) {
											active[i].classList.remove('active')
										}
										index = 0;
									}
								}, 1000);
								var overlay = document.querySelectorAll('.overlay');
								var ind = 0;
								var interval4 = setInterval(function() {
									if ( 0 < ind) {
										document.querySelector('.fade').classList.remove('fade');
										overlay[ind++].classList.add("fade");
										if (ind === overlay.length) {
											clearInterval(interval4);
										}
									}
									else {
										overlay[ind++].classList.add("fade");
									}

								}, 2000);
							}
						}else{
							side.classList.remove("op");
						}
					}
					try{
						window.top.addEventListener("scroll", scrollLeft)
					}catch(e){

					}
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
					break;

					case "body_right":
					// right panel code here
					document.addEventListener('DOMContentLoaded', function(){
						document.querySelector('body').classList.remove('preload');
					});
					function scrollRight(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						var side = document.getElementById('side');
						if (scrollpos >= header_height){
							side.classList.add("op");
							if (side.classList.contains('time')) {}
								else {
									side.classList.add('time');
									var back = document.querySelectorAll('.sback');
									var index = 0;
									var interval3 = setInterval(function() {
										back[index++].classList.add("active");
										if (index === back.length) {
											var active = document.querySelectorAll('.active');
											for (var i=1;i<active.length;i++) {
												active[i].classList.remove('active')
											}
											index = 0;
										}
									}, 1000);
									var overlay = document.querySelectorAll('.overlay');
									var ind = 0;
									var interval4 = setInterval(function() {
										if ( 0 < ind) {
											document.querySelector('.fade').classList.remove('fade');
											overlay[ind++].classList.add("fade");
											if (ind === overlay.length) {
												clearInterval(interval4);
											}
										}
										else {
											overlay[ind++].classList.add("fade");
										}

									}, 2000);
								}
							}else{
								side.classList.remove("op");
							}
						}
						try{
							window.top.addEventListener("scroll", scrollRight)
						}catch(e){

						}
						break;

						case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}
