'use strict';
var module = angular.module('app');

module.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {
    console.log("app_config");

    $stateProvider.state('login', {
        url: '/login',
        views: {
            'main': {
                templateUrl: template_dir + 'login/login.html',
                controller: 'login_controller'
            }
        },
        data: {
            pageTitle: "Registration"
        }
    }).state('ap/list', {
        url: '/ap/list',
        views: {
            'main': {
                templateUrl: template_dir + 'ap/ap_list.html',
                controller: 'ap_controller',
                requireLogin: true
            }
        },
        data: {
            pageTitle: "Login"
        }
    }).state('config', {
        url: '/config',
        views: {
            'main': {
                templateUrl: template_dir + 'config/config.html',
                controller: 'config_controller'
            }
        },
        data: {
            pageTitle: "Login"
        }
    }).state('admin/list', {
        url: '/admin/list',
        views: {
            'main': {
                templateUrl: template_dir + 'admin/admin_list.html',
                controller: 'admin_controller'
            }
        },
        data: {
            pageTitle: "Login"
        },
        resolve: {
            data: function(admin_service) {
                return admin_service.selectAdminList();
            }
        }
    })

    $urlRouterProvider.otherwise('/login');
    //$locationProvider.html5Mode(true);
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push(function($q) {
        return {
            'request': function(config) {
                return config;
            },

            'requestError': function(rejection) {
                //if (canRecover(rejection)) {
                //  return responseOrNewPromise
                //}
                return $q.reject(rejection);
            },

            'response': function(response) {
                return response;
            },

            'responseError': function(rejection) {
                //if (canRecover(rejection)) {
                //  return responseOrNewPromise
                //}
                return $q.reject(rejection);
            }
        };
    });


    cfpLoadingBarProvider.includeSpinner = false;
});

//module.value("app_config", {"length":1, "woobin":"haha"});
//module.extend(app_config, {config3: "I have been extended"});
