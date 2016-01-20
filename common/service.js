'use strict';

var module = angular.module('service', []);

/*
module.service('popup_service', function($modal) {
    console.log("popup_service");

    $scope.admin_data = [];

    $scope.createPopup = function() {
        //var popup = $modal({scope: $scope, persist: true, template: '/app/template/modal.html', backdrop: 'static', show: false});
        //return popup;

        var modalInstance = $modal.open({
            templateUrl: '/app/template/modal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

*/
/*  
  $scope.showPopup = function(popup) {
    popup.$promise.then(popup.show);
  };  

/*
 $modal.on('hidden', function (ev) {
                if (!options.persist)
                    scope.$destroy();
            });  
*/

//var myModal = $modal({title: 'My Title', content: 'My Content', show: true});
//$scope.showModal();

//});
