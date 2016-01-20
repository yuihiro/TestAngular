'use strict';

var module = angular.module('directive', []);
module.directive('version', function(version) {
    return function($scope, $elm, $attrs) {
        $elm.text(version);
    };
});

module.directive("test", function() {
    return {
        restrict: "E",
        template: '<span>{{label}}</span>',
        link: function(scope, ele, att) {
            console.log("test");
            scope.label = attr.popoverLabel;

            $(el).popover({
                trigger: 'click',
                html: true,
                content: attr.popoverHtml,
                placement: attr.popoverPlacement
            });
            console.log(scope);
            console.log(ele);
            console.log(att);
        }
    }
});

module.directive('testWidject', ['', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        restrict: 'E',
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            var para = iElm.children()[0];
            $(para).on("click", function() {
                $(this).css({
                    "background-color": "red"
                });
            });
        }
    };
}]);

module.directive('dragable', function() {

    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            //$(elem).draggable();
        }
    }
});

module.directive('stRatio', function() {
    return {
        link: function(scope, element, attr) {
            var ratio = +(attr.stRatio);
            element.css('width', ratio + '%');
        }
    };
});

module.directive('autoHeight', [
    '$window', '$timeout',
    function($window, $timeout) {
        return {
            link: function($scope, $element, $attrs) {
                var combineHeights, siblings;
                combineHeights = function(collection) {
                    var heights, node, _i, _len;
                    heights = 0;
                    for (_i = 0, _len = collection.length; _i < _len; _i++) {
                        node = collection[_i];
                        heights += node.offsetHeight;
                    }
                    return heights;
                };
                siblings = function($elm) {
                    var elm, _i, _len, _ref, _results;
                    _ref = $elm.parent().children();
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        elm = _ref[_i];
                        if (elm !== $elm[0]) {
                            _results.push(elm);
                        }
                    }
                    return _results;
                };
                angular.element($window).bind('resize', function() {
                    var additionalHeight, parentHeight;
                    additionalHeight = $attrs.additionalHeight || 0;
                    parentHeight = $window.innerHeight - $element.parent()[0].getBoundingClientRect().top;
                    return $element.css('height', (parentHeight - combineHeights(siblings($element)) - additionalHeight) + "px");
                });
                return $timeout(function() {
                    return angular.element($window).triggerHandler('resize');
                }, 1000);
            }
        };
    }
]);
