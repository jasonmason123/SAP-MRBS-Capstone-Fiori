sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zavailroom',
            componentId: 'ZC_TF_AVL_RMSObjectPage',
            contextPath: '/ZC_TF_AVL_RMS/Set'
        },
        CustomPageDefinitions
    );
});