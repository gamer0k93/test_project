(function() {
    'use strict';

    class SecondSubpageController {
        constructor() {
            this.mainImageURL    = "http://elitefon.ru/large/201211/18519.jpg";
            this.reserveImageURL = "http://elitefon.ru/large/201211/18516.jpg";
        }
    }

    angular
        .module('app.homePage.secondSubpage')
        .controller('secondSubpageController', SecondSubpageController);
})();