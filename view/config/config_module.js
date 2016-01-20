'use strict';

var module = angular.module('config_module', []);

module.run(function() {
    console.log("config_run");
})

module.controller("config_controller", function($scope, config_service) {
    console.log("config_controller");

    $scope.dt = new Date();

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.disabled = function(date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };


    $scope.tabs = [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
    }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
    }];

    $scope.combo_data = [{
        name: "Moroni",
        age: 50
    }, {
        name: "Tiancum",
        age: 43
    }];

    $scope.alertMe = function() {
        cc("selectx");
    }

    $scope.hstep = 1;
    $scope.mstep = 15;


});
