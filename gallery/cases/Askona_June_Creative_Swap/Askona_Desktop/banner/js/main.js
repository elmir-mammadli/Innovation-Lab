"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				var campaignInfo = document.querySelectorAll(".fade_top");
				var index = 0;
				var interval = setInterval(function() {
				  campaignInfo[index++].classList.add("faded");
				  if (index === campaignInfo.length) {
				    clearInterval(interval);
				  }
				}, 200);

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
									}, 80);
									//document.querySelector('.fade_top').classList.add('faded');
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

									//document.querySelector('.fade_top').classList.remove('faded');
                }
            }
          try{
            window.top.addEventListener("scroll", scrollLeft)
          }catch(e){

          }

				break;

			case "body_right":
				function scrollRight(){
							let scrollpos = window.top.scrollY;
							const header_height = 250;
							if (scrollpos >= header_height){
								var campaignInfo = document.querySelectorAll(".fade_right");
								var index = 0;
								var interval = setInterval(function() {
									campaignInfo[index++].classList.add("faded");
									if (index === campaignInfo.length) {
										clearInterval(interval);
									}
								}, 80);
							//	document.querySelector('.fade_top').classList.add('faded');
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

								//document.querySelector('.fade_top').classList.remove('faded');
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
