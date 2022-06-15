"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
	function Rubles(){
		let parent = document.querySelector('.bmw__energy');
		let div = document.createElement('div');
		div.classList.add('bmw__energy--item');
		parent.appendChild(div);
		setTimeout(function(){
			div.remove();
		},4000);
	}
		switch (document.body.id) {
			case "body_top":

			break;
			case "body_left":
				Premium.communicator.init(2);
				const button = document.querySelector('.bmw__cta--left');
				button.addEventListener('click', event => {
				  Premium.expand.expand("expanded_left.html", "width:100vw;height:100vh;");
				});
				Premium.communicator.api.receiveMessage(function(mess){
					if (mess.action === "close-left"){
						Premium.expand.close();
					}
				})
				setInterval(function(){
					Rubles();
				},1000);
			break;
			case "body_right":
				Premium.communicator.init(2);
				setInterval(function(){
					Rubles();
				},1000);
				const button2 = document.querySelector('.bmw__cta--right');
				button2.addEventListener('click', event => {
				  Premium.expand.expand("expanded_right.html", "width:100vw;height:100vh;");
				});
				Premium.communicator.api.receiveMessage(function(mess){
					if (mess.action === "close-right"){
						Premium.expand.close();
					}
				})
			break;
			case "body_back":

				// back panel code here
			break;
			case "body_expanded":
				Premium.communicator.init(undefined)
				let close = document.querySelector('aside'),
				close2 = document.querySelector('.bmw__close');
				close.addEventListener("click", function () {
					Premium.communicator.api.sendMessage({action:"close-" + document.body.getAttribute('data-name')})
				});
				close2.addEventListener("click", function () {
					Premium.communicator.api.sendMessage({action:"close-" + document.body.getAttribute('data-name')})
				});
				close.setAttribute("jp-noClick", "");
			if(document.body.getAttribute('data-name')=='left'){
				document.querySelector("footer").classList.remove('active');
				document.querySelector("header").classList.add('active');
				Premium.creative.createVideoPlayerAppended = function(video, container){
					var videoEl = document.querySelector("video");
					Premium.video.pauseWhenOutOfView();
					if (videoEl){
							var prom = videoEl.play();
							videoEl.play();
							videoEl.muted = !videoEl.muted;
							if(prom){
								prom.catch(function() {})
							}
					}
				}
			}else{
				document.querySelector("footer").classList.add('active');
				document.querySelector("header").classList.remove('active');
				var sliderImages = document.querySelectorAll(".slides1");
				var arrowLeft = document.querySelector("#arrow_left"),
				arrowRight = document.querySelector("#arrow_right"),
				current = 0;
				// Clear all images
				function reset(){
				for (let i = 0; i < sliderImages.length; i++) {
					sliderImages[i].style.display = "none";
				}
				}
				// Initial slide
				function startSlide() {
				reset();
				sliderImages[0].style.display = "block";
				}

				// Show previous
				function slideLeft() {
				reset();
				sliderImages[current - 1].style.display = "block";
				current--;
				}

				// Show next
				function slideRight() {
				reset();
				sliderImages[current + 1].style.display = "block";
				current++;
				}

				// Left arrow click
				arrowLeft.addEventListener("click", function () {
				if (current === 0) {
					current = sliderImages.length;
				}
				slideLeft();
				});

				// Right arrow click
				arrowRight.addEventListener("click", function () {
				if (current === sliderImages.length - 1) {
					current = -1;
				}
				slideRight();
				});

				startSlide();

			}
			break;
		}

		/* END OF CUSTOM JS */
	}
}
