sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"invitation/invitation/test/integration/pages/ZR_INVTList",
	"invitation/invitation/test/integration/pages/ZR_INVTObjectPage"
], function (JourneyRunner, ZR_INVTList, ZR_INVTObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('invitation/invitation') + '/test/flp.html#app-preview',
        pages: {
			onTheZR_INVTList: ZR_INVTList,
			onTheZR_INVTObjectPage: ZR_INVTObjectPage
        },
        async: true
    });

    return runner;
});

