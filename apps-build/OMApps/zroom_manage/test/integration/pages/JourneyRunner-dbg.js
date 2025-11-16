sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zroommanage/test/integration/pages/ZC_ROOMList",
	"zroommanage/test/integration/pages/ZC_ROOMObjectPage"
], function (JourneyRunner, ZC_ROOMList, ZC_ROOMObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zroommanage') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_ROOMList: ZC_ROOMList,
			onTheZC_ROOMObjectPage: ZC_ROOMObjectPage
        },
        async: true
    });

    return runner;
});

