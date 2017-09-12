(function () {
    'use strict';
    
    const _const = {
    	daysShortcuts: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
       	monthsNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    angular.module('app').constant('_const', _const);
})();
