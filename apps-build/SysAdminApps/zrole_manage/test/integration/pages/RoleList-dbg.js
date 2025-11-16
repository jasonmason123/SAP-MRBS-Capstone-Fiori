sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zrolemanage',
            componentId: 'RoleList',
            contextPath: '/Role'
        },
        CustomPageDefinitions
    );
});