(function () {
    'use strict';

    class hashCode{
        constructor(){}

        generate(input){
            let hash = 0, i = 0, len = input.length;
            while ( i < len ) {
                hash  = ((hash << 5) - hash + input.charCodeAt(i++)) << 0;
            }
            return hash;  
        }
    }

    angular.module('app.calendar').service('hashCode', hashCode);
})();
