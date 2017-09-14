(function () {
    'use strict';

    function reserveSrc(){
        return {
            link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.reserveSrc) {
                attrs.$set('src', attrs.reserveSrc);
                }
            });
            }
        }
    }
    angular.module('app').directive('reserveSrc', reserveSrc );

})();
