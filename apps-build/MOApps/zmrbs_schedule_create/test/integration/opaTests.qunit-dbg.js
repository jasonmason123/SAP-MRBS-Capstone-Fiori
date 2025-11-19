sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmrbsschedulecreate/test/integration/FirstJourney',
		'zmrbsschedulecreate/test/integration/pages/ScheduleObjectPage'
    ],
    function(JourneyRunner, opaJourney, ScheduleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmrbsschedulecreate') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheScheduleObjectPage: ScheduleObjectPage
                }
            },
            opaJourney.run
        );
    }
);