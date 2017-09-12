(function() {
    'use strict';

    class monthViewController {
        constructor($scope, $state, $rootScope, $timeout, DateHelper, $stateParams, localStorageService, _const) {
            this.req = {
                $scope,
                $state,
                $rootScope,
                $timeout,
                DateHelper,
                $stateParams,
                _const,
                localStorageService
            };
            this.calendarData = null;
            this.tempDate = this.req.$stateParams.date ? new Date(this.req.$stateParams.date.year, this.req.$stateParams.date.month) : new Date();
            this.eventsSource = this.req.localStorageService.get("events");
            this.collectMonthData(this.tempDate);
            this.req.$rootScope.$on("updateView", () => {
                this.eventsSource = this.req.localStorageService.get("events");
                this.collectMonthData(this.tempDate);
            });
        }

        updateView() {
            this.req.$timeout(() => {
                this.req.$scope.$apply();
            })
        }

        collectMonthData(date) {
            this.calendarData = {
                days: []
            };
            let activeDate = {
                day: date.getDay(),
                month: date.getMonth(),
                year: date.getFullYear()
            }
            let daysInMonth = this.req.DateHelper.getDaysInMonth(activeDate.year, activeDate.month);
            /**
             * Accordnig to the first day in month
             */
            let firstDayOfTheMonth = new Date(activeDate.year, activeDate.month, 1).getDay();
            let monthStartOffset = (firstDayOfTheMonth == 0) ? 6 : firstDayOfTheMonth - 1;
            for (let i = 0; i < monthStartOffset; i++) {
                this.calendarData.days.push({
                    disabled: true
                });
            }
            for (let day = 1; day <= daysInMonth; day++) {
                let dayData = new Date(activeDate.year, activeDate.month, day);
                let dayObj = {
                    day: dayData.getDay(),
                    date: dayData.getDate(),
                    events: []
                }
                /**
                 * Check related events
                 */
                let dayId = dayData.getTime();
                if (this.eventsSource[dayId]) {
                    /**
                     * Converts object to array for easier using with ng-repeat directive
                     */
                    dayObj.events = Object.keys(this.eventsSource[dayId]).map(key => {
                        return key
                    });
                }
                this.calendarData.days.push(dayObj);
            }
            while (this.calendarData.days.length % 7 != 0) {
                this.calendarData.days.push({
                    disabled: true
                });
            }
            this.updateView();
        }

        incrementMonth() {
            let newDate = new Date(this.tempDate.setMonth(this.tempDate.getMonth() + 1));
            this.collectMonthData(newDate);
        }

        decrementMonth() {
            let newDate = new Date(this.tempDate.setMonth(this.tempDate.getMonth() - 1));
            this.collectMonthData(newDate);
        }
    }

    angular
        .module('app.calendar.monthView')
        .controller('monthViewController', monthViewController);
})();