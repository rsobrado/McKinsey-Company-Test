'use strict';

/**
 * @ngdoc service
 * @name mckinseyApp.itemsController
 * @description
 * # itemsController
 * Service in the mckinseyApp.
 */
angular.module('mckinseyApp')
	.factory('itemsService', function() {
		var items = [
			{
				'name' : 'Bolsa con Pajilla',
				'price' : '1.5',
				'urlImage' : 'images/products/coca-cola.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
			{
				'name' : 'Mani Barbacoa',
				'price' : '1.8',
				'urlImage' : 'images/products/mani-pro.png'
			},
			{
				'name' : 'Platanos Tostados',
				'price' : '2.3',
				'urlImage' : 'images/products/platanos-pro.png'
			},
			{
				'name' : 'Arizona Iced Tea',
				'price' : '2.3',
				'urlImage' : 'images/products/arizona-tea.png'
			},
			{
				'name' : 'Doritos - Salsa Verde',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-verde.png'
			},
			{
				'name' : 'Bolsa con Pajilla',
				'price' : '1.5',
				'urlImage' : 'images/products/coca-cola.png'
			},
			{
				'name' : 'Doritos - Ranch',
				'price' : '1.2',
				'urlImage' : 'images/products/doritos-ranch.png'
			},
		];

		return {

			push: function(item) {
				items.push(item);
			},

			get: function() {
				return items;
			}
		};

	});
