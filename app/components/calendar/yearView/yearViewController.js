(function() {
    'use strict';

    class yearViewController {
        constructor($scope, $rootScope, $stateParams, $timeout, DateHelper, _const, localStorageService) {
            this.req = {
                $scope,
                $rootScope,
                $stateParams,
                $timeout,
                DateHelper,
                _const,
                localStorageService
            };
            this.calendarData = null;
            this.tempDate = this.req.$stateParams.date ? new Date(this.req.$stateParams.date.year, 0) : new Date();
            this.eventsSource = this.req.localStorageService.get("events");
            this.collectYearData(this.tempDate);
            this.req.$rootScope.$on("updateView", () => {
                this.eventsSource = this.req.localStorageService.get("events");
                this.collectYearData(this.tempDate);
            });
        }

        updateView() {
            this.req.$timeout(() => {
                this.req.$scope.$apply();
            })
        }

        collectYearData(date) {
            this.calendarData = {};
            for (let month = 0; month < 12; month++) {
                this.calendarData[month] = [];

                let activeDate = {
                    day: date.getDate(),
                    month: month,
                    year: date.getFullYear()
                }
                let daysInMonth = this.req.DateHelper.getDaysInMonth(activeDate.year, activeDate.month);
                /**
                 * Accordnig to the first day in month
                 */
                let firstDayOfTheMonth = new Date(activeDate.year, activeDate.month, 1).getDay();
                let monthStartOffset = (firstDayOfTheMonth == 0) ? 6 : firstDayOfTheMonth - 1;
                for (let i = 0; i < monthStartOffset; i++) {
                    this.calendarData[month].push({
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
                        dayObj.events = Object.keys(this.eventsSource[dayId]).map(key => {
                            return key
                        });
                    }
                    this.calendarData[month].push(dayObj);
                }
                while (this.calendarData[month].length % 7 != 0) {
                    this.calendarData[month].push({
                        disabled: true
                    });
                }
            }
            this.updateView();
        }

        incrementYear() {
            let newDate = new Date(this.tempDate.setFullYear(this.tempDate.getFullYear() + 1));
            this.collectYearData(newDate);
        }

        decrementYear() {
            let newDate = new Date(this.tempDate.setFullYear(this.tempDate.getFullYear() - 1));
            this.collectYearData(newDate);
        }
    }

    angular
        .module('app.calendar.yearView')
        .controller('yearViewController', yearViewController);
})();