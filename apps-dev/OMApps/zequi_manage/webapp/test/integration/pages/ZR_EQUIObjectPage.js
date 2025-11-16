sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zequimanage',
            componentId: 'ZR_EQUIObjectPage',
            contextPath: '/ZR_EQUI'
        },
        CustomPageDefinitions
    );
});