sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zinvitation',
            componentId: 'ZR_INVTObjectPage',
            contextPath: '/ZR_INVT'
        },
        CustomPageDefinitions
    );
});