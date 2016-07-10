angular.module('starter.controllers' [])

.controller('PizzeriaCtrl', function($scope, $state, $window) {
 
    function activate() {
        $scope.pizzerias = PizzeriaRestService.query();
    }

activate();

});