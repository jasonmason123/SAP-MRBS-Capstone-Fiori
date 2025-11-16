sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZC_TF_AVL_RMSList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZC_TF_AVL_RMSList.onFilterBar().iExecuteSearch();
                
                Then.onTheZC_TF_AVL_RMSList.onTable().iCheckRows();

                When.onTheZC_TF_AVL_RMSList.onTable().iPressRow(0);
                Then.onTheZC_TF_AVL_RMSObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});