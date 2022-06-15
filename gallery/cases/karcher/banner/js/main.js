"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
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
					setTimeout(function(){
						var campaignInfo = document.querySelectorAll(".fade_top");
						var index = 0;
						var interval = setInterval(function() {
							campaignInfo[index++].classList.add("faded");
							if (index === campaignInfo.length) {
								clearInterval(interval);
							}
						}, 120);
					},500);
				break;

				case "body_left":
					function scrollLeft(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						if (scrollpos >= header_height){
							var campaignInfo = document.querySelectorAll(".fade_bottom");
							var index = 0;
							var interval = setInterval(function() {
								campaignInfo[index++].classList.add("faded");
								if (index === campaignInfo.length) {
									clearInterval(interval);
								}
							}, 80);
							document.querySelector('.karcher__product--side').classList.add('active');
						}else{
								var campaignInfo = document.querySelectorAll(".faded");
								var index = 0;
								var interval = setInterval(function() {
									if(campaignInfo.length>0){
										campaignInfo[index++].classList.remove("faded");
									}
									if (index === campaignInfo.length) {
										clearInterval(interval);
									}
								}, 80);
							document.querySelector('.karcher__product--side').classList.remove('active');
						}
					}
					try{
						window.top.addEventListener("scroll", scrollLeft)
					}catch(e){

					}
				break;
				case "body_right":
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
					function scrollRight(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						if (scrollpos >= header_height){
							var campaignInfo = document.querySelectorAll(".fade_bottom");
							var index = 0;
							var interval = setInterval(function() {
								campaignInfo[index++].classList.add("faded");
								if (index === campaignInfo.length) {
									clearInterval(interval);
								}
							}, 80);
							document.querySelector('.karcher__product--side').classList.add('active');
						}else{
								var campaignInfo = document.querySelectorAll(".faded");
								var index = 0;
								var interval = setInterval(function() {
									if(campaignInfo.length>0){
										campaignInfo[index++].classList.remove("faded");
									}
									if (index === campaignInfo.length) {
										clearInterval(interval);
									}
								}, 80);
							document.querySelector('.karcher__product--side').classList.remove('active');
						}
					}
					try{
						window.top.addEventListener("scroll", scrollLeft)
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
