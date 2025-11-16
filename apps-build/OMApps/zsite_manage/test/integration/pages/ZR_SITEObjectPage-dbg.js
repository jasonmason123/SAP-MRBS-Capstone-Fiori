sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zsitemanage',
            componentId: 'ZR_SITEObjectPage',
            contextPath: '/ZR_SITE'
        },
        CustomPageDefinitions
    );
});