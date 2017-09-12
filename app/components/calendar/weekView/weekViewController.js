(function() {
    'use strict';

    class weekViewController {
        constructor($rootScope, $scope, $timeout, DateHelper, $stateParams, _const, $filter, localStorageService) {
            this.req = {
                $rootScope,
                $scope,
                $timeout,
                DateHelper,
                $stateParams,
                _const,
                $filter,
                localStorageService
            };
            this.calendarData = null;
            this.tempDate = this.req.$stateParams.date ? new Date(this.req.$stateParams.date.year, this.req.$stateParams.date.month, this.req.$stateParams.date.date) : new Date();
            this.eventsSource = this.req.localStorageService.get("events");
            this.collectWeekData(this.tempDate);
            this.req.$rootScope.$on("updateView", () => {
                this.eventsSource = this.req.localStorageService.get("events");
                this.collectWeekData(this.tempDate);
            });
        }

        updateView() {
            this.req.$timeout(() => {
                this.req.$scope.$apply();
            })
        }

        collectWeekData(date) {
            this.calendarData = {
                days: []
            };
            let activeDate = {
                day: date.getDay(),
                date: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            }
            let weekNumber = this.req.$filter('date')(new Date(activeDate.year, activeDate.month, activeDate.date), 'ww');
            let startOfTheWeek = this.req.DateHelper.getStartOfTheWeek(activeDate.year, weekNumber, activeDate.day);
            // TODO FIX months starting from NOT SUNDAY (2018 july)

            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
                let day = new Date(startOfTheWeek.setDate(startOfTheWeek.getDate() + 1));
                let dayObj = {
                    day: day.getDay(),
                    date: day.getDate(),
                    month: day.getMonth(),
                    events: []
                }
                /**
                 * Check related events
                 */
                let dayId = day.getTime();
                if (this.eventsSource[dayId]) {
                    dayObj.events = Object.keys(this.eventsSource[dayId]).map(key => {
                        return this.eventsSource[dayId][key]
                    });
                    console.log(dayObj.events);
                }
                this.calendarData.days.push(dayObj);
            }

            this.updateView();
        }

        incrementWeek() {
            let newDate = new Date(this.tempDate.setDate(this.tempDate.getDate() + 7));
            this.collectWeekData(newDate);
        }

        decrementWeek() {
            let newDate = new Date(this.tempDate.setDate(this.tempDate.getDate() - 7));
            this.collectWeekData(newDate);
        }

        editEvent(event) {
            let evenToUpdate = angular.copy(event);
            this.req.$rootScope.$broadcast("editEvent", {
                event: evenToUpdate
            });
        }

        removeEvent(event) {
            this.req.$rootScope.$broadcast("removeEvent", {
                event
            });
        }
    }

    angular
        .module('app.calendar.weekView')
        .controller('weekViewController', weekViewController);
})();