(function () {
    'use strict';

    function myNumber(){
        var number = Math.floor(Math.random() * 100);
        var getNumber = ()=>{
            return number;
        }
        var numberIncrement = ()=>{
            return ++number;
        }
        var numberDecrement = ()=>{
            return --number;
        }

        return{
            get:       getNumber,
            increment: numberIncrement,
            decrement: numberDecrement
        }
    }

    angular.module('app').factory('myNumber', myNumber);
})();
