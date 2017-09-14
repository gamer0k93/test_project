(function () {
    'use strict';

    const myForm = {
        templateUrl: '/app/components/shared/components/myForm/myForm.html',
        controller: 'myFormController',
        controllerAs: 'myFormCtrl',
        bindings: {
            firstFieldText: '@',
            secondFieldText: '@',
            submitBtnText: '@'
        }
    }


    angular
        .module('app')
        .component('myForm', myForm);

})();
