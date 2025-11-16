sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('zavailroom.ext.controller.CreateScheduleController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf zavailroom.ext.controller.CreateScheduleController
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				console.log("CreateScheduleController initialized");
			},

			editFlow: {
				onBeforeCreate: function (oEvent) {
					console.log("Before create event:", oEvent);
					//alert("Before create event triggered");
					const routeName = oEvent.getParameter("name");
					if (routeName !== "ZC_SCHEDULEObjectPage") {
						// Ignore all other pages
						return;
					}

					const oArgs = oEvent.getParameter("arguments") || {};
					const params = oArgs["?query"];

					if (!params) {
						return; // No query params → do nothing
					}

					console.log("Prefill with:", params.RoomId, params.DateScheduled);
					this.getExtensionAPI().create();
				},

				onRouteMatched: function (oEvent) {
					console.log("Route matched event:", oEvent);
				}
			}
		}
	});
});
