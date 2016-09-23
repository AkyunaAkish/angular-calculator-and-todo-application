(function() {
  'use strict'

  angular.module('CalcTodo')
  .directive('todoDirective', todoDirective)

  function todoDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/todoTemplate.html',
      controller: 'TodoController'
    }
  }

}())
