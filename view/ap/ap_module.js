'use strict';
var module = angular.module('ap_module', []);

module.controller('ap_controller', function($scope, ap_service) {
    console.log("ap_controller");

    $scope.ap_search_option = {
        type_lst: [1, 2, 3],
        map_lst: ['한국', '미국', '영국', '일본']
    };

    $scope.ap_grid_data = [];
    $scope.ap_grid_option = {
        current_page: 1,
        total_cnt: 0,

        data: 'ap_grid_data',
        columnDefs: [{
            field: 'ssid',
            displayName: 'ssid',
            resizeable: true
        }, {
            field: 'bssid',
            displayName: 'bssid',
            resizeable: true
        }, {
            field: 'rss',
            displayName: 'rss',
            resizeable: true,
            cellTemplate: '<span class="glyphicon glyphicon-search"></span>'
        }],
        enableRowSelection: true
    };

    $scope.getRssIcon = function(value) {
        return value;
    }

    $scope.selectApList = function(item) {
        ap_service.selectApList(item).then(
            function(result) {
                console.log(result.length)
                $scope.ap_grid_data = result;
                $scope.ap_grid_total_cnt = result.length;
            },
            function(error) {
                alert(error);
            });
    }

    $scope.changePage = function() {
        var param = {
            from: ($scope.ap_grid_option.current_page - 1) * 100,
            to: ($scope.ap_grid_option.current_page) * 100
        };
        $scope.selectApList(param);
    }

    angular.element('#ap_grid').attr("height", "500px");
    $("#ap_grid").attr("height", "100px");

    $scope.changePage();

});
