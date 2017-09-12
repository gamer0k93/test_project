(function () {
    'use strict';

    class defaultEvents{
        constructor(){
            this._events = {
                 "1496350800000": {
                    "1":  {
                        "date": "1496350800000",
                        "ID": "1",
                        "title": "Event 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "14:25",
                        "endTime": "16:50"
                    },
                    "2":  {
                       "date": "1496350800000",
                        "ID": "2",
                        "title": "Event 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "10:50",
                        "endTime": "16:50"
                    },
                    "3": {
                        "date": "1496350800000",
                        "ID": "3",
                        "title": "Event 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "17:00",
                        "endTime": "17:25"
                    }   
                 },
                 "1497214800000": {
                    "4":  {
                        "date": "1497214800000",
                        "ID": "4",
                        "title": "Event 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "14:25",
                        "endTime": "16:50"
                    },
                    "5":  {
                       "date": "1497214800000",
                        "ID": "5",
                        "title": "Event 5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "10:50",
                        "endTime": "16:50"
                    },
                    "6": {
                        "date": "1497214800000",
                        "ID": "6",
                        "title": "Event 6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "17:00",
                        "endTime": "17:25"
                    }   
                 },
                 "1498078800000": {
                    "7":  {
                        "date": "1498078800000",
                        "ID": "7",
                        "title": "Event 7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "14:25",
                        "endTime": "16:50"
                    },
                    "8":  {
                       "date": "1498078800000",
                        "ID": "8",
                        "title": "Event 8. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi possimus eos veniam, inventore laudantium consequatur porro obcaecati? Facere amet ratione voluptas odio laudantium incidunt aliquam nostrum, repellat fugiat in.",
                        "startTime": "10:50",
                        "endTime": "16:50"
                    }
                 }
            }
        }

        get events(){
            return this._events;
        }

    }

    angular.module('app.calendar').service('defaultEvents', defaultEvents);
})();
