sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zrmequimanage',
            componentId: 'ZR_RMEQUIList',
            contextPath: '/ZR_RMEQUI'
        },
        CustomPageDefinitions
    );
});