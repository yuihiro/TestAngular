(function(ng) {

    'use strict';

    var module = angular.module('ap', []);

    module.run(function() {
        console.log("ap_run");
    })

    module.controller('ap_controller', function($scope, ap_service) {
        console.log("ap_controller");

        $scope.combo_data = [{
            name: "Moroni",
            age: 50
        }, {
            name: "Tiancum",
            age: 43
        }];

        $scope.ap_grid_data = [];
        $scope.ap_grid_items = [];


        $scope.ap_grid_option = {
            data: 'ap_grid_data',
            enableRowSelection: true
        };

        var ap_seach_info = {
            name: "name",
            bssid: 123123,
            active: 1
        };

        $scope.selectApList = function(item) {
            ap_service.selectApList(item).then(
                function(result) {
                    console.log(result.length)
                    $scope.ap_grid_data = result;

                    /*
					$timeout(function() {
				        if($scope.gridApi.selection.selectRow){
				          $scope.gridApi.selection.selectRow($scope.grid_option.data[0]);
				        }
				      });
					*/
                    //$interval( function() {$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);}, 0, 1);
                },
                function(error) {
                    alert(error);
                });
        }

        /*
	$scope.removeRow = function removeRow(row) {
        var index = scope.rowCollection.indexOf(row);
        if (index !== -1) {
            scope.rowCollection.splice(index, 1);
        }
    }	
    */

        $scope.prevPage = function() {
            cc("prev")
        }

        $scope.nextPage = function() {
            cc("prev")
        }

        $scope.makeChanged = function() {
            cc($scope.depCountry);
        };

        $scope.selectApList(ap_seach_info);

    });

})(angular);
