angular.module('starter.controllers', [])

.controller('PizzeriaCtrl', function($scope, $state, $window, PizzeriaRestService) {
 
    function activate() {
        $scope.pizzerias = PizzeriaRestService.query();
    }

activate();

});