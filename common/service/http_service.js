'use strict';

var module = angular.module('http_service', []);

module.factory('login_service', function($http, $q) {
    return ({
        checkLogin: checkLogin
    });

    function checkLogin(id, pwd) {
        var url = "dao/checkLogin";
        var deferred = $q.defer();
        var request = $http({
            method: "post",
            url: url,
            ignoreLoadingBar: true,
            params: {
                id: id,
                pwd: pwd
            },
            data: {
                id: id,
                pwd: pwd
            }
        });
        return (request.then(remote_success, remote_error));
    }
});

module.factory('config_service', function($http, $q) {
    return ({
        selectAppConfig: selectAppConfig
    });

    function selectAppConfig() {
        var url = "dao/selectAppConfig";
        var deferred = $q.defer();
        var request = $http({
            ignoreLoadingBar: true,
            method: "get",
            url: url
        });
        return (request.then(remote_success, remote_error));
    }

});

module.factory('admin_service', function($http, $q) {
    return ({
        selectAdminList: selectAdminList,
        selectAdminOne: selectAdminOne,
        deleteAdminList: deleteAdminList
    });

    function selectAdminList() {
        var url = "dao/selectAdminList";
        var deferred = $q.defer();
        var request = $http({
            ignoreLoadingBar: true,
            method: "get",
            url: url
        });
        return (request.then(remote_success, remote_error));
    }

    function selectAdminOne() {
        var url = "dao/selectAdminOne";
        var deferred = $q.defer();
        var request = $http({
            method: "get",
            url: url,
            param: {
                value: id
            }
        });
        return (request.then(remote_success, remote_error));
    }


    function deleteAdminList(values) {
        cc(values);
        var url = "dao/deleteAdminList";
        var deferred = $q.defer();
        var request = $http({
            method: "post",
            url: url,
            params: {
                values: values
            },
            data: {
                values: values
            }
        });
        return (request.then(remote_success, remote_error));
    }

});

module.factory('ap_service', function($http, $q) {
    return ({
        selectApList: selectApList,
        selectApOne: selectApOne
    });

    function selectApList(item) {
        var url = "dao/selectApList";
        var deferred = $q.defer();
        var request = $http({
            ignoreLoadingBar: true,
            method: "post",
            url: url,
            params: item,
            data: item
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
        return (request.then(remote_success, remote_error));
    }

    function selectApOne() {
        var url = "dao/selectApOne";
        var deferred = $q.defer();
        var request = $http({
            method: "get",
            url: url,
            data: {
                bssid: bssid
            }
        });
        return (request.then(remote_success, remote_error));
    }

});
