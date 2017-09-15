angular.module('cartApp')
    .factory('cartService', ['$http', '$q', function ($http, $q) {

        // Probably get from session/local storage
        var cartItems = [
          {
            file: null,
            title: 'shape 1',
            material: 'plastic',
            color: 'red',
            price: 2,
            quantity: 4
          },
          {
            file: null,
            title: 'shape 2',
            material: 'metal',
            color: 'black',
            price: 0.5,
            quantity: 1
          }
        ];

        return {
          addCartItem :function (item) {
            cartItems.push(item);
          },
          removeCartItem: function(item) {
            var index = cartItems.indexOf(item);

            if (index !== -1) {
              cartItems.splice(index, 1);
            }
          },
          getCartItems:function () {
            return cartItems;
          },
          checkout: function (items) {
            // Post to server side for actual checkout with $http
            return $q.when(true);
          }
        };
    }]);
