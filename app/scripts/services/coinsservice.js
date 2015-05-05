'use strict';

/**
 * @ngdoc service
 * @name mckinseyApp.coinsService
 * @description
 * # coinsService
 * Factory in the mckinseyApp.
 */
angular.module('mckinseyApp')
  .factory('coinsService', function () {
    // Service logic
    // ...

    var coins = [
      {
              'urlImage' : '../images/coins/coin-1.png',
              'name' : 'one cent',
              'value' : 0.010
            },
            {
              'urlImage' : '../images/coins/coin-5.png',
              'name' : 'five cents',
              'value' : 0.050
            },
            {
              'urlImage' : '../images/coins/coin-10.png',
              'name' : 'ten cents',
              'value' : 0.10
            },
            {
              'urlImage' : '../images/coins/coin-25.png',
              'name' : 'quarter',
              'value' : 0.25
            },
    ];

    var bills = [
      {
        'urlImage' : '../images/coins/bill-1.png',
        'name' : '../images/coins/bill-1.png',
        'value' : 1
      },
      {
        'urlImage' : '../images/coins/bill-5.png',
        'name' : 'five dollars',
        'value' : 5
      },
      {
        'urlImage' : 'images/coins/bill-10.png',
        'name' : 'ten dollars',
        'value' : 10
      },
    ];

    return {
      getCoins: function() {
        return coins;
      },
      getBills: function() {
        return bills;
      },
    };

  });
