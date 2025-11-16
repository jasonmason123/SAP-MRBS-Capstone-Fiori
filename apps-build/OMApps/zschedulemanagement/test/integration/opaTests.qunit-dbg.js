sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zschedulemanagement/test/integration/FirstJourney',
		'zschedulemanagement/test/integration/pages/ZMRBS_C_SCH_OMList',
		'zschedulemanagement/test/integration/pages/ZMRBS_C_SCH_OMObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZMRBS_C_SCH_OMList, ZMRBS_C_SCH_OMObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zschedulemanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZMRBS_C_SCH_OMList: ZMRBS_C_SCH_OMList,
					onTheZMRBS_C_SCH_OMObjectPage: ZMRBS_C_SCH_OMObjectPage
                }
            },
            opaJourney.run
        );
    }
);