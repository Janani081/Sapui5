sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "project2/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("project2.controller.List", {
            formatter:formatter,
            onInit: function () {

            },
            onSearch: function(oEvent) {
				var sQuery = oEvent.getParameter("newValue");
				
					var aFilters = new sap.ui.model.Filter("ReqNum", sap.ui.model.FilterOperator.Contains, sQuery);
					
					var oListVal = this.getView().byId("list");
					oListVal.getBinding("items").filter(aFilters);

				
			}
        });
    });
