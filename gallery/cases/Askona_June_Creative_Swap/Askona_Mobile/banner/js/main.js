"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
        Premium.product.initOrientationMessage("Please rotate your device.", "#4E4E4E");
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				setTimeout(function(){
					var campaignInfo = document.querySelectorAll(".fade_top");
					var index = 0;
					var interval = setInterval(function() {
					campaignInfo[index++].classList.add("faded");
					if (index === campaignInfo.length) {
						clearInterval(interval);
					}
					}, 200);
				},900);
				break;

			case "body_main":
				// main panel code here
				break;

			case "body_bottom":
				// bottom panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
};
