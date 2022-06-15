"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		var is_check = true;
		var is_one_animation = true;
		var is_two_animation = false;
		
		var video = document.querySelector("video");

		var title = document.querySelector("#img_t");
		var t_1 = document.querySelector("#con_t_0");
		var t_2 = document.querySelector("#con_t_1_1");
		var CTA = document.querySelector("#CTA");

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				Premium.video.pauseWhenOutOfView(true, .5, video);



				//код отвечает за включение и отключение звука при расхлопе видео

				function check(e) {

					if (!window.screenTop && !window.screenY) {
						console.log('not fullscreen', video.volume);
					} else {
						console.log('fullscreen', video.volume);
					}

					video.muted == true ? video.muted = false : video.muted = true

				}
				
				["", "webkit", "moz", "ms"].forEach(
					prefix => document.addEventListener(prefix+"fullscreenchange", check, false)
				);

				//


				
				break;

			case "body_left":
				// left panel code here

				localStorage.removeItem("isSkinScroll")

				title.style.opacity = 0
				t_1.style.opacity = 0
				t_2.style.opacity = 0
				CTA.style.opacity = 0

				var t1 = gsap.timeline({repeat: 0})
					t1.pause()
					t1.fromTo(title, {opacity: 0, translateX: "-100%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, translateX: "0%"})

				var t2 = gsap.timeline({repeat: 0})
					t2.pause()
					t2.fromTo(t_1, {opacity: 0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1})

				var t3 = gsap.timeline({repeat: 0})
					t3.pause()
					t3.fromTo(t_2, {opacity: 0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1})

				var t4 = gsap.timeline({repeat: 0})
					t4.pause()
					t4.fromTo(CTA, {opacity: 0, translateY: "5%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, translateY: "0%"})


				var animationShow = function(){

					t1.play(0);
					t2.play(0);
					t3.play(0);
					t4.play(0);

					is_check = false;

				}

				var animationHide = function(){

					t1.reverse(0);
					t2.reverse(0);
					t3.reverse(0);
					t4.reverse(0);

					is_check = true;

				}

				function scrollHandler(){
					var scrollpos = window.top.scrollY;
					var header_height = 250;
					if (scrollpos >= header_height){
						if(is_check == true && is_one_animation == true){
							localStorage.setItem("isSkinScroll", "true")
							is_one_animation = false;
							is_two_animation = true;
							animationShow()
						}
					}else{
						if(is_check == false && is_two_animation == true){
							localStorage.setItem("isSkinScroll", "false")
							is_one_animation = true;
							is_two_animation = false;
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
				
				title.style.opacity = 0
				t_1.style.opacity = 0
				t_2.style.opacity = 0
				CTA.style.opacity = 0
				

				var t1 = gsap.timeline({repeat: 0})
					t1.pause()
					t1.fromTo(title, {opacity: 0, translateX: "-100%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, translateX: "0%"})

				var t2 = gsap.timeline({repeat: 0})
					t2.pause()
					t2.fromTo(t_1, {opacity: 0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1})

				var t3 = gsap.timeline({repeat: 0})
					t3.pause()
					t3.fromTo(t_2, {opacity: 0}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1})

				var t4 = gsap.timeline({repeat: 0})
					t4.pause()
					t4.fromTo(CTA, {opacity: 0, translateY: "5%"}, {delay:0, ease: Sine.easeOut, duration: 0.75, opacity:1, translateY: "0%"})


				var animationShow = function(){

					t1.play(0);
					t2.play(0);
					t3.play(0);
					t4.play(0);

					is_check = false;

				}

				var animationHide = function(){

					t1.reverse(0);
					t2.reverse(0);
					t3.reverse(0);
					t4.reverse(0);

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