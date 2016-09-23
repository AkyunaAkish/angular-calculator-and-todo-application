(function() {
  'use strict'

  angular.module('CalcTodo')
  .service('MathService', MathService)

  MathService.$inject = [

  ]

  function MathService () {
    this.calculate = function(numberOne, numberTwo, operator) {
      switch (operator) {
        case '*':
        return numberOne * numberTwo
        break
        case '/':
        return numberOne / numberTwo
        break
        case '+':
        return numberOne + numberTwo
        break
        case '-':
        return numberOne - numberTwo
        break
      }
    }
  }

}())
