(function() {
    'use strict';

    class FirstSubpageController {
        constructor(myNumber) {
            this.myNumber = myNumber;
        }
        getNumber(){
            return this.myNumber.get();
        }
        incrementNumber(){
            this.myNumber.increment();
        }
        decrementNumber(){
            this.myNumber.decrement();
        }
    }

    angular
        .module('app.homePage.firstSubpage')
        .controller('firstSubpageController', FirstSubpageController);
})();