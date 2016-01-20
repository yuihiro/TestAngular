'use strict';
var module = angular.module('admin_module', []);

module.run(function() {
    console.log("admin_run");
})

module.controller('admin_controller', function($scope, $modal, admin_service, data) {
    console.log("admin_controller");

    $scope.admin_grid_data = data;
    $scope.admin_grid_option = {
        data: 'admin_grid_data'
    };

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.openAdminAdd = function() {
        var modalInstance = $modal.open({
            templateUrl: template_dir + 'admin/admin_add_pop.html',
            controller: 'admin_add_controller',
            size: "sm",
            backdrop: "static",
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            cc("select");
            $scope.selected = selectedItem;
        }, function() {
            cc(new Date());
        });
    };

    $scope.selectAdminList = function() {
        admin_service.selectAdminList().then(
            function(result) {
                $scope.admin_grid_data = result;
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

    $scope.deleteAdminList = function(item_lst) {
        admin_service.deleteAdminList(item_lst).then(
            function(result) {
                cc("리절트");
                cc(result);
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

    $scope.addItem = function() {

    }

    $scope.modifyItem = function() {

    }

    $scope.deleteItem = function() {
            var item_lst = [];
            var length = $scope.admin_grid_option.$gridScope.selectedItems.length;
            for (var i = 0; i < length; i++) {
                item_lst.push({
                    id: $scope.admin_grid_option.$gridScope.selectedItems[i].id
                });
            };

            cc(item_lst);
            $scope.deleteAdminList(item_lst);
        }
        //$scope.selectAdminList();

});

module.controller('admin_add_controller', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
