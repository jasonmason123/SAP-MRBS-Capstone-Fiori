sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zavailroom',
            componentId: 'ZC_TF_AVL_RMSList',
            contextPath: '/ZC_TF_AVL_RMS/Set'
        },
        CustomPageDefinitions
    );
});