"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				document.addEventListener('DOMContentLoaded', function () {
					document.querySelector('.preload').classList.remove('preload');
				});
				Premium.creative.createVideoPlayerAppended = function(video, container) {
					var videoEl = document.querySelector("video");
					if (videoEl) {
						var prom = videoEl.play();
						if (prom) {
							prom.catch(function() {})
						}
						Premium.video.pauseWhenOutOfView(true, .5,videoEl);
					}
				}
				var start3 = document.querySelector('.side-start')
				start3.addEventListener('animationend', function(ev) {
					if (ev.animationName === 'fadeStart') {
						document.getElementById('top').classList.add('vise');
					}
				});
				break;

				case "body_left":
				// left panel code here
				document.addEventListener('DOMContentLoaded', function () {
					document.querySelector('.preload').classList.remove('preload');
				});
				function getRandomInt(max) {
					return Math.floor(Math.random() * max);
				}
				var box = document.querySelector('.side-bg--blicks');
				for (var x = 0; x < 41; x++) {
					var div = document.createElement('div');
					div.className = "flare";
					box.append(div);
				}
				var flares = document.querySelectorAll('.flare');
				for (var i = flares.length - 1; i >= 0; i--) {
					var top = getRandomInt(100);
					var left = getRandomInt(100);
					flares[i].style.top = top + "%";
					flares[i].style.left = left + "%";
				}
				var ind = 0;
				setInterval(function () {
					if ( ind == 40 ) {
						clearInterval();
					}
					else {
						flares[ind].classList.add('anim');
						ind++;
					}
				},60);

				var over1 = document.getElementById('over1');
				var over2 = document.getElementById('over2');
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					var video = document.querySelector("video");
					if (scrollpos >= header_height){
						over1.classList.remove('active');
						over2.classList.add('active');
						document.querySelector(".side-video").style.opacity = '1';
						PremiumJpControls.resizeAll();
						if(video){
							var videoDuration = video.duration;
							var videoCurrent = video.currentTime;
							if ( videoCurrent == videoDuration ) {

							}
							else {
								video.play();
							}
						}
					}else{
						over2.classList.remove('active');
						over1.classList.add('active');
						document.querySelector(".side-video").style.opacity = '0';
						PremiumJpControls.resizeAll();
						video.pause();
					}
				}
				let start = document.querySelector('.side-start')
				start.addEventListener('animationend', function(ev) {
					if (ev.animationName === 'fadeStart') {
						start.style.zIndex = '-5';
						window.top.addEventListener("scroll", scrollLeft);
						scrollLeft();
					}
				});
				break;
				case "body_right":
				// right panel code here
				document.addEventListener('DOMContentLoaded', function () {
					document.querySelector('.preload').classList.remove('preload');
				});
				function getRandomInt2(max) {
					return Math.floor(Math.random() * max);
				}
				var box = document.querySelector('.side-bg--blicks');
				for (var x = 0; x < 41; x++) {
					var div = document.createElement('div');
					div.className = "flare";
					box.append(div);
				}
				var flares = document.querySelectorAll('.flare');
				for (var i = flares.length - 1; i >= 0; i--) {
					var top = getRandomInt2(100);
					var left = getRandomInt2(100);
					flares[i].style.top = top + "%";
					flares[i].style.left = left + "%";
				}
				var ind = 0;
				setInterval(function () {
					if ( ind == 40 ) {
						clearInterval();
					}
					else {
						flares[ind].classList.add('anim');
						ind++;
					}
				},60);
				var over1 = document.getElementById('over1');
				var over2 = document.getElementById('over2');
				function scrollRight(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						over1.classList.remove('active');
						over2.classList.add('active');
					}else{
						over2.classList.remove('active');
						over1.classList.add('active');
					}
				}
				var start2 = document.querySelector('.side-start')
				start2.addEventListener('animationend', function(ev) {
					if (ev.animationName === 'fadeStart') {
						start2.style.zIndex = '-5';
						window.top.addEventListener("scroll", scrollRight);
						scrollRight();
					}
				});
				break;

				case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}