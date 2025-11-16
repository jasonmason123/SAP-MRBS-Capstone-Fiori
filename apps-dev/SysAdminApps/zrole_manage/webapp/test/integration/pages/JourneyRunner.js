sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zrolemanage/test/integration/pages/RoleList",
	"zrolemanage/test/integration/pages/RoleObjectPage"
], function (JourneyRunner, RoleList, RoleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zrolemanage') + '/test/flp.html#app-preview',
        pages: {
			onTheRoleList: RoleList,
			onTheRoleObjectPage: RoleObjectPage
        },
        async: true
    });

    return runner;
});

