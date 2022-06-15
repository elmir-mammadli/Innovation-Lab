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
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
					scrollLeft();
				});
				var side2 = document.getElementById("univlone");
				function bgLone(event){
					var x = event.clientX;
					var xWidth = window.innerWidth;
					var info = document.getElementById("univlone");
					var xt = Math.floor(100 - (x / xWidth * 100));
					info.style.backgroundPosition = xt + '% center';
				}
				side2.addEventListener( 'mousemove', bgLone , false);
				var swipe = document.getElementById('swipe');
					univlone.addEventListener("mouseenter", function () {
					swipe.classList.add('noswipe');
				} );
				var side = document.getElementById("univ");
				function bgL(event){
					var x = event.clientX;
					var xWidth = window.innerWidth;
					var info = document.getElementById("univ");
					var xt = Math.floor(100 - (x / xWidth * 100));
					info.style.backgroundPosition = xt + '% center';
				}
				side.addEventListener( 'mousemove', bgL , false);
					var swipel = document.getElementById('swipel');
					univ.addEventListener("mouseenter", function () {
					swipel.classList.add('noswipe');
				} );
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 300;
					if (scrollpos >= header_height){
						document.getElementById('side').classList.add('active');
					}else{
						document.getElementById('side').classList.remove('active');
					}
				}
				window.top.addEventListener("scroll", scrollLeft);
				break;

				case "body_right":
				// right panel code here
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
					scrollRight();
				});
				var side2 = document.getElementById("univrone");
				function bgRone(event){
					var x = event.clientX;
					var xWidth = window.innerWidth;
					var info = document.getElementById("univrone");
					var xt = Math.floor(100 - (x / xWidth * 100));
					info.style.backgroundPosition = xt + '% center';
				}
				side2.addEventListener( 'mousemove', bgRone , false);
					var swiper = document.getElementById('swiper');
					univrone.addEventListener("mouseenter", function () {
					swiper.classList.add('noswipe');
				} );
				var side = document.getElementById("univ2");
				function bg(event){
					var x = event.clientX;
					var xWidth = window.innerWidth;
					var info = document.getElementById("univ2");
					var xt = Math.floor(100 - (x / xWidth * 100));
					info.style.backgroundPosition = xt + '% center';
				}
				side.addEventListener( 'mousemove', bg , false);
					var swiper2 = document.getElementById('swiper2');
					univ2.addEventListener("mouseenter", function () {
					swiper2.classList.add('noswipe');
				} );
				function scrollRight(){
					let scrollpos = window.top.scrollY;
					const header_height = 300;
					if (scrollpos >= header_height){
						document.getElementById('side').classList.add('active');
					}else{
						document.getElementById('side').classList.remove('active');
					}
				}
				window.top.addEventListener("scroll", scrollRight);
				break;

				case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}