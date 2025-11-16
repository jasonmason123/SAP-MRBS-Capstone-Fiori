sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zsysvarmanagement/test/integration/FirstJourney',
		'zsysvarmanagement/test/integration/pages/ZR_SYSVARList',
		'zsysvarmanagement/test/integration/pages/ZR_SYSVARObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZR_SYSVARList, ZR_SYSVARObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zsysvarmanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZR_SYSVARList: ZR_SYSVARList,
					onTheZR_SYSVARObjectPage: ZR_SYSVARObjectPage
                }
            },
            opaJourney.run
        );
    }
);