angular.module('starter').factory('PizzeriaRestService', function (apiUrl, $resource) {
    return $resource(apiUrl + 'pizzerias/:pizzeriaId', { submissionId: '@PizzeriaId' },
    {
        'update': {
            method: 'PUT'
        }
    });

});