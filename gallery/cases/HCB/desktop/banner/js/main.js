"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
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
		var ball = document.querySelector(".ball")
		var ball_2 = document.querySelector(".ball_2")
		var ball_3 = document.querySelector(".ball_3")
		var ball_4 = document.querySelector(".ball_4")
		var ball_5 = document.querySelector(".ball_5")
		var ball_6 = document.querySelector(".ball_6")
		var ball__root = document.querySelector(".ball__root")
		var video = document.querySelector(".video")

		var is_check = true;
		var is_one_animation = true;
		var is_two_animation = false;

		switch (document.body.id) {
			case "body_top":
				// top panel code here

				// /*********************************************************************
				//  * Premium.addon.topExpandable(expandedHeight);
				//  * @desc Sets top panel to expand on hover
				//  * @param {integer} [expandedHeight=560] - height of expanded panel
				//  *********************************************************************/
				// try {
				// 	jpxApi.expandTop(560);
				// } catch (e) {
				// 	Premium.addon.topExpandable(560);
				// }

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

			case "body_left":
				// left panel code here

				localStorage.removeItem("isSkinScroll")

				var t1 = gsap.timeline({repeat: 0});
					t1.pause()
					t1.fromTo(logo, { opacity:0 }, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t2 = gsap.timeline({repeat: -1});
					if(is_check){
						t2.pause()
					}
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
					if(is_check){
						t3.pause()
					}
					t3.fromTo(h2__2, {x:"-4%"}, {delay:4.75, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h2__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h3__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h3__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});
					t3.fromTo(h4__2, {x:"-4%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});
					t3.to(h4__2, {delay:2, ease: Sine.easeOut, duration: 0.75, opacity:0, x:"4%"});

				var t4 = gsap.timeline({repeat: 0});
					t4.pause()
					t4.fromTo(button, {x:"-4%"}, {delay: 0, ease: Sine.easeOut, duration: 0.75, opacity:1, x:"0%"});

				var t5 = gsap.timeline({repeat: 0});
					t5.pause()
					t5.fromTo(background, {opacity:0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1});


				var t15 = gsap.timeline({repeat: 0});
					// t15.pause()
					t15.fromTo(ball__root, {opacity:0}, {delay:0, ease: Sine.easeOut, duration: 0.4, opacity:1});
					
					
				var t8 = gsap.timeline({repeat: -1});
					t8.fromTo(ball, {y:"-500%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 10, opacity:1, y:"-50%", rotate:"25deg"});
					t8.to(ball, {delay:0, ease: Sine.easeOut, duration: 10, opacity:1, y:"-500%", rotate:"0deg"});
				var t9 = gsap.timeline({repeat: -1});
					t9.fromTo(ball_2, {y:"-240%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 7, opacity:1, y:"-30%", rotate:"-40deg"});
					t9.to(ball_2, {delay:0, ease: Sine.easeOut, duration: 7, opacity:1, y:"-240%", rotate:"0deg"});
				var t10 = gsap.timeline({repeat: -1});
					t10.fromTo(ball_3, {y:"40%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 4, opacity:1, y:"-50%", rotate:"40deg"});
					t10.to(ball_3, {delay:0, ease: Sine.easeOut, duration: 4, opacity:1, y:"40%", rotate:"0deg"});
				var t11 = gsap.timeline({repeat: -1});
					t11.fromTo(ball_4, {y:"-350%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 5, opacity:1, y:"0%", rotate:"-25deg"});
					t11.to(ball_4, {delay:0, ease: Sine.easeOut, duration: 5, opacity:1, y:"-350%", rotate:"0deg"});
				var t12 = gsap.timeline({repeat: -1});
					t12.fromTo(ball_5, {y:"-75%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-750%", rotate:"-100deg"});
					t12.to(ball_5, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-75%", rotate:"0deg"});
				var t13 = gsap.timeline({repeat: -1});
					t13.fromTo(ball_6, {y:"-5%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-350%", rotate:"30deg"});
					t13.to(ball_6, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-5%", rotate:"0deg"});
				
					var animationShow = function(){
						t1.play(0);
						t2.play(0);
						t3.play(0);
						t4.play(0);
						t5.play(0);

						t8.pause();
						t9.pause();
						t10.pause();
						t11.pause();
						t12.pause();
						t13.pause();

						t15.reverse(0)

						is_check = false;
					}
	
					var animationHide = function(){
						t1.reverse(0);
						t2.reverse(0);
						t3.reverse(0);
						t4.reverse(0);
						t5.reverse(0);

						t8.play();
						t9.play();
						t10.play();
						t11.play();
						t12.play();
						t13.play();
	
						t15.play()

						is_check = true;
					}					
	
					function scrollHandler(){
						var scrollpos = window.top.scrollY;
						var header_height = 250;
						if (scrollpos >= header_height){
							if(is_check == true && is_one_animation == true){
								localStorage.setItem("isSkinScroll", "true")
								animationShow()
								is_one_animation = false
								is_two_animation = true
							}
						}else{
							if(is_check == false && is_two_animation == true){
								localStorage.setItem("isSkinScroll", "false")
								is_one_animation = true
								is_two_animation = false
								animationHide()
							}
						}
					}
	
					try{
						window.top.addEventListener("scroll", scrollHandler)
					}catch(e){
						console.log("error")
					}

				break;

			case "body_right":
				// right panel code here

				var t1 = gsap.timeline({repeat: 0});
					t1.pause()
					t1.to(logo, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t2 = gsap.timeline({repeat: 0});
					t2.pause()
					t2.to(card, {delay:0.5, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t3 = gsap.timeline({repeat: 0});
					t3.pause()
					t3.fromTo(button, {marginLeft:"-4%"}, {delay: 0, ease: Sine.easeOut, duration: 0.75, opacity:1, marginLeft:"0%"});

				var t4 = gsap.timeline({repeat: -1});
					t4.pause()
					t4.to(flare, {delay:2, ease: Sine.easeOut, duration: 0, opacity:1, marginLeft:"0%"});
					t4.to(flare, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, marginLeft:"200%"});
					t4.to(flare, {delay:8.2, ease: Sine.easeOut, duration: 0, opacity:0});

				var t5 = gsap.timeline({repeat: 0});
					t5.pause()
					t5.fromTo(background, {opacity:0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1});

				var t15 = gsap.timeline({repeat: 0});
					// t15.pause()
					t15.fromTo(ball__root, {opacity:0}, {delay:0, ease: Sine.easeOut, duration: 0.4, opacity:1});
										
				var t8 = gsap.timeline({repeat: -1});
					t8.fromTo(ball, {y:"-1200%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 10, opacity:1, y:"-800%", rotate:"-35deg"});
					t8.to(ball, {delay:0, ease: Sine.easeOut, duration: 10, opacity:1, y:"-1200%", rotate:"0deg"});
				var t9 = gsap.timeline({repeat: -1});
					t9.fromTo(ball_2, {y:"-940%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 7, opacity:1, y:"-600%", rotate:"40deg"});
					t9.to(ball_2, {delay:0, ease: Sine.easeOut, duration: 7, opacity:1, y:"-940%", rotate:"0deg"});
				var t10 = gsap.timeline({repeat: -1});
					t10.fromTo(ball_3, {y:"-400%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 4, opacity:1, y:"-750%", rotate:"-60deg"});
					t10.to(ball_3, {delay:0, ease: Sine.easeOut, duration: 4, opacity:1, y:"-400%", rotate:"0deg"});
				var t11 = gsap.timeline({repeat: -1});
					t11.fromTo(ball_4, {y:"-1050%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 5, opacity:1, y:"-550%", rotate:"-45deg"});
					t11.to(ball_4, {delay:0, ease: Sine.easeOut, duration: 5, opacity:1, y:"-1050%", rotate:"0deg"});
				var t12 = gsap.timeline({repeat: -1});
					t12.fromTo(ball_5, {y:"-1000%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-700%", rotate:"140deg"});
					t12.to(ball_5, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-1000%", rotate:"0deg"});
				var t13 = gsap.timeline({repeat: -1});
					t13.fromTo(ball_6, {y:"-550%", rotate:"0deg"}, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-1100%", rotate:"-50deg"});
					t13.to(ball_6, {delay:0, ease: Sine.easeOut, duration: 13, opacity:1, y:"-550%", rotate:"0deg"});
				
					var animationShow = function(){
						t1.play(0);
						t2.play(0);
						t3.play(0);
						t4.play(0);
						t5.play(0);

						t15.reverse(0);

						t8.pause();
						t9.pause();
						t10.pause();
						t11.pause();
						t12.pause();
						t13.pause();
	
						is_check = false;
					}
	
					var animationHide = function(){
						t1.reverse(0);
						t2.reverse(0);
						t3.reverse(0);
						t4.reverse(0);
						t5.reverse(0);

						t15.play(0);

						t8.play();
						t9.play();
						t10.play();
						t11.play();
						t12.play();
						t13.play();
	
						is_check = true;
					}	
	
					setInterval(function() {
						if(localStorage.getItem("isSkinScroll") == "true" && is_check == true){
							animationShow()
						}else if(localStorage.getItem("isSkinScroll") == "false" && is_check == false){
							animationHide()
						}
					}, 50);

				break;

			case "body_back":
				// back panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
}