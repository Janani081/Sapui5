sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator,newformatter) {
        "use strict";
        
        return Controller.extend("project2.controller.dynamic", {
            formatter:newformatter,
             onInit: function () {

            },

            onSearch: function () {
                debugger;
                var table = this.getView().byId("table");
                var oItemBindings = table.getBinding("items");

                var shopname = this.getView().byId("n1").mProperties.selectedKeys;
                var category = this.getView().byId("n2").mProperties.selectedKeys;
                var suppliername = this.getView().byId("n3").mProperties.selectedKeys;
                console.log(shopname, category, suppliername);

                var oFilter = [];

                var title=["ShopName","Category","SupplierName"];
                var selkey=[shopname,category,suppliername];

                for(let i=0;i<title.length;i++){
                    for(let j=0;j<selkey[i].length;j++){
                        oFilter.push(new Filter(title[i], FilterOperator.EQ, selkey[i][j]));   
                    }
                }
                   
             oItemBindings.filter(oFilter);
                debugger;


            },
            onTableSelectionChange: function(){
                console.log(data);
            },

            onSelectionChange1: function () {
                debugger;
                var table = this.getView().byId("table");
                var oItemBindings = table.getBinding("items");

                var shopname = this.getView().byId("n1").mProperties.selectedKeys;
                var oFilter = [];
                for(let i=0;i<shopname.length;i++){
                    oFilter.push(new Filter("ShopName", FilterOperator.EQ, shopname[i]));
                }
                oItemBindings.filter(oFilter);
            },
            
            onSelectionChange2: function () {
                debugger;
                var table = this.getView().byId("table");
                var oItemBindings = table.getBinding("items");

                var category = this.getView().byId("n2").mProperties.selectedKeys;
                var oFilter1 = [];
                for(let i=0;i<category.length;i++){
                    oFilter1.push(new Filter("Category", FilterOperator.EQ, category[i]));
                }
                oItemBindings.filter(oFilter1);
            },
            onSelectionChange3: function () {
                debugger;
                var table = this.getView().byId("table");
                var oItemBindings = table.getBinding("items");

                var suppliername = this.getView().byId("n3").mProperties.selectedKeys;
                var oFilter2 = [];
                for(let i=0;i<suppliername.length;i++){
                    oFilter2.push(new Filter("SupplierName", FilterOperator.EQ, suppliername[i]));
                }
                oItemBindings.filter(oFilter2);
             },


            onNextBttnPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            }
            
        });
    });
