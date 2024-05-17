sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project2.controller.gridlist", {
            onInit: function () {

            },
            onDetailPress: function (oEvent) {
                MessageToast.show("Request details for item with ID " + oEvent.getSource().getId());
            },
    
            onPress: function (oEvent) {
                MessageToast.show("Pressed item with ID " + oEvent.getSource().getId());
            }
           
        });
    });
