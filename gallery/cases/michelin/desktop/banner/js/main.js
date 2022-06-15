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
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
				});
				function scrollL(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side = document.getElementById("side");
						side.classList.add('fade');

					}else{
						var side = document.getElementById("side");
						side.classList.remove('fade');
					}
				}
				try{
					window.top.addEventListener("scroll", scrollL)
				}catch(e){}
				// left panel code here
				break;

				case "body_right":
				document.addEventListener('DOMContentLoaded', function(){
					document.querySelector('body').classList.remove('preload');
				});
				function scrollR(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side = document.getElementById("side");
						side.classList.add('fade');

					}else{
						var side = document.getElementById("side");
						side.classList.remove('fade');
					}
				}
				try{
					window.top.addEventListener("scroll", scrollR)
				}catch(e){}
				// right panel code here
				break;

				case "body_back":
				// back panel code here
				break;
			}

			/* END OF CUSTOM JS */
		}
	}