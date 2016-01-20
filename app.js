'use strict';
var module = angular.module('app', ['ngCookies', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'mgcrea.ngStrap', 'ngGrid', 'ng-context-menu', 'angular-loading-bar',
    'login_module', 'ap_module', 'config_module', 'admin_module', 'http_service'
]);

module.run(function($compile, $rootScope, $window, $document) {
    console.log("app_run22");

    $rootScope.$on("message", function(evt, args) {
        //var message = evt.targetScope.message;
        cc("message : " + args);
    });

    $rootScope.$on("response", function(evt, args) {
        cc("response : " + args);
    });

    /*
    $rootScope.$on("$locationChangeSuccess", function(evt, newUrl, oldUrl) {
        cc("locationChange : " + newUrl);
    });
  */

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        cc("stateChange : " + toState.url);
        if (angular.isDefined(toState.data.pageTitle)) {}
    });

    angular.element($window).on('resize', function(event) {
        var w = $window,
            d = $document[0],
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        var h = $("#menu_container").height() + $("#status_container").height();
        // $("#main_container").attr("height", (($(window).height()) - h) + "px");
        // cc("aa:" + $("#main_container").height());
        /*    
        scope.$broadcast('resize::resize', {
            innerWidth: x,
            innerHeight: y
        });
        console.log(event.currentTarget.innerWidth + "/" + event.currentTarget.innerHeight);
        */
    });

});

function cc(log) {
    console.log(log);
}

function remote_success(response) {
    return (response.data);
}

function remote_error(response) {
    if (!angular.isObject(response.data) ||
        !response.data.message
    ) {
        return ($q.reject(response.data.message));
    }
    return ($q.reject(response.data.message));
}



/*
function Person( json ) {
  angular.extend(this, json);
}

Person.prototype = {
  update: function() {
    // Update it (With real code :P)
    this.name = "Dave";
    this.country = "Canada";
  }
};

Person.getById = function( id ) {
  // Do something to fetch a Person by the id
  return new Person({
    name: "Jesus",
    country: "Spain"
  });
};

// Our factory
app.factory('personService', function() {
  return {
    getById: Person.getById
  };
});
 */


//$scope.data = Object.create(null);

//$provide.value('a', 123);
//$provide.factory('a', function() { return 123; });      
/*
 $provide.decorator('foo', function($delegate) {
    $delegate.greet = function() {
      return "Hello, I am a new function of 'foo'";
    };

    return $delegate;
  }); 
 */
