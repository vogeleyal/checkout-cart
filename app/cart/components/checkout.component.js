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

    // Functions
    ctrl.calculateTotalPrice = function calculateTotalPrice() {

       // Iterating over items in cart and calculating the total price for the cart
      var totalPrice = 0;
      for (var i = 0; i < ctrl.items.length; i++) {
        var item = ctrl.items[i];

        totalPrice += item.price * item.quantity;
      }

      return totalPrice;
    };

    ctrl.removeItem = function removeItem(item) {

      // Calling service method to remove the item
      cartService.removeCartItem(item);
    };

    ctrl.checkout = function checkout() {

      // Calling server to perform checkout and displaying a message upun success
      cartService.checkout(ctrl.items).then(function(result) {
        if (result) {
          alert('Your order has been placed! Thank you!');
        }
      });
    };

    init();
  }]
});
