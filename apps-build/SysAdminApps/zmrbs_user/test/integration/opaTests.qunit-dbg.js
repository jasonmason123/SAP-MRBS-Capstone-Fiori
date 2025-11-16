sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdev/s35/zmrbsuser/test/integration/FirstJourney',
		'zdev/s35/zmrbsuser/test/integration/pages/UserList',
		'zdev/s35/zmrbsuser/test/integration/pages/UserObjectPage',
		'zdev/s35/zmrbsuser/test/integration/pages/UserRoleObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserList, UserObjectPage, UserRoleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdev/s35/zmrbsuser') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserList: UserList,
					onTheUserObjectPage: UserObjectPage,
					onTheUserRoleObjectPage: UserRoleObjectPage
                }
            },
            opaJourney.run
        );
    }
);