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
			const oAppComponent = this.base.getView().getController().getAppComponent();
			
			//this.getOwnerComponent().getRouter().navTo("ZC_SCHEDULEObjectPage");

			// console.log("Edit flow context 1", oAPI.getEditFlow());
			// var document = oAPI.getEditFlow().createDocument(
			// 	{ RoomId: roomId, DateScheduled: dateSche },
			// 	{
			// 		entitySet: "ZC_SCHEDULE",   // required in custom pages
			// 		creationMode: "newPage"     // or "inline" / "inplace"
			// 	}
			// );
			// console.log("Create document successful", document);

			// const oNavService = oAppComponent.getNavigationService();

			// oNavService.navigate(
			// {
			// 	target: "ZC_SCHEDULEObjectPage",    // <- defined in your manifest.json
			// 	parameters: {
			// 		preferredMode: "create"
			// 	}
			// });

			const oModel = this.getView().getController().getModel();
			console.log("Model:", oModel);
			const oEditFlow = oAPI.getEditFlow();
			console.log("Edit flow context:", oEditFlow);
			const oNewContext = await oEditFlow.createDocument(
				{
						RoomID: roomId // Initial value for your foreign key
				},
				{
						model: oModel,          // Must be passed because we’re in another entity’s Object Page
						entitySet: "ZC_SCHEDULE"
				}
			);

			console.log("Draft created:", oNewContext);
			console.log("OContext path:", oNewContext.getPath());

			// var oRouting = oAPI.routing;
			// oRouting.navigateToRoute("ZC_SCHEDULEObjectPage", {
			// 	"key": "...",
			// 	"?query": {
			// 		"RoomId": roomId, 
			// 		"DateScheduled": dateSche,
			// 		"i-action": "create"
			// 	}
			// });
		}
	});
});
