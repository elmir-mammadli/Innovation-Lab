"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
        Premium.product.initOrientationMessage("Please rotate your device.", "#4E4E4E");
		/* START OF CUSTOM JS */

		var logo = document.querySelector(".logo")
		var card__root = document.querySelector(".card__root")
		var card = document.querySelector(".card")
		var flare = document.querySelector(".flare")
		var h1 = document.querySelector(".h1")
		var h2__1 = document.querySelector(".h2__1")
		var h2__2 = document.querySelector(".h2__2")
		var h3__1 = document.querySelector(".h3__1")
		var h3__1 = document.querySelector(".h3__1")
		var h3__2 = document.querySelector(".h3__2")
		var h4__1 = document.querySelector(".h4__1")
		var h4__2 = document.querySelector(".h4__2")
		var button = document.querySelector(".button")
		var background = document.querySelector(".background")

		switch (document.body.id) {
			case "body_top":
				// top panel code here

				// var t2 = gsap.timeline({repeat: 0});
				// 	t2.fromTo(card, {skewX: "30deg", scaleY: 0.5, rotate:"-10deg"}, {delay:0.75, ease: Sine.easeOut, duration: 0.5, opacity:1, skewX: "0deg", scaleY: 1, rotate:"0deg"});
			

				// var t6 = gsap.timeline({repeat: -1});
				// 	t6.to(flare, {delay:2, ease: Sine.easeOut, duration: 0, opacity:1, marginLeft:"0%"});
				// 	t6.to(flare, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, marginLeft:"200%"});
				// 	t6.to(flare, {delay:4.2, ease: Sine.easeOut, duration: 0, opacity:0});

				// var t7 = gsap.timeline({repeat: 0});
				// 	t7.fromTo(card__root, {scale: 0.8}, {delay:2, ease: Sine.easeOut, duration: 20, scale: 1});

					// Premium.video.pauseWhenOutOfView(true, .5, video);

				var t1 = gsap.timeline({repeat: 0});
					t1.to(logo, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t2 = gsap.timeline({repeat: 0});
					t2.fromTo(card, {skewX: "30deg", scaleY: 0.5, rotate:"-10deg"}, {delay:0.75, ease: Sine.easeOut, duration: 0.5, opacity:1, skewX: "0deg", scaleY: 1, rotate:"0deg"});
				
				var t3 = gsap.timeline({repeat: 0});
					t3.fromTo(h1, {x:"-4%"}, {delay:1, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});

				var t6 = gsap.timeline({repeat: -1});
					t6.to(flare, {delay:2, ease: Sine.easeOut, duration: 0, opacity:1, marginLeft:"0%"});
					t6.to(flare, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, marginLeft:"200%"});
					t6.to(flare, {delay:4.2, ease: Sine.easeOut, duration: 0, opacity:0});

				var t7 = gsap.timeline({repeat: 0});
					t7.fromTo(card__root, {scale: 0.8}, {delay:2, ease: Sine.easeOut, duration: 20, scale: 1});

				var animation = function( d, d2, elem, elem2, elem3){
					var t4 = gsap.timeline({repeat: 0});
						t4.fromTo(elem, {x:"-4%"}, {delay:d, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
						if(!elem3){
							t4.to(elem, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
						}
	
					var t5 = gsap.timeline({repeat: 0});
						t5.fromTo(elem2, {x:"-4%"}, {delay:d2, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
						if(!elem3){
						t5.to(elem2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
						}

					if(elem3){
						var t6 = gsap.timeline({repeat: 0});
							t6.fromTo(elem3, {x:"-4%"}, {delay: 12.3, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					}
				}

				animation( 4.25, 4.65, h2__1, h2__2)
				animation( 7.6, 8, h3__1, h3__2)
				animation( 11.5, 11.9, h4__1, h4__2, button)


				break;

			case "body_main":
				// main panel code here

				var t1 = gsap.timeline({repeat: 0});
					t1.fromTo(logo, { opacity:0 }, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t2 = gsap.timeline({repeat: -1});
					t2.fromTo(h1, {x:"-4%"}, {delay:1, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h2__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h2__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h3__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h3__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h4__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h4__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.to(h4__1, {delay:0.25, ease: Sine.easeOut, duration: 0, opacity:0, x:"4%"});

				var t3 = gsap.timeline({repeat: -1});

					t3.fromTo(h2__2, {x:"-4%"}, {delay:4.75, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h2__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h3__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h3__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h4__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h4__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});

				var t4 = gsap.timeline({repeat: 0});
					t4.fromTo(button, {x:"-4%"}, {delay: 0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});

				var t5 = gsap.timeline({repeat: 0});
					t5.fromTo(background, {opacity:0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t6 = gsap.timeline({repeat: -1});
					t6.to(flare, {delay:2, ease: Sine.easeOut, duration: 0, opacity:1, marginLeft:"0%"});
					t6.to(flare, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, marginLeft:"200%"});
					t6.to(flare, {delay:4.2, ease: Sine.easeOut, duration: 0, opacity:0});

				var t7 = gsap.timeline({repeat: 0});
					t7.fromTo(card__root, {scale: 0.8}, {delay:2, ease: Sine.easeOut, duration: 20, scale: 1});

				var t8 = gsap.timeline({repeat: 0});
					t8.fromTo(card, {skewX: "30deg", scaleY: 0.5, rotate:"-10deg"}, {delay:0.75, ease: Sine.easeOut, duration: 0.5, opacity:1, skewX: "0deg", scaleY: 1, rotate:"0deg"});
			
				break;

			case "body_bottom":
				// bottom panel code here

				var t1 = gsap.timeline({repeat: 0});
					t1.fromTo(logo, { opacity:0 }, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t2 = gsap.timeline({repeat: -1});
					t2.fromTo(h1, {x:"-4%"}, {delay:1, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h2__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h2__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h3__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h3__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.fromTo(h4__1, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t2.to(h4__1, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t2.to(h4__1, {delay:0.25, ease: Sine.easeOut, duration: 0, opacity:0, x:"4%"});

				var t3 = gsap.timeline({repeat: -1});

					t3.fromTo(h2__2, {x:"-4%"}, {delay:4.75, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h2__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h3__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h3__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h4__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h4__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});

				var t4 = gsap.timeline({repeat: 0});
					t4.fromTo(button, {x:"-4%"}, {delay: 0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});

				// var t6 = gsap.timeline({repeat: -1});
				// 	t6.to(flare, {delay:2, ease: Sine.easeOut, duration: 0, opacity:1, marginLeft:"0%"});
				// 	t6.to(flare, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, marginLeft:"200%"});
				// 	t6.to(flare, {delay:4.2, ease: Sine.easeOut, duration: 0, opacity:0});

				// var t7 = gsap.timeline({repeat: 0});
				// 	t7.fromTo(card__root, {scale: 0.8}, {delay:2, ease: Sine.easeOut, duration: 20, scale: 1});

				// var t8 = gsap.timeline({repeat: 0});
				// 	t8.fromTo(card, {skewX: "30deg", scaleY: 0.5, rotate:"-10deg"}, {delay:0.75, ease: Sine.easeOut, duration: 0.5, opacity:1, skewX: "0deg", scaleY: 1, rotate:"0deg"});
			
				break;
		}

		/* END OF CUSTOM JS */
	}
};