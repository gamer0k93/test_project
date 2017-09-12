(function() {
    'use strict';

    class calendarController {
        constructor($rootScope, $scope, $timeout, localStorageService, hashCode, Notification) {
            this.req = {
                $rootScope,
                $scope,
                $timeout,
                localStorageService,
                hashCode,
                Notification
            };
            this.eventToAdd = {};
            this.eventToUpdate = null;
            this.tempDate = new Date();
            /**
             * Setting up listeners for events from nested states
             */
            this.req.$rootScope.$on("editEvent", (event, args) => {
                this.eventToUpdate = args.event;
            });
            this.req.$rootScope.$on("removeEvent", (event, args) => {
                this.removeEvent(args.event);
            });
        }

        createEvent() {
            let events = this.req.localStorageService.get("events");
            /**
             * Generating event ID based on event title
             */
            let eventToAddSelectedDate = new Date(this.eventToAdd.date);
            let eventDate = new Date(eventToAddSelectedDate.getFullYear(), eventToAddSelectedDate.getMonth(), eventToAddSelectedDate.getDate()).getTime();
            this.eventToAdd.date = eventDate;
            let eventID = this.req.hashCode.generate(this.eventToAdd.title);
            this.eventToAdd.ID = eventID
            if (!events[eventDate]) {
                events[eventDate] = {};
            }
            events[eventDate][eventID] = this.eventToAdd;
            this.req.localStorageService.set("events", events);
            this.eventToAdd = {};
            this.forceUpdatingView();
            this.req.Notification.success('Event was created');
        }

        updateEvent() {
            let events = this.req.localStorageService.get("events");
            events[this.eventToUpdate.date][this.eventToUpdate.ID] = this.eventToUpdate;
            this.req.localStorageService.set("events", events);
            this.eventToUpdate = null;
            this.forceUpdatingView();
            this.req.Notification.success('Event was updated');
        }

        removeEvent(event) {
            let events = this.req.localStorageService.get("events");
            delete events[event.date][event.ID];
            this.req.localStorageService.set("events", events);
            this.forceUpdatingView();
            this.req.Notification.success('Event was removed');
        }

        forceUpdatingView() {
            this.req.$rootScope.$emit("updateView");
        }
    }

    angular
        .module('app.calendar')
        .controller('calendarController', calendarController);
})();