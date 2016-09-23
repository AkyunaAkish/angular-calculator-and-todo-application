(function() {
  'use strict'

  angular.module('CalcTodo')
  .directive('mathDirective', mathDirective)

  function mathDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/mathTemplate.html',
      controller: 'MathController'
    }
  }

}())
