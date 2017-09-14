(function () {
    'use strict';

    class ConsoleService{
        constructor(){}
        
        send(str){
            if(str)
                console.log(str); 
        }
    }

    angular.module('app').service('consoleService', ConsoleService);
})();
