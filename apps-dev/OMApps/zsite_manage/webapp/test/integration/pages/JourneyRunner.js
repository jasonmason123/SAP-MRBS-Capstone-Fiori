sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zsitemanage/test/integration/pages/ZR_SITEList",
	"zsitemanage/test/integration/pages/ZR_SITEObjectPage"
], function (JourneyRunner, ZR_SITEList, ZR_SITEObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zsitemanage') + '/test/flp.html#app-preview',
        pages: {
			onTheZR_SITEList: ZR_SITEList,
			onTheZR_SITEObjectPage: ZR_SITEObjectPage
        },
        async: true
    });

    return runner;
});

