sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zroommanage',
            componentId: 'ZC_ROOMList',
            contextPath: '/ZC_ROOM'
        },
        CustomPageDefinitions
    );
});