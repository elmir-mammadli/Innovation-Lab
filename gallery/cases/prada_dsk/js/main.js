"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				Premium.creative.createVideoPlayerAppended = function(video, container){
					var videoEl = document.querySelector(".jpt-video-container video");
					if (videoEl) {
						Premium.video.pauseWhenOutOfView();
						var prom = videoEl.play();
						if (prom) {
							prom.catch(function() {})
						}
					}
				  }
				break;

			case "body_left":
				// left panel code here
				break;

			case "body_right":
				// right panel code here
				break;

			case "body_back":
				// back panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
}