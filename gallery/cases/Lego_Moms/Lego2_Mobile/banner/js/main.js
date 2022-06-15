"use strict";
var Premium = Premium || {};

Premium.creative = {
    init: function() {

        // PremiumJS add-on -------------------------------------------------------------
        Premium.jpxApi.getFixedElemPosition = function() {
            try {
                return Premium.jpxApi._jpxApi.getFixedElemPosition();
            } catch (e) {
                return Premium.product.scopeWindow.jpxApiInterface.getFixedElemPosition();
            }
        }
        // PremiumJS add-on -------------------------------------------------------------

        Premium.product.initOrientationMessage("Please rotate your device.", "#4E4E4E");
        /* START OF CUSTOM JS */
        switch (document.body.id) {
            case "body_main":
                // main panel code here
                var slides = document.querySelectorAll('.lego__item');
          			var currentSlide = 0;
          			var slideInterval = setInterval(nextSlide,5000);
          			function nextSlide(){
          				slides[currentSlide].classList.remove('active');
          				currentSlide = (currentSlide+1)%slides.length;
          				slides[currentSlide].classList.add('active');
          			}
                break;

                case "body_bottom":
                // bottom panel code here
                var panelPosition = "top";
                Premium.product.scopeWindow.addEventListener('scroll', function() {
                    if (Premium.jpxApi.getFixedElemPosition() !== panelPosition) {
                        panelPosition = Premium.jpxApi.getFixedElemPosition();
                        Premium.utils.debug(panelPosition);
                        if (panelPosition === "top") {
                            // 'top' instance
                            document.querySelector('.over2').classList.remove('active');
                            document.querySelector('.over1').classList.add('active');
                        } else {
                            // 'bottom' instance
                            document.querySelector('.over1').classList.remove('active');
                            document.querySelector('.over2').classList.add('active');
                        }
                    }
                });
                var slides = document.querySelectorAll('.lego__slider--top .lego__item');
          			var currentSlide = 0;
          			var slideInterval = setInterval(nextSlide3,5000);
          			function nextSlide3(){
          				slides[currentSlide].classList.remove('active');
          				currentSlide = (currentSlide+1)%slides.length;
          				slides[currentSlide].classList.add('active');
          			}

                var slides2 = document.querySelectorAll('.lego__slider--bottom .lego__item');
          			var currentSlide2 = 0;
          			var slideInterval2 = setInterval(nextSlide4,5000);
          			function nextSlide4(){
          				slides2[currentSlide2].classList.remove('active');
          				currentSlide2 = (currentSlide2+1)%slides2.length;
          				slides2[currentSlide2].classList.add('active');
          			}

                break;
            }

            /* END OF CUSTOM JS */
        }
    };
