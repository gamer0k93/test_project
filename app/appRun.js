(function () {
    'use strict';

    function run(localStorageService, defaultEvents, Notification) {
    	/**
    	 * Check if default events were loaded to local storge
    	 */
    	if(! localStorageService.isSupported) {
            Notification.error("Local storage is not supported by your browser");
        }else{
        	if (! localStorageService.get("events")){
            	localStorageService.set("events", defaultEvents.events);
                Notification.success("Default events were added to the app");
            }
        }
    }

    angular
        .module('app')
        .run(run)
})();
