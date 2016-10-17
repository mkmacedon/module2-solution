(function(){
'use-strict'

var app = angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyController', ToBuyController);
app.controller('AlreadyBoughtController', AlreadyBoughtController);
app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var buyCtrl = this;

	buyCtrl.items = ShoppingListCheckOffService.getAvailableItems();

	buyCtrl.buy = function(itemIndex) {
		ShoppingListCheckOffService.buy(itemIndex);
	};
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var boughtCtrl = this;

	boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
};


function ShoppingListCheckOffService() {
	var service = this;

	var tobuy = [{
		name: 'Coke',
		quantity: 10
	},{
		name: 'Wiskey',
		quantity: 3
	},{
		name: 'Absinth',
		quantity: 2
	},{
		name: 'Beer',
		quantity: 10
	},{
		name: 'Vodka',
		quantity: 4
	},{
		name: 'Rakija',
		quantity: 7
	},{
		name: 'Mastika',
		quantity: 10
	}];

	var bought = [];

	service.getAvailableItems = function() {
		return tobuy;
	};

	service.getBoughtItems = function() {
		return bought;
	};

	service.buy = function(itemIndex) {
		var item = tobuy[itemIndex];
		bought.push(item);
		tobuy.splice(itemIndex, 1);
	};
};


})();