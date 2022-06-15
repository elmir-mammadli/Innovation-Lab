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
				function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side= document.getElementById("side");
						side.classList.add("fade");
					}else{
						var side= document.getElementById("side");
						side.classList.remove("fade");
					}
				}
				try{
					window.top.addEventListener("scroll", scrollLeft)
				}catch(e){

				}
				break;

			case "body_right":
				// right panel code here
				function scrollRight(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						var side= document.getElementById("side");
						side.classList.add("fade");
					}else{
						var side= document.getElementById("side");
						side.classList.remove("fade");
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