(function() {
  'use strict'

  angular.module('CalcTodo')
  .controller('MathController', MathController)

  MathController.$inject = [
    '$scope',
    'MathService'
  ]

  function MathController ($scope, MathService) {
    $scope.calculate = function() {
      if ($scope.numberOne && $scope.numberTwo && $scope.operator) {
        $scope.answer = MathService.calculate($scope.numberOne, $scope.numberTwo, $scope.operator)
      } else {
        alert('Please finish filling in the form before attempting to calculate')
      }
    }
  }

}())
