// Initializing our application's main (and only) module
angular.module('cartApp', [
    'ngRoute',
    'tw.directives.fileInput'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cart', {
      templateUrl: 'cart/cart.view.html'
    });

    $routeProvider.when('/print', {
      template: '<print></print>'
    });

    $routeProvider.otherwise({redirectTo: '/cart'});
  }]);
