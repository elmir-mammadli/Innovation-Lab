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

                break;

                case "body_bottom":
                // bottom panel code here
                var panelPosition = "top";
                Premium.product.scopeWindow.addEventListener('scroll', function() {
                    if (Premium.jpxApi.getFixedElemPosition() !== panelPosition) {
                        panelPosition = Premium.jpxApi.getFixedElemPosition();
                        Premium.utils.debug(panelPosition);
                        if (panelPosition === "top") {
                           document.getElementById('elem1').innerHTML = 'Невыносимо <br> долговечные';
                           document.getElementById('elem2').innerHTML = 'X-ICE SNOW <u>* SNOW - снег</u>';
                       } else {
                           document.getElementById('elem1').innerHTML = 'Неприлично <br> тихие';
                           document.getElementById('elem2').innerHTML = 'X-ICE NORTH <u>4</u>';
                       }
                   }
               });
                break;
            }

            /* END OF CUSTOM JS */
        }
    };