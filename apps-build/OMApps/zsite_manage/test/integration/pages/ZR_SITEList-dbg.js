sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zsitemanage',
            componentId: 'ZR_SITEList',
            contextPath: '/ZR_SITE'
        },
        CustomPageDefinitions
    );
});