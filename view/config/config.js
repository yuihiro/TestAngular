'use strict';

var module = angular.module('config', []);

module.run(function() {
    console.log("config_run");
})

module.controller("config_controller", function($scope, $modal, config_service) {
    console.log("config_controller");

});
