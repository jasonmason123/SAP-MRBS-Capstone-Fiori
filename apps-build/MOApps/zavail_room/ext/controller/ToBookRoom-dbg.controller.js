sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('zavailroom.ext.controller.ToBookRoom', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf zavailroom.ext.controller.ToBookRoom
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			}
			
		},

		onBookRoom: async function () {
			const oAPI = this.base.getExtensionAPI();
			const ctx = oAPI.getBindingContext();
			const roomId = ctx.getProperty("RoomID");
			const dateSche = ctx.getProperty("DateSche");

			// sap.ushell.Container
			const Navigation= await sap.ushell.Container.getServiceAsync("Navigation");

			// trigger navigation
			Navigation.navigate({
				target: { semanticObject: "zmrbsschedulecreate", action: "create" },
				params: {
					RoomId: roomId,
					DateScheduled: dateSche
				}
			});
		}
	});
});
