'use strict';

/**
 * @ngdoc function
 * @name mckinseyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mckinseyApp
 */
angular.module('mckinseyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
