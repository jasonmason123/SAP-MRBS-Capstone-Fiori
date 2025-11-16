sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdev/s35/zmrbsschedule/test/integration/FirstJourney',
		'zdev/s35/zmrbsschedule/test/integration/pages/ScheduleList',
		'zdev/s35/zmrbsschedule/test/integration/pages/ScheduleObjectPage'
    ],
    function(JourneyRunner, opaJourney, ScheduleList, ScheduleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdev/s35/zmrbsschedule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheScheduleList: ScheduleList,
					onTheScheduleObjectPage: ScheduleObjectPage
                }
            },
            opaJourney.run
        );
    }
);