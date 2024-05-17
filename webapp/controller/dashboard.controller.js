sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project2.controller.dashboard", {
            onInit: function () {

            },
            onPress: function () {
                this.getOwnerComponent().getRouter().navTo("RouteOEEdashboard");
              }
           
        });
    });
