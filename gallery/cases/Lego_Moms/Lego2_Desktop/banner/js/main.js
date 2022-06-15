"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		switch (document.body.id) {
			case "body_top":
			var slides = document.querySelectorAll('.lego__item');
			var currentSlide = 0;
			var slideInterval = setInterval(nextSlide,5000);
			function nextSlide(){
				slides[currentSlide].classList.remove('active');
				currentSlide = (currentSlide+1)%slides.length;
				slides[currentSlide].classList.add('active');
			}
			break;

			case "body_left":
			function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var campaignInfo = document.querySelectorAll(".fade_left");
						var index = 0;
						var interval = setInterval(function() {
							campaignInfo[index++].classList.add("faded");
							if (index === campaignInfo.length) {
								clearInterval(interval);
							}
						}, 20);
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
						}, 20);
					}
			}
		try{
			window.top.addEventListener("scroll", scrollLeft)
		}catch(e){

		}
		var slides = document.querySelectorAll('.lego__item');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide2,5000);
		function nextSlide2(){
		  slides[currentSlide].classList.remove('active');
		  currentSlide = (currentSlide+1)%slides.length;
		  slides[currentSlide].classList.add('active');
		}

			break;

			case "body_right":
			var slides = document.querySelectorAll('.lego__item');
			var currentSlide = 0;
			var slideInterval = setInterval(nextSlide3,5000);
			function nextSlide3(){
				slides[currentSlide].classList.remove('active');
				currentSlide = (currentSlide+1)%slides.length;
				slides[currentSlide].classList.add('active');
			}

			break;

			case "body_back":

			break;
		}

		/* END OF CUSTOM JS */
	}
}
