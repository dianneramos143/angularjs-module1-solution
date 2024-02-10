(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController ($scope) {
    $scope.entries = "What do you usually eat for lunch?";
    $scope.sayMessage = "Please enter data";
    
    $scope.checkEntries = function() {
        var lunchCount = $scope.entries.split(",");
       
        if ($scope.entries=="") {
            $scope.sayMessage = "Please enter data first.";
        } else {
            if (lunchCount.length<=3) {
                $scope.sayMessage = "Enjoy!";
            } else {
                $scope.sayMessage = "Too much!";
            }
        }
    };
}

})();