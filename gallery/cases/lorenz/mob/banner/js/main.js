"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
        Premium.product.initOrientationMessage("Please rotate your device.", "#4E4E4E");
		/* START OF CUSTOM JS */

		var header = document.querySelector(".header");
		var background_horizontal = document.querySelector(".background_horizontal");
		var background_vertical = document.querySelector(".background_vertical");
		var background_vertical_01 = document.querySelector(".background_vertical_01");
		var background_vertical_02 = document.querySelector(".background_vertical_02");
		var background_vertical_2 = document.querySelector(".background_vertical_2");
		var background_vertical_hide = document.querySelector(".background_vertical_hide");
		var background_vertical_hide_01 = document.querySelector(".background_vertical_hide_01");
		var background_vertical_hide_02 = document.querySelector(".background_vertical_hide_02");
		var background_vertical_hide_2 = document.querySelector(".background_vertical_hide_2");
		var logo = document.querySelector(".logo");
		var logo_natural = document.querySelector(".logo_natural");
		var logo_natural_1 = document.querySelector(".logo_natural_1");
		var logo_natural_2 = document.querySelector(".logo_natural_2");
		var pack = document.querySelector(".pack");
		var sheet = document.querySelector(".sheet");
		var sheet2 = document.querySelector(".sheet2");
		var crisps = document.querySelector(".crisps");
		var crisps2 = document.querySelector(".crisps2");
		var skillet = document.querySelector(".skillet");
		var h1 = document.querySelector(".h1");
		var h1__1 = document.querySelector(".h1__1");
		var h1__2 = document.querySelector(".h1__2");
		var pack_crips__root = document.querySelector(".pack_crips__root");
		var pack_crips_1 = document.querySelector(".pack_crips_1");
		var pack_crips_2 = document.querySelector(".pack_crips_2");
		var pack_crips_3 = document.querySelector(".pack_crips_3");
		var icon__signature = document.querySelector(".icon__signature");
		var icon__signature_2 = document.querySelector(".icon__signature_2");
		var icon__signature_3 = document.querySelector(".icon__signature_3");
		var vertical_height = document.querySelector(".vertical_height");
		var icon = document.querySelector(".icon__img");
		var icon__img_1 = document.querySelector(".icon__img_1");
		var icon__img_2 = document.querySelector(".icon__img_2");
		var icon__img_3 = document.querySelector(".icon__img_3");
		var icon__text = document.querySelector(".icon__text");
		var icon__text_2 = document.querySelector(".icon__text_2");
		var icon_01 = document.querySelector(".icon_01");
		var icon_02 = document.querySelector(".icon_02");

		var is_check = true;
		var is_one_animation = true;
		var is_two_animation = false;
		var is_three_animation = false;
		var is_four_animation = false;

		switch (document.body.id) {
			case "body_top":
				// top panel code here

				var t1 = gsap.timeline({repeat: 0});
					t1.to(logo, {delay:1, ease: Sine.easeOut, duration: 2, opacity:1});

				var t2 = gsap.timeline({repeat: 0});
					t2.fromTo(logo_natural, {y: "-15%"}, {delay:1.25, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t3 = gsap.timeline({repeat: 0});
					t3.fromTo(h1, {y: "-25%"}, {delay:1.5, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t4 = gsap.timeline({repeat: 0});
					t4.fromTo(pack_crips__root, { scaleX: 0.8, scaleY: 0.8, y: "35%"}, {delay:1.75, ease: Sine.easeOut, duration: 5, y: "0%",  scaleX: 1.1, scaleY: 1.1});

				var t5_1 = gsap.timeline({repeat: -1});
					t5_1.pause();
					t5_1.fromTo(pack_crips_1, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "-2%", y: "1%", scaleX: .95, scaleY: .95, rotate: "-2deg", duration: 6});
					t5_1.fromTo(pack_crips_1, {x: "-2%", y: "1%", scaleX: .95, scaleY: .95, rotate: "-2deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
	
				var t5_2 = gsap.timeline({repeat: -1});
					t5_2.pause();
					t5_2.fromTo(pack_crips_2, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "1%", y: "-1%", scaleX: .95, scaleY: .95, rotate: "1deg", duration: 6});
					t5_2.fromTo(pack_crips_2, {x: "1%", y: "-1%", scaleX: .95, scaleY: .95, rotate: "1deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
				
				var t5_3 = gsap.timeline({repeat: -1});
					t5_3.pause();
					t5_3.fromTo(pack_crips_3, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "1%", y: "-3%", scaleX: .95, scaleY: .95, rotate: "4deg", duration: 6});
					t5_3.fromTo(pack_crips_3, {x: "1%", y: "-3%", scaleX: .95, scaleY: .95, rotate: "4deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
				
				var t5 = gsap.timeline({repeat: 0});
					t5.fromTo(pack_crips_1, {x: "4%", y: "-10%", rotate: "0deg"}, {delay:1.75, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_1.play();
					}});
				var t6 = gsap.timeline({repeat: 0});
					t6.fromTo(pack_crips_2, {x: "0%", y: "0%", rotate: "0deg"},{delay:2, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_2.play();
					}});
				var t7 = gsap.timeline({repeat: 0});
					t7.fromTo(pack_crips_3, {x: "-4%", y: "5%", rotate: "0deg"},{delay:2.25, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_3.play();
					}});

				var t8 = gsap.timeline({repeat: 0});
					t8.to(icon__signature_3, {delay:4, ease: Sine.easeOut, duration: 2, opacity:0.6});

				var t9 = gsap.timeline({repeat: -1});
					t9.fromTo(icon_01, {left:"-10%"}, {delay:0, ease: Sine.easeOut, duration: 1.5, left:"0%"});
					t9.fromTo(icon_01, {left:"0%"}, {delay:5, ease: Sine.easeOut, duration: 1.5, left:"-10%"});
					t9.fromTo(icon_01, {left:"0%"}, {delay:8, ease: Sine.easeOut, duration: 0, left:"-10%"});
				var t10 = gsap.timeline({repeat: -1});
					t10.to(icon__img_1, {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1});
					t10.to(icon__img_1, {delay:5, ease: Sine.easeOut, duration: 1.5, opacity:0});
					t10.to(icon__img_1, {delay:8, ease: Sine.easeOut, duration: 0, opacity:0});
				var t11 = gsap.timeline({repeat: -1});
					t11.fromTo(icon__text, {left:"-15%"},  {delay:0, ease: Sine.easeOut, duration: 1.5, opacity:1, left:"0%"});
					t11.fromTo(icon__text, {left:"0%"}, {delay:5, ease: Sine.easeOut, duration: 1.5, opacity:0, left:"-15%"});
					t11.fromTo(icon__text, {left:"0%"}, {delay:8, ease: Sine.easeOut, duration: 0, opacity:0, left:"-15%"});

				var t12 = gsap.timeline({repeat: -1});
					t12.fromTo(icon_02, {left:"-10%"}, {delay:8, ease: Sine.easeOut, duration: 1.5, left:"0%"});
					t12.fromTo(icon_02, {left:"0%"}, {delay:5, ease: Sine.easeOut, duration: 1.5, left:"-10%"});
				var t13 = gsap.timeline({repeat: -1});
					t13.to(icon__img_2, {delay:8, ease: Sine.easeOut, duration: 1.5, opacity:1});
					t13.to(icon__img_2, {delay:5, ease: Sine.easeOut, duration: 1.5, opacity:0});
				var t14 = gsap.timeline({repeat: -1});	
					t14.fromTo(icon__img_3,{left:"-5%"}, {delay:8, ease: Sine.easeOut, duration: 1.5, opacity:1, left:"0%"});
					t14.fromTo(icon__img_3,{left:"0%"}, {delay:5, ease: Sine.easeOut, duration: 1.5, opacity:0, left:"-5%"});
				var t15 = gsap.timeline({repeat: -1});
					t15.fromTo(icon__text_2, {left:"-20%"},  {delay:8, ease: Sine.easeOut, duration: 1.5, opacity:1, left:"0%"});
					t15.fromTo(icon__text_2, {left:"0%"}, {delay:5, ease: Sine.easeOut, duration: 1.5, opacity:0, left:"-20%"});

				break;

			case "body_main":
				// main panel code here

				var t_skillet = gsap.timeline({repeat: 0});
					t_skillet.to(skillet, {delay:0, ease: Sine.easeOut, y: "0%", duration: 0, opacity:1, scaleX: 1.75, scaleY: 1.75, rotate: "-19deg"});

				var t1 = gsap.timeline({repeat: 0});
					t1.fromTo(logo_natural_1, {y: "-15%"}, {delay:0.75, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t2 = gsap.timeline({repeat: 0});
					t2.pause();
					t2.fromTo(h1__1, {y: "-25%"}, {delay:1, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t3 = gsap.timeline({repeat: 0});
					t3.pause();
					t3.fromTo(icon__img_1, {x: "-10%"}, {delay:1, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t4 = gsap.timeline({repeat: 0});
					t4.pause();
					t4.fromTo(icon__text, {x: "-10%"}, {delay:1.25, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t5 = gsap.timeline({repeat: 0});
					t5.pause();
					t5.fromTo(icon__signature, {x: "10%"}, {delay:1.5, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t6 = gsap.timeline({repeat: 0});
					t6.pause();
					t6.fromTo(skillet, { opacity:0, scaleX: 1.75, scaleY: 1.75, rotate: "-19deg"}, {delay:0, ease: Sine.easeOut, duration: 3, opacity:1, scaleX: 1, scaleY: 1, rotate: "0deg"});
				var t7 = gsap.timeline({repeat: 0});
					t7.pause();
					t7.fromTo(sheet, {x: "-115%", y: "650%", scaleX: 5, scaleY: 5, rotate: "19deg"}, {delay:0, ease: Sine.easeOut, duration: 4, opacity:1, scaleX: 1, scaleY: 1, x: "0%", y: "0%", rotate: "0deg", onComplete: function(){
						setTimeout(function(){
							is_two_animation = true;
						}, 4000)
					}});

				var t9 = gsap.timeline({repeat: 0})
					t9.pause();
					t9.fromTo(background_vertical_01, {opacity:0}, {delay:1, ease: Sine.easeOut, duration: 1, opacity:1});
			
					
				var t_pack = gsap.timeline({repeat: 0});
					t_pack.to(pack, {delay:0, ease: Sine.easeOut, y: "0%", duration: 0, opacity:0, scaleX: 1.75, scaleY: 1.75, rotate: "-19deg"});

				var t02 = gsap.timeline({repeat: 0});
					t02.pause();
					t02.fromTo(h1__2, {y: "-25%"}, {delay:1, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t03 = gsap.timeline({repeat: 0});
					t03.pause();
					t03.fromTo(icon__img_1, {x: "-10%"}, {delay:1, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t04 = gsap.timeline({repeat: 0});
					t04.pause();
					t04.fromTo(icon__img_2, {x: "-10%"}, {delay:1.25, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t05 = gsap.timeline({repeat: 0});
					t05.pause();
					t05.fromTo(icon__text_2, {x: "-10%"}, {delay:1.5, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t06 = gsap.timeline({repeat: 0});
					t06.pause();
					t06.fromTo(icon__signature_2, {x: "10%"}, {delay:1.75, ease: Sine.easeOut, x: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				
				var t07 = gsap.timeline({repeat: 0});
					t07.pause();
					t07.fromTo(pack, {scaleX: 1.75, scaleY: 1.75, rotate: "19deg"}, {delay:0, ease: Sine.easeOut, duration: 3, opacity:1, scaleX: 1, scaleY: 1, rotate: "0deg"});
				
				var t08 = gsap.timeline({repeat: 0});
					t08.pause();
					t08.fromTo(sheet2, {x: "625%", y: "-800%", scaleX: 4, scaleY: 4, rotate: "-200deg"}, {delay:0, ease: Sine.easeOut, duration: 4.5, opacity:1, scaleX: 1, scaleY: 1, x: "0%", y: "0%", rotate: "0deg", onComplete: function(){
						setTimeout(function(){
							is_four_animation = true;
						}, 4000)
					}});

				var t010 = gsap.timeline({repeat: 0});
					t010.pause();
					t010.fromTo(crisps, {x: "-625%", y: "800%", scaleX: 4, scaleY: 4, rotate: "-250deg"}, {delay:0, ease: Sine.easeOut, duration: 2.5, opacity:1, scaleX: 1, scaleY: 1, x: "0%", y: "0%", rotate: "0deg"});
		
				var t011 = gsap.timeline({repeat: 0});
					t011.pause();
					t011.fromTo(crisps2, {x: "625%", y: "-800%", scaleX: 5.5, scaleY: 5.5, rotate: "200deg"}, {delay:0, ease: Sine.easeOut, duration: 3.5, opacity:1, scaleX: 1, scaleY: 1, x: "0%", y: "0%", rotate: "0deg"});
				var t012 = gsap.timeline({repeat: 0})
					t012.pause();
					t012.fromTo(background_vertical_02, {opacity:0}, {delay:1, ease: Sine.easeOut, duration: 1, opacity:1});

				var animationShow = function(){
					t2.play(0);
					t3.play(0);
					t4.play(0);
					t5.play(0);
					t6.play(0);
					t7.play(0);
					t9.play(0);
					is_check = false;
				}

				var animationShow_2 = function(){
					t2.reverse(0);
					t3.reverse(0);
					t4.reverse(0);
					t5.reverse(0);
					t6.reverse(0);
					t7.reverse(0);
					t9.reverse(0);
					is_check = true;
					setTimeout(function(){
						is_three_animation = true;
					}, 1500)
				}
				
				var animationShow_3 = function(){
					t02.play(0);
					t03.play(0);
					t04.play(0);
					t05.play(0);
					t06.play(0);
					t07.play(0);
					t08.play(0);
					t010.play(0);
					t011.play(0);
					t012.play(0);
					is_check = false;
				}

				var animationShow_4 = function(){
					t02.reverse(0);
					t03.reverse(0);
					t04.reverse(0);
					t05.reverse(0);
					t06.reverse(0);
					t07.reverse(0);
					t08.reverse(0);
					t010.reverse(0);
					t011.reverse(0);
					t012.reverse(0);
					is_check = true;
					setTimeout(function(){
						is_one_animation = true;
					}, 1500)
				}

				setInterval(function() {

					if(
						is_one_animation == true
						&& is_two_animation == false
						&& is_three_animation == false
						&& is_four_animation == false
						&& is_check == true
					){
						is_one_animation = false
						animationShow()
					}else if(
						is_one_animation == false
						&& is_two_animation == true
						&& is_three_animation == false
						&& is_four_animation == false
						&& is_check == false
					){
						is_two_animation = false
						animationShow_2()
					}else if(
						is_one_animation == false
						&& is_two_animation == false
						&& is_three_animation == true
						&& is_four_animation == false
						&& is_check == true
					){
						is_three_animation = false
						animationShow_3()
					}else if(
						is_one_animation == false
						&& is_two_animation == false
						&& is_three_animation == false
						&& is_four_animation == true
						&& is_check == false
					){
						is_four_animation = false
						animationShow_4()
					}

				}, 150);

				break;

			case "body_bottom":

				var t1 = gsap.timeline({repeat: 0});
					t1.to(logo, {delay:1, ease: Sine.easeOut, duration: 2, opacity:1});

				var t2 = gsap.timeline({repeat: 0});
					t2.fromTo(logo_natural, {y: "-15%"}, {delay:1.25, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t3 = gsap.timeline({repeat: 0});
					t3.fromTo(h1, {y: "-25%"}, {delay:1.5, ease: Sine.easeOut, y: "0%", duration: 1.25, opacity:1, scaleX: 1, scaleY: 1});
				var t4 = gsap.timeline({repeat: 0});
					t4.fromTo(pack_crips__root, { scaleX: 0.8, scaleY: 0.8, y: "35%"}, {delay:1.75, ease: Sine.easeOut, duration: 5, y: "0%",  scaleX: 1, scaleY: 1});

				var t5_1 = gsap.timeline({repeat: -1});
					t5_1.pause();
					t5_1.fromTo(pack_crips_1, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "-2%", y: "1%", scaleX: .95, scaleY: .95, rotate: "-2deg", duration: 6});
					t5_1.fromTo(pack_crips_1, {x: "-2%", y: "1%", scaleX: .95, scaleY: .95, rotate: "-2deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
	
				var t5_2 = gsap.timeline({repeat: -1});
					t5_2.pause();
					t5_2.fromTo(pack_crips_2, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "1%", y: "-1%", scaleX: .95, scaleY: .95, rotate: "1deg", duration: 6});
					t5_2.fromTo(pack_crips_2, {x: "1%", y: "-1%", scaleX: .95, scaleY: .95, rotate: "1deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
				
				var t5_3 = gsap.timeline({repeat: -1});
					t5_3.pause();
					t5_3.fromTo(pack_crips_3, {x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg"},  {delay:0, ease: Sine.easeOut, x: "1%", y: "-3%", scaleX: .95, scaleY: .95, rotate: "4deg", duration: 6});
					t5_3.fromTo(pack_crips_3, {x: "1%", y: "-3%", scaleX: .95, scaleY: .95, rotate: "4deg"},  {delay:0, ease: Sine.easeOut, x: "0%", y: "0%", scaleX: 1, scaleY: 1, rotate: "0deg", duration: 6});
				
				var t5 = gsap.timeline({repeat: 0});
					t5.fromTo(pack_crips_1, {x: "4%", y: "-10%", rotate: "0deg"}, {delay:1.75, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_1.play();
					}});
				var t6 = gsap.timeline({repeat: 0});
					t6.fromTo(pack_crips_2, {x: "0%", y: "0%", rotate: "0deg"},{delay:2, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_2.play();
					}});
				var t7 = gsap.timeline({repeat: 0});
					t7.fromTo(pack_crips_3, {x: "-4%", y: "5%", rotate: "0deg"},{delay:2.25, ease: Sine.easeOut, opacity:1, x: "0%", y: "0%", rotate: "0deg", scaleX: 1, scaleY: 1, duration: 5, onComplete: function(){
						t5_3.play();
					}});

				var t8 = gsap.timeline({repeat: 0});
					t8.to(icon__signature_3, {delay:4, ease: Sine.easeOut, duration: 2, opacity:0.6});

				// bottom panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
};