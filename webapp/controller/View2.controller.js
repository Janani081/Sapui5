sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
      "sap/ui/model/json/JSONModel"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel) {
        "use strict";

        return Controller.extend("project2.controller.View2", {
            onInit: function () {

            },
            onSave:function(){
                debugger;
var data={
         name:this.getView().byId("id1").mProperties.value,
         mobileno:this.getView().byId("id2").mProperties.value,
         city:this.getView().byId("id3").mProperties.value,
         state:this.getView().byId("id4").mProperties.value,
         country:this.getView().byId("id5").mProperties.value

}



var oModel= new JSONModel(data);
console.log(oModel);
this.getView().setModel(oModel,"oModel");

this.getView().byId("id1").setValue("");
this.getView().byId("id2").setValue("");
this.getView().byId("id3").setValue("");
this.getView().byId("id4").setValue("");
this.getView().byId("id5").setValue("");
},
        onpressshow:function()
            {
              debugger;
              var oView = this.getView();
              var that = this;
              if(!that.pErrorLogPopover){
                that.pErrorLogPopover = Fragment.load({
                     id:oView.getId(),
                     name:"project2.view.View2_showdata",
                     controller:that
                  }).then(function(oDialog){
                    oView.addDependent(oDialog);
                  return oDialog;

                  });
                  that.pErrorLogPopover.then(function(oDialog){
                    oDialog.open();
                  });


              }


            } ,
            
            onclose:function(){

                this.getView().byId("iddialog").destroy();

                this.pErrorLogPopover = undefined;
            },

            onBttnPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            onBPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3");
            }

            
           
        });
    });
