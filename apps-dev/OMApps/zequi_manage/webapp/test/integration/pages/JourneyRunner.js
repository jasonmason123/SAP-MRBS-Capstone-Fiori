sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zequimanage/test/integration/pages/ZR_EQUIList",
	"zequimanage/test/integration/pages/ZR_EQUIObjectPage"
], function (JourneyRunner, ZR_EQUIList, ZR_EQUIObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zequimanage') + '/test/flp.html#app-preview',
        pages: {
			onTheZR_EQUIList: ZR_EQUIList,
			onTheZR_EQUIObjectPage: ZR_EQUIObjectPage
        },
        async: true
    });

    return runner;
});

