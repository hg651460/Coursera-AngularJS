(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController )
  .controller('AlreadyBoughtController', AlreadyBoughtController )
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuy = this;
    itemBuy.items = ShoppingListCheckOffService.getItems();

    itemBuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

    AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var itemBought = this;
      itemBought.bought = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
      var service = this;
      var bought = [];
      // List of shopping items
      var items = [    {
            name: "Milk",
            quantity: "2"
          },
          {
            name: "Donuts",
            quantity: "200"
          },
          {
            name: "Cookies",
            quantity: "300"
          },
          {
            name: "Chocolate",
            quantity: "5"
          },
          {
            name: "Eggs",
            quantity: "3 dozen"

          }
        ];

      service.addItem = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        bought.push(item);
      };

      service.removeItem = function (itemIdex) {
        var newN = items[itemIdex].name;
          var newQ = items[itemIdex].quantity;
          var newItem = {
            name: newN,
            quantity: newQ
          };
          bought.push(newItem);

        items.splice(itemIdex, 1);
      };

      service.getItems = function () {
        return items;
      };

      service.getBoughtItems = function () {
        return bought;
      };
    }

})();
