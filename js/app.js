(function() {
  angular
    .module("toBuyList", [])
    .controller("ToBuyController", ToBuyController)
    .controller("BoughtController", BoughtController)
    .service("handleListService", handleListService);
  ToBuyController.$inject = ["handleListService"];
  BoughtController.$inject = ["handleListService"];
  function ToBuyController(handleList) {
    var vm = this;
    vm.items = [];
    vm.items = handleList.showToBuyItems();
    vm.bought = function(index) {
      handleList.bought(index);
    };
  }
  function BoughtController(handleList) {
    var vm = this;
    vm.items = handleList.showBoughtItems();
  }
  function handleListService() {
    var service = this;
    service.toBuyItems = [
      { name: "bags of Coffe", quantity: 10 },
      { name: "bottle of  milk", quantity: 10 },
      { name: "bottles of water ", quantity: 10 },
      { name: "box of sugar", quantity: 10 },
      { name: "bags  of cookies", quantity: 10 }
    ];
    service.boughtItems = [];
    service.bought = function(index) {
      service.boughtItems.push(service.toBuyItems[index]);
      service.toBuyItems.splice(index, 1);
    };
    service.showToBuyItems = function() {
      return service.toBuyItems;
    };
    service.showBoughtItems = function() {
      return service.boughtItems;
    };
  }
})();
