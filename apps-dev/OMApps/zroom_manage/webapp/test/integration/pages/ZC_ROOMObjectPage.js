sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zroommanage',
            componentId: 'ZC_ROOMObjectPage',
            contextPath: '/ZC_ROOM'
        },
        CustomPageDefinitions
    );
});