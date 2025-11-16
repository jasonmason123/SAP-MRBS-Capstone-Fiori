sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zrmequimanage/test/integration/pages/ZR_RMEQUIList",
	"zrmequimanage/test/integration/pages/ZR_RMEQUIObjectPage"
], function (JourneyRunner, ZR_RMEQUIList, ZR_RMEQUIObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zrmequimanage') + '/test/flp.html#app-preview',
        pages: {
			onTheZR_RMEQUIList: ZR_RMEQUIList,
			onTheZR_RMEQUIObjectPage: ZR_RMEQUIObjectPage
        },
        async: true
    });

    return runner;
});

