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