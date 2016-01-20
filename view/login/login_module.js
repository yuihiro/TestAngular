'use strict';
var module = angular.module('login_module', []);

module.controller("login_controller", function($scope, $location, login_service, app_info) {
    console.log("login_controller");

    $scope.$parent.login_success = false;

    $scope.canSave = function() {
        return $scope.login_form.$dirty && $scope.login_form.$valid;
    }
    $scope.checkLogin = function() {
        var id = $("#id_txt").val();
        var pwd = $("#pwd_txt").val();
        if (id == "" || pwd == "") {
            alert('에러');
            return;
        }

        login_service.checkLogin(id, pwd).then(
            function(result) {
                $scope.$parent.login_info = result;
                if (result.login_type == "SUCCESS") {
                    $scope.$parent.login_success = true;
                    console.log("login_info");
                    console.log($scope.$parent.login_info);
                    $location.url(app_info.welcome_page);
                } else {
                    alert('에러');
                    return;
                    /*
                    var myAlert = $alert({
                        title: '알림',
                        content: '계정정보가 틀립니다.',
                        placement: 'bottom',
                        type: 'info',
                        show: true,
                        duration: 10
                    });
                    */
                }

            },
            function(error) {
                alert(error);
            });
    }
})
