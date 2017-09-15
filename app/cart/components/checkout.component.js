angular.module('cartApp').component('checkout', {
  templateUrl: 'cart/templates/checkout.view.html',
  controller: ['$scope', 'cartService', function($scope, cartService) {
    var ctrl = this;

    // Initiation function
    function init() {

      // Initializing variables
      ctrl.items = cartService.getCartItems();
      ctrl.calculateTotalPrice();
    }

    ctrl.calculateTotalPrice = function calculateTotalPrice() {
      var totalPrice = 0;
      for (var i = 0; i < ctrl.items.length; i++) {
        var item = ctrl.items[i];

        totalPrice += item.price * item.quantity;
      }

      return totalPrice;
    };

    ctrl.removeItem = function removeItem(item) {
      cartService.removeCartItem(item);
    };

    ctrl.checkout = function checkout() {
      cartService.checkout(ctrl.items).then(function(result) {
        if (result) {
          alert('Your order has been placed! Thank you!');
        }
      });
    };

    init();
  }]
});
