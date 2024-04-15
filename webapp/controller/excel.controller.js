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

            onDropdownChange: function(oEvent) {
                var selectedItem = oEvent.getSource();
                this.selectedValue = selectedItem.getSelectedKey();
            },
            onDownloadExcelPress: function() {
                var selectedVal = this.selectedValue;
                var url = `templates/${selectedVal}.xlsx`;
                var filename = `${selectedVal}.xlsx`;
               
                var link = document.createElement("a");
                link.href = url;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
           // onDownloadTemplatePress: function() {
                // var templatePath = "/webapp/templates/temp.xlsx"; // Path to your template file within the project directory
              
                // // Fetch the template file
                // fetch(templatePath)
                // .then(response => response.blob())
                // .then(blob => {
                //     // Create download link
                //     var link = document.createElement('a');
                //     link.href = window.URL.createObjectURL(blob);
                //     link.download = 'template.xlsx'; // Name of the template file when downloaded
    
                //     // Trigger the download
                //     link.click();
                // })
                // .catch(error => {
                //     console.error('Error downloading template:', error);
                // });
            //     var url = "templates/temp.xlsx";
            //     var filename = "SCM.xlsx";
            //     var link = document.createElement("a");
            //     link.href = url;
            //     link.download = filename;
            //     document.body.appendChild(link);
            //     link.click();
            //     document.body.removeChild(link);
            
              


                
            // }
           
        });
    });
