sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('zmrbsschedulecreate.ext.controller.CreateScheduleController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf zmrbsschedulecreate.ext.controller.CreateScheduleController
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			routing: {
				// Called after the page is bound and the create context exists
				onAfterBinding: function (oContextInfo) {
					// Get startup parameters
					const oComponent = this.base.getAppComponent();
					const oParams = oComponent.getComponentData()?.startupParameters || {};

					// Get the page binding context (create context)
					const oContext = this.base.getExtensionAPI().getBindingContext()
						|| oContextInfo?.bindingContext; // depending on UI5 version

				  console.log("oContext:", oContext);

					if (!oContext) {
						console.warn("No binding context available in onAfterBinding.");
						return;
					}

					// Startup parameters are arrays: ["value"]
					const sRoomId       = oParams.RoomId && oParams.RoomId[0];
					const sDateScheduled = oParams.DateScheduled && oParams.DateScheduled[0];

					if (sRoomId) {
						oContext.setProperty("RoomId", sRoomId);
					}

					if (sDateScheduled) {
						// Adjust parsing as needed, e.g. if you pass yyyy-MM-dd
						// const oDate = new Date(sDateScheduled);
						oContext.setProperty("DateScheduled", sDateScheduled);
					}
				}
			}
		}
	});
});
