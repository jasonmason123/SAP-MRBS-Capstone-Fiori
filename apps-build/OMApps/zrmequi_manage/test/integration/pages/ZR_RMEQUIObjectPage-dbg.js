sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrmequimanage',
            componentId: 'ZR_RMEQUIObjectPage',
            contextPath: '/ZR_RMEQUI'
        },
        CustomPageDefinitions
    );
});