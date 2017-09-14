(function() {
    'use strict';

    class MyFormController {
        constructor(consoleService){
            this.req = {
                consoleService
            }
            this.firstField = null;
	        this.secondField = null;
        }

	    sendToConsole(){
            this.req.consoleService.send(
                    this.firstFieldText + ":    " + this.firstField + "\n" + 
                    this.secondFieldText + ": "   + this.secondField + "\n\n");
            this.firstField = this.secondField = null;
        }
    }

    angular
        .module('app')
        .controller('myFormController', MyFormController);
})();