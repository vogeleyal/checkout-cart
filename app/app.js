// Initializing our application's main (and only) module
angular.module('cartApp', [
    'ngRoute',
    'tw.directives.fileInput'
  ]).config(['$routeProvider', function($routeProvider) {

    // Definiing routes
    $routeProvider.when('/cart', {
      template: '<checkout></checkout>'
    });
    $routeProvider.when('/print', {
      template: '<print></print>'
    });

    $routeProvider.otherwise({redirectTo: '/cart'});
  }]);
