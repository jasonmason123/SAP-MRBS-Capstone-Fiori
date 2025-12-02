sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zslotconfig/test/integration/FirstJourney',
		'zslotconfig/test/integration/pages/ZR_SLOTList',
		'zslotconfig/test/integration/pages/ZR_SLOTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZR_SLOTList, ZR_SLOTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zslotconfig') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZR_SLOTList: ZR_SLOTList,
					onTheZR_SLOTObjectPage: ZR_SLOTObjectPage
                }
            },
            opaJourney.run
        );
    }
);