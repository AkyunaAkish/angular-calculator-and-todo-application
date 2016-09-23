(function() {
  'use strict'

  angular.module('CalcTodo')
  .controller('TodoController', TodoController)

  TodoController.$inject = [
    '$scope',
    'TodoService'
  ]

  function TodoController ($scope,TodoService) {
    $scope.message = TodoService.message
  }

}())
