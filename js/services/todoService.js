(function() {
  'use strict'

  angular.module('CalcTodo')
  .service('TodoService', TodoService)

  TodoService.$inject = [

  ]

  function TodoService () {
    this.message = 'todo from service'
  }

}())
