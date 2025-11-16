sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zsysvarmanagement',
            componentId: 'ZR_SYSVARObjectPage',
            contextPath: '/ZR_SYSVAR'
        },
        CustomPageDefinitions
    );
});