"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		switch (document.body.id) {
			case "body_top":
				var i=1;
				var count=document.querySelectorAll('.yandex__item').length;
				var j=0;
				/*setTimeout(function(){
					document.querySelector('.yandex__curtain').classList.add('active');
				},2500);
				setTimeout(function(){
					document.querySelector('.yandex__curtain').classList.remove('active');
					document.querySelector('.yandex__curtain').classList.add('after');
				},3500);
				setTimeout(function(){
					document.querySelector('.yandex__curtain').classList.remove('after');
				},4500);*/
				setInterval(function(){
					j=i+1;
					if(count>i){
						document.querySelector('.yandex__item--'+j).classList.add('active');
						document.querySelector('.yandex__item--'+i).classList.remove('active');
					}else{
						document.querySelector('.yandex__item--1').classList.add('active');
						document.querySelector('.yandex__item--'+i).classList.remove('active');
						i=0;
					}
					/*if(document.querySelector(".yandex__item--1.active")){
						setTimeout(function(){
							document.querySelector('.yandex__curtain').classList.add('active');
						},2500);
						setTimeout(function(){
							document.querySelector('.yandex__curtain').classList.remove('active');
							document.querySelector('.yandex__curtain').classList.add('after');
						},3500);
						setTimeout(function(){
							document.querySelector('.yandex__curtain').classList.remove('after');
						},4500);
					}*/
					i++;
				},3000);
			break;
			case "body_left":
			var flag=0;
			function scrollLeft(){
					let scrollpos = window.top.scrollY;
					const header_height = 250;
					if (scrollpos >= header_height){
						document.querySelector('.yandex__item--1').classList.remove('super_active');
						document.querySelector('.yandex__side--bottom').classList.remove('super_active');
						if(flag<1){
							setTimeout(function(){
								document.querySelector('.yandex__curtain').classList.add('active');
							},3500);
							setTimeout(function(){
								document.querySelector('.yandex__curtain').classList.remove('active');
								document.querySelector('.yandex__curtain').classList.add('after');
							},4500);
							setTimeout(function(){
								document.querySelector('.yandex__curtain').classList.remove('after');
							},5500);
							flag=1;
							var i=1;
							var count=document.querySelectorAll('.yandex__item').length;
							var j=0;
							setInterval(function(){
								j=i+1;
								if(count>i){
									document.querySelector('.yandex__item--'+j).classList.add('active');
									document.querySelector('.yandex__item--'+i).classList.remove('active');
								}else{
									document.querySelector('.yandex__item--1').classList.add('active');
									document.querySelector('.yandex__item--'+i).classList.remove('active');
									i=0;
								}
								if(document.querySelector(".yandex__item--1.active")){
									setTimeout(function(){
										document.querySelector('.yandex__curtain').classList.add('active');
									},3500);
									setTimeout(function(){
										document.querySelector('.yandex__curtain').classList.remove('active');
										document.querySelector('.yandex__curtain').classList.add('after');
									},4500);
									setTimeout(function(){
										document.querySelector('.yandex__curtain').classList.remove('after');
									},5500);
								}
								i++;
							},4000);
						}
						document.querySelector('.fade_top').classList.add('faded');
					}else{
						document.querySelector('.fade_top').classList.remove('faded');
						document.querySelector('.yandex__item--1').classList.add('super_active');
						document.querySelector('.yandex__side--bottom').classList.add('super_active');
					}
			}
			try{
				window.top.addEventListener("scroll", scrollLeft)
			}catch(e){

			}

			break;

			case "body_right":
				var flag=0;
				function scrollRight(){
						let scrollpos = window.top.scrollY;
						const header_height = 250;
						var i=1;
						if (scrollpos >= header_height){
							document.querySelector('.yandex__item--1').classList.remove('super_active');
							document.querySelector('.yandex__side--bottom').classList.remove('super_active');
							if(flag<1){
								setTimeout(function(){
									document.querySelector('.yandex__curtain').classList.add('active');
								},3500);
								setTimeout(function(){
									document.querySelector('.yandex__curtain').classList.remove('active');
									document.querySelector('.yandex__curtain').classList.add('after');
								},4500);
								setTimeout(function(){
									document.querySelector('.yandex__curtain').classList.remove('after');
								},5500);
								flag=1;
								var count=document.querySelectorAll('.yandex__item').length;
								var j=0;
								setInterval(function(){
									j=i+1;
									if(count>i){
										document.querySelector('.yandex__item--'+j).classList.add('active');
										document.querySelector('.yandex__item--'+i).classList.remove('active');
									}else{
										document.querySelector('.yandex__item--1').classList.add('active');
										document.querySelector('.yandex__item--'+i).classList.remove('active');
										i=0;
									}
									if(document.querySelector(".yandex__item--1.active")){
										setTimeout(function(){
											document.querySelector('.yandex__curtain').classList.add('active');
										},3500);
										setTimeout(function(){
											document.querySelector('.yandex__curtain').classList.remove('active');
											document.querySelector('.yandex__curtain').classList.add('after');
										},4500);
										setTimeout(function(){
											document.querySelector('.yandex__curtain').classList.remove('after');
										},5500);
									}
									i++;
								},4000);
							}
							document.querySelector('.fade_top').classList.add('faded');
						}else{
							document.querySelector('.yandex__item--1').classList.add('super_active');
							document.querySelector('.yandex__side--bottom').classList.add('super_active');
							document.querySelector('.fade_top').classList.remove('faded');
						}
				}
				try{
					window.top.addEventListener("scroll", scrollRight)
				}catch(e){
				}
			break;

			case "body_back":
			break;
		}

		/* END OF CUSTOM JS */
	}
}
