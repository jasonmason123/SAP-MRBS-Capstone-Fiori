sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zinvitation',
            componentId: 'ZR_INVTList',
            contextPath: '/ZR_INVT'
        },
        CustomPageDefinitions
    );
});