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

    // Functions
    ctrl.addPrintOrderToCart = function addPrintOrderToCart() {
      // Probably validate item before adding it to the cart

      // Finish initializing the item to add
      ctrl.print.title = ctrl.print.file.name;
      pricingService.calcualtePrintPrice(print).then(function(unitPrice) {
        ctrl.print.price = unitPrice;

        // Adding the item to the cart and navigating to it
        cartService.addCartItem(ctrl.print);
        $location.path('#!/cart');
      });
    };

    // Watchers
    $scope.$watch(function() { return ctrl.print.file; }, function (newVal) {
      // Watch for changes to the file input
      if (newVal !== null) {

        // Validating the 3d model in the server
        printService.validateModel(ctrl.print.file).then(function(result) {
          if (result) {
            // Model is valid and we allow selection of materials
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
      // Watching selection of material
      if (newVal !== null) {

        // Getting the availalble colors for selection from server (probably depending on material)
        printService.getAvailableColors().then(function(colors) {
          ctrl.availableColors = colors;
        });
      }
    });

    init();
  }]
});
