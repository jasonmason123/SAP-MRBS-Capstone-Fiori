sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zsysvarmanagement',
            componentId: 'ZR_SYSVARList',
            contextPath: '/ZR_SYSVAR'
        },
        CustomPageDefinitions
    );
});