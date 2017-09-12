(function () {
    'use strict';

    class DateHelper{
        constructor(){}
        
        getDaysInMonth(year, month){
            /**
             *  month + 1 as Date.getMonth() method is 0-based 
             */
            return new Date(year, month + 1, 0).getDate();    
        }
        
        getStartOfTheWeek(year, week, day) {
            let startOfTheWeek = (1 + (week - 1) * 7); // 1st of January + 7 days for each week
            return new Date(year, 0, startOfTheWeek);
        }

    }

    angular.module('app.calendar').service('DateHelper', DateHelper);
})();
