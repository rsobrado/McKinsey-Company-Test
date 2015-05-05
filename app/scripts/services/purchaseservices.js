'use strict';

/**
 * @ngdoc service
 * @name mckinseyApp.purchaseServices
 * @description
 * # purchaseServices
 * Factory in the mckinseyApp.
 */
angular.module('mckinseyApp')
	.factory('purchaseServices', function () {
		var purchases = [

		];

		return {
			push: function(item) {
				purchases.push(item);
			},
			get: function() {
				return purchases;
			},
			clear: function(){
				purchases = [

				];
				console.log(purchases);
			},
			length: function(){
				return purchases.length;
			}
		};
});
