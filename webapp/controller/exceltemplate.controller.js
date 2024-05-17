sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/Export", 
    "sap/ui/core/util/ExportTypeCSV",
    "sap/ui/core/util/File"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Export,ExportTypeCSV,File) {
        "use strict";

        return Controller.extend("project2.controller.exceltemplate", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel("model/excelData.json");
                sap.ui.getCore().setModel(oModel, "oModel");
            },

            onDataExport: sap.m.Table.prototype.exportData || function() {

                var oModel = sap.ui.getCore().getModel("oModel");
                var oExport = new Export({
    
                    exportType: new ExportTypeCSV({
                        fileExtension: "csv"
                        
                    }),
    
                    models: oModel,
    
                    rows: {
                        path: "/items"
                    },
                    columns: [{
                        name: "First Name"
                       
                    }, {
                        name: "Last name"
                    }, {
                        name: "Job Title"
                    }, {
                        name: "Location"
                    }, {
                        name: "Department"
                    }]
                });
                console.log(oExport);
                oExport.saveFile().catch(function(oError) {
    
                }).then(function() {
                    oExport.destroy();
                });
            }
           
           
        });
    });
