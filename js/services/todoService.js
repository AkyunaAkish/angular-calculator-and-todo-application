(function() {
  'use strict'

  angular.module('CalcTodo')
  .service('TodoService', TodoService)

  TodoService.$inject = [

  ]

  function TodoService () {
    var _todos = []

    this.guidGenerator = function() {
      var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      }
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
    }

    this.getTodos = function() {
      return [].concat(_todos)
    }

    this.addTodo = function(todo) {
      _todos.push({todo: todo, id: this.guidGenerator()})
    }

    this.deleteTodo = function(todo) {
      _todos = _todos.filter(function(currentTodo) {
        return currentTodo.id !== todo.id
      })
    }

  }

}())
