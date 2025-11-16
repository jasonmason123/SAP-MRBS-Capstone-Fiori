sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zavailroom/test/integration/FirstJourney',
		'zavailroom/test/integration/pages/ZC_TF_AVL_RMSList',
		'zavailroom/test/integration/pages/ZC_TF_AVL_RMSObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_TF_AVL_RMSList, ZC_TF_AVL_RMSObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zavailroom') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_TF_AVL_RMSList: ZC_TF_AVL_RMSList,
					onTheZC_TF_AVL_RMSObjectPage: ZC_TF_AVL_RMSObjectPage
                }
            },
            opaJourney.run
        );
    }
);