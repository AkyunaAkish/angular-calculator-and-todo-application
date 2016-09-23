(function() {
  'use strict'

  angular.module('CalcTodo')
  .controller('TodoController', TodoController)

  TodoController.$inject = [
    '$scope',
    'TodoService'
  ]

  function TodoController ($scope,TodoService) {
    $scope.todos = TodoService.getTodos()

    $scope.$watch(function(){
      return TodoService.getTodos()
    }, function (newState) {
      $scope.todos = TodoService.getTodos()
    }, true)

    $scope.addTodo = function() {
      TodoService.addTodo($scope.todo)
      $scope.todo = null
    }

    $scope.deleteTodo = function(todo) {
      TodoService.deleteTodo(todo)
    }

  }

}())
