'use strict';
var module = angular.module('app');

module.controller('app_controller', function($scope, $rootScope, $location, config_service) {
    console.log("app_controller");

    $scope.login_success = false;
    $scope.login_info = null;
    $scope.app_config = null;

    var loadAppConfig = function() {
        config_service.selectAppConfig().then(
            function(result) {
                $scope.app_config = result;
                console.log("app_config");
                console.log($scope.app_config);
                $location.url('/login');
                //popup_service.createPopup('/app/view/login/login.html', 'login_controller', 'lg');
            },
            function(error) {
                alert(error);
            });
    }

    loadAppConfig();
});

module.controller('menu_controller', function($scope, $rootScope) {
    cc("menu_controller");
});

module.controller('status_controller', function($scope, $rootScope) {
    cc("status_controller");
});
