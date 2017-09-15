angular.module('cartApp')
    .factory('pricingService', ['$http', '$q', function ($http, $q) {
        return {
          calcualtePrintPrice: function(print) {
            // Make some server-side calculations with $http
            return $q.when(Math.floor((Math.random() * 10) + 1));
          }
        };
    }]);
