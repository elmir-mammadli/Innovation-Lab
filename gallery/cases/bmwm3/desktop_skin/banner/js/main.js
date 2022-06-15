"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */
		var video = document.querySelector("video");
		var img_ovl_left_1 = document.querySelector("#img_ovl_left_1");
		var img_ovl_left_2 = document.querySelector("#img_ovl_left_2");
		var img_ovl_left_3 = document.querySelector("#img_ovl_left_3");
		var img_ovl_left_4 = document.querySelector("#img_ovl_left_4");
		var img_ovl_left_5 = document.querySelector("#img_ovl_left_5");
		var img_ovl_rite_1 = document.querySelector("#img_ovl_rite_1");
		var img_ovl_rite_2 = document.querySelector("#img_ovl_rite_2");
		var img_ovl_rite_3 = document.querySelector("#img_ovl_rite_3");
		var img_ovl_rite_4 = document.querySelector("#img_ovl_rite_4");
		var img_ovl_rite_5 = document.querySelector("#img_ovl_rite_5");
		var bk_1 = document.querySelector("#bk_1");
		var bk_2 = document.querySelector("#bk_2");
		var is_check = true;
		var is_one_animation = true;
		var is_two_animation = false;
		var is_scroll_0 = true;
		var is_scroll_1 = true;
		var is_scroll_2 = true;
		var is_scroll_3 = true;
		var is_scroll_4 = true;
		var is_scroll_5 = true;
		var is_scroll_6 = true;

		switch (document.body.id) {
			case "body_top":
				// top panel code here
				Premium.video.pauseWhenOutOfView(true, .5, video);
				break;

			case "body_left":
				// left panel code here

				localStorage.removeItem("skinScrollCard")

				console.log(bk_1)

				var arr = [
					img_ovl_left_1, img_ovl_left_2, img_ovl_left_3, img_ovl_left_4, img_ovl_left_5
				]

				var clear = function(){
					for(var i = 0; arr.length > i; i++){
						arr[i].style.opacity = 0
					}
				}
				clear()

				var animation = function(elem){
					clear()
					gsap.timeline({repeat: 0}).fromTo(elem, {opacity:0, translateX: "50%"}, {delay:0, ease: Sine.easeOut, duration: 0.25, opacity:1, scale: 1, translateX: "0%", onComplete: function(){
						for(var i = 0; arr.length > i; i++){
							if(elem == arr[i]){
								elem.style.opacity = 1
							}else{
								arr[i].style.opacity = 0
							}
						}
					}})
				}

				var animationBackground = function(elem){
					gsap.timeline({repeat: 0}).fromTo(elem, {opacity:0.4}, {delay:0, ease: Sine.easeOut, duration: 0.25, opacity:0})
				}

				function scrollHandler(e){
					var scrollHeight = Math.max(
						window.top.document.body.scrollHeight, window.top.document.documentElement.scrollHeight,
						window.top.document.body.offsetHeight, window.top.document.documentElement.offsetHeight,
						window.top.document.body.clientHeight, window.top.document.documentElement.clientHeight
					  );

					var scrollpos = window.top.scrollY;
					var header_height = 250;

					// if (scrollpos >= header_height){
					// 	localStorage.setItem("isSkinScroll", "true")
					// }else{
					// 	localStorage.setItem("isSkinScroll", "false")
					// }

					var w = (window.top.innerHeight)
					var w2 = (scrollHeight - window.top.innerHeight)
					var scroll = ( w2 - 250 ) / 6
					var scroll_1 = 250 + Math.round(scroll)
					var scroll_2 = 250 + Math.round(scroll * 2)
					var scroll_3 = 250 + Math.round(scroll * 3)
					var scroll_4 = 250 + Math.round(scroll * 4)
					var scroll_5 = 250 + Math.round(scroll * 5)
					var scroll_6 = 250 + Math.round(scroll * 6)

					if(scrollpos < header_height && is_scroll_0){
						localStorage.setItem("skinScrollCard", "0")
						clear()
						animationBackground(bk_1)

						var timer = setInterval(function(){

							if(is_scroll_0){
								clearInterval(timer)
							}else{
								clear()
								localStorage.setItem("skinScrollCard", "0")
								bk_1.style.opacity = 0
							}

						}, 300)

						is_scroll_0 = false;
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;

					}else if(scrollpos >= header_height && scrollpos < scroll_1 && is_scroll_1){
						// console.log(w, w2, scrollpos)
						localStorage.setItem("skinScrollCard", "1")
						bk_1.style.opacity = 0.4
						// console.log('1')
						is_scroll_0 = true;
						is_scroll_1 = false;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
						animation(img_ovl_left_1)
					}
					else if(scrollpos >= scroll_1 && scrollpos < scroll_2 && is_scroll_2){
						localStorage.setItem("skinScrollCard", "2")
						animation(img_ovl_left_2)
						bk_1.style.opacity = 0.4
						// console.log('2')
						is_scroll_0 = true;
						is_scroll_1 = true;
						is_scroll_2 = false;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(scrollpos >= scroll_2 && scrollpos < scroll_3 && is_scroll_3){
						localStorage.setItem("skinScrollCard", "3")
						// console.log('3')
						animation(img_ovl_left_3)
						bk_1.style.opacity = 0.4
						is_scroll_0 = true;
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = false;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(scrollpos >= scroll_3 && scrollpos < scroll_4 && is_scroll_4){
						localStorage.setItem("skinScrollCard", "4")
						// console.log('4')
						animation(img_ovl_left_4)
						bk_1.style.opacity = 0.4
						is_scroll_0 = true;
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = false;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(scrollpos >= scroll_4 && scrollpos < scroll_5 && is_scroll_5){
						localStorage.setItem("skinScrollCard", "5")
						// console.log('5')
						animation(img_ovl_left_5)
						bk_1.style.opacity = 0.4
						is_scroll_0 = true;
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = false;
						is_scroll_6 = true;
					}
					else if(scrollpos >= scroll_5 && is_scroll_6){
						localStorage.setItem("skinScrollCard", "0")
						clear()
						animationBackground(bk_1)
						var timer = setInterval(function(){

							if(is_scroll_6){
								clearInterval(timer)
							}else{
								clear()
								localStorage.setItem("skinScrollCard", "0")
								bk_1.style.opacity = 0
							}

						}, 300)
						// console.log('6')
						is_scroll_0 = true;
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = false;
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

				var arr = [
					img_ovl_rite_1, img_ovl_rite_2, img_ovl_rite_3, img_ovl_rite_4, img_ovl_rite_5
				]

				var clear = function(){
					for(var i = 0; arr.length > i; i++){
						arr[i].style.opacity = 0
					}
				}
				clear()
				
				var animation = function(elem){

					clear()

					gsap.timeline({repeat: 0}).fromTo(elem, {opacity:0, translateX: "-50%"}, {delay:0, ease: Sine.easeOut, duration: 0.25, opacity:1, scale: 1, translateX: "0%", onComplete: function(){
						for(var i = 0; arr.length > i; i++){
							if(elem == arr[i]){
								elem.style.opacity = 1
							}else{
								arr[i].style.opacity = 0
							}
						}
					}})
				}
				var animationBackground = function(elem){
					gsap.timeline({repeat: 0}).fromTo(elem, {opacity:0.4}, {delay:0, ease: Sine.easeOut, duration: 0.25, opacity:0})
				}

				setInterval(function(){
					if(localStorage.getItem("skinScrollCard") == "1" && is_scroll_1){
						animation(img_ovl_rite_1)
						bk_2.style.opacity = 0.4
						// console.log(w, w2, scrollpos)
						// console.log('1')
						
						is_scroll_1 = false;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(localStorage.getItem("skinScrollCard") == "2" && is_scroll_2){
						animation(img_ovl_rite_2)
						bk_2.style.opacity = 0.4
						// console.log('2')
						is_scroll_1 = true;
						is_scroll_2 = false;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(localStorage.getItem("skinScrollCard") == "3" && is_scroll_3){
						animation(img_ovl_rite_3)
						bk_2.style.opacity = 0.4
						// console.log('3')
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = false;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(localStorage.getItem("skinScrollCard") == "4" && is_scroll_4){
						animation(img_ovl_rite_4)
						bk_2.style.opacity = 0.4
						// console.log('4')
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = false;
						is_scroll_5 = true;
						is_scroll_6 = true;
					}
					else if(localStorage.getItem("skinScrollCard") == "5" && is_scroll_5){
						animation(img_ovl_rite_5)
						bk_2.style.opacity = 0.4
						// console.log('5')
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = false;
						is_scroll_6 = true;
					}else if(localStorage.getItem("skinScrollCard") == "0" && is_scroll_6){

						clear()
						animationBackground(bk_2)

						var timer = setInterval(function(){

							if(is_scroll_6){
								clearInterval(timer)
							}else{
								clear()
								localStorage.setItem("skinScrollCard", "0")
								bk_2.style.opacity = 0
							}

						}, 300)

						// console.log('6')
						is_scroll_1 = true;
						is_scroll_2 = true;
						is_scroll_3 = true;
						is_scroll_4 = true;
						is_scroll_5 = true;
						is_scroll_6 = false;
					}
				}, 50)
			
				break;

			case "body_back":
				// back panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
}