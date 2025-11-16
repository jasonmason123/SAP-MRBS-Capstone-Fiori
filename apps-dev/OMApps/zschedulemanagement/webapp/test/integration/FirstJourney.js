sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZMRBS_C_SCH_OMList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZMRBS_C_SCH_OMList.onFilterBar().iExecuteSearch();
                
                Then.onTheZMRBS_C_SCH_OMList.onTable().iCheckRows();

                When.onTheZMRBS_C_SCH_OMList.onTable().iPressRow(0);
                Then.onTheZMRBS_C_SCH_OMObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});