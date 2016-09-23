(function() {
  'use strict'

  angular.module('CalcTodo')
  .config(calcTodoRoutes)

  calcTodoRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ]

  function calcTodoRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('math', {
      url: "/",
      template: "<math-directive></math-directive>"
    })
    .state('todos', {
      url: "/todos",
      template: "<todo-directive></todo-directive>"
    })

    $urlRouterProvider.otherwise("/")
  }

}())
