'use strict';

var module = angular.module('app');

/*
module.service('popup_service', function($modal) {

    var popup_lst = [];

    this.createPopup = function(templateUrl, controller, size) {

        var modalInstance = $modal.open({
            templateUrl: templateUrl,
            controller: controller,
            size: size,
            resolve: {
                items: function() {
                    return null;
                }
            }
        });

        popup_lst.push(modalInstance);

        modalInstance.result.then(function(selectedItem) {}, function() {});
    };
});

/*

  var promise;
  var url = "dao/selectAdmin2";
  var service = {
    loadAppConfig : function() {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise
        promise = $http.get(url).then(function (response) {
          // The then function here is an opportunity to modify the response
          // The return value gets picked up by the then in the controller.
          return response;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return service;
module.servce('app_service', function() {


  this.loadAppConfig = function() {
     var url = "dao/selectAdmin";
       var reqPromise = $http.get('dao/selectAdmin');

      reqPromise.success(function(data) {
          $scope.userList = data;
      });

      reqPromise.error(function(data) {
        $rootScope.$emit("message", '에러발생')   
      });
  }
});
 */
