'use strict';

angular.module('mckinseyApp')
	.controller('MainCtrl', ['$scope', 'itemsService', 'purchaseServices','coinsService', function($scope, itemsService, purchaseServices,coinsService) {

		$scope.items =  itemsService.get();
		$scope.totalItems = purchaseServices.length();
		
		$scope.coins = coinsService.getCoins();
		$scope.bills = coinsService.getBills();

		$scope.credits = 0;
		$scope.openedCart = false;
		$scope.openedCredit = false;

		$scope.addCredits = function(add){
			$scope.credits += add;
		};
		
		$scope.open = function(section){
			if (section === 'credits') {
				if($scope.openedCart){
					$scope.showCart();
					$scope.showCredits();
				}
				else{
					$scope.showCredits();
				}
			}
		};

		$scope.showCart = function(){
			$scope.purchases = purchaseServices.get();
			if (!(document.getElementById('cart-list').classList.contains('opened'))) {
				document.getElementById('cart-list').classList.toggle('opened');
				$scope.openedCard = true;
			}
			else{
				document.getElementById('cart-list').classList.toggle('opened');
				$scope.openedCard = false;
			}
		};
		$scope.showCredits = function(){
			
			if (!(document.getElementById('credits').classList.contains('opened'))) {
				document.getElementById('credits').classList.toggle('opened');
				$scope.openedCredit = true;
			}
			else{
				document.getElementById('credits').classList.toggle('opened');
				$scope.openedCredit = false;
			}
		};
		$scope.substractCredits = function(subs,name,img){
			if (($scope.credits>0) && ($scope.credits - subs)>=0) {
				$scope.addItem(name,subs,img);
				$scope.credits -= subs;
			}
			else{
				window.alert('Please insert Credits');
			}
		};
		$scope.processPayment = function(){
			window.alert( ' Thank you for your purchase \n\n Your exchange: $'+$scope.credits);
			$scope.credits = 0;
			$scope.totalItems = 0;
			purchaseServices.clear();
		};

		$scope.addItem = function(itemName,itemPrice,urlImg) {
			var newItem = {
				name: itemName,
				price: itemPrice,
				urlImage: urlImg,
			};

			purchaseServices.push(newItem);
			$scope.totalItems = purchaseServices.length();
		};
	}]
);



