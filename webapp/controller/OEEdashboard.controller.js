sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/File"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,File) {
        "use strict";

        return Controller.extend("project2.controller.OEEdashboard", {
            onInit: function () {

            },
            onSelectChange:function(){
                var machine = this.getView().byId("mySelect").mProperties.selectedKey;
                console.log(machine);

                if(machine==1){
                   this.getView().byId("vbox1").setVisible(true);
                    this.getView().byId("vbox2").setVisible(false);
                    this.getView().byId("vbox3").setVisible(false);
                }
                else if(machine==2){
                    this.getView().byId("vbox1").setVisible(false);
                    this.getView().byId("vbox2").setVisible(true);
                    this.getView().byId("vbox3").setVisible(false);
                }
                else {
                    this.getView().byId("vbox1").setVisible(false);
                    this.getView().byId("vbox2").setVisible(false);
                    this.getView().byId("vbox3").setVisible(true);
                }
            }
           
        });
    });
