"use strict";
var Premium = Premium || {};

Premium.creative = {
    init: function() {
        Premium.product.initOrientationMessage();
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
                            // 'top' instance 
                        } else {
                            // 'bottom' instance
                        }
                    }
                });
                
                break;
        }

        /* END OF CUSTOM JS */
    }
};