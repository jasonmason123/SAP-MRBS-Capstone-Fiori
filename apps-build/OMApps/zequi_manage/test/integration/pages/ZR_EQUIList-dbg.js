sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zequimanage',
            componentId: 'ZR_EQUIList',
            contextPath: '/ZR_EQUI'
        },
        CustomPageDefinitions
    );
});