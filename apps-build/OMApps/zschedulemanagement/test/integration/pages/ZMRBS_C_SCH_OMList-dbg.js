sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zschedulemanagement',
            componentId: 'ZMRBS_C_SCH_OMList',
            contextPath: '/ZMRBS_C_SCH_OM'
        },
        CustomPageDefinitions
    );
});