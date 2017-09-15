angular.module('cartApp').component('print', {
  templateUrl: 'print/templates/print.view.html',
  controller: ['$scope', '$location', 'cartService', 'printService', 'pricingService', function($scope, $location, cartService, printService, pricingService) {
    var ctrl = this;

    // Initiation function
    function init() {

      // Initializing variables
      ctrl.isValidModel = false;
      ctrl.availableMaterials = [];
      ctrl.availableColors = [];
      ctrl.print = {
        file: null,
        title: null,
        material: null,
        color: null,
        price: null,
        quantity: 1
      };
    }

    ctrl.addPrintOrderToCart = function addPrintOrderToCart() {
      // Validate some more

      ctrl.print.title = ctrl.print.file.name;
      pricingService.calcualtePrintPrice(print).then(function(unitPrice) {
        ctrl.print.price = unitPrice;
        cartService.addCartItem(ctrl.print);
        $location.path('#!/cart');
      });
    };

    // Watchers
    $scope.$watch(function() { return ctrl.print.file; }, function (newVal, oldVal) {
      if (newVal !== null) {

        printService.validateModel(ctrl.print.file).then(function(result) {
          if (result) {
            return printService.getAvailableMaterials().then(function (materials) {
              ctrl.isValidModel = true;
              ctrl.availableMaterials = materials;
            });
          } else {
            alert('Invalid model file');
          }
        });
      }
    });

    $scope.$watch(function() { return ctrl.print.material; }, function (newVal, oldVal) {
      if (newVal !== null) {

        printService.getAvailableColors().then(function(colors) {
          ctrl.availableColors = colors;
        });
      }
    });

    init();
  }]
});
