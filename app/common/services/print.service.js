angular.module('cartApp')
    .factory('printService', ['$http', '$q', function ($http, $q) {
        return {
          validateModel: function(file) {
            // Make some server-side validation with $http
            return $q.when(true);
          },
          getAvailableMaterials: function() {
            // Get materials from server with $http
            return $q.when([
                'Metal',
                'Diamond',
                'Plastic'
            ]);
          },
          getAvailableColors: function() {
            // Get colors from server with $http
            return $q.when([
                'Red',
                'Black',
                'Blue',
                'Grey'
            ]);
          }
        };
    }]);
