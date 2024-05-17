sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/File"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,File) {
        "use strict";

        return Controller.extend("project2.controller.excel", {
            onInit: function () {

            },

            onClick: function() {
               console.log(sss);
            }
           
        });
    });
