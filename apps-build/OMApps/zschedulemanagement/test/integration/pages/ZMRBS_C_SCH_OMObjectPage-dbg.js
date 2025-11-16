sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zschedulemanagement',
            componentId: 'ZMRBS_C_SCH_OMObjectPage',
            contextPath: '/ZMRBS_C_SCH_OM'
        },
        CustomPageDefinitions
    );
});