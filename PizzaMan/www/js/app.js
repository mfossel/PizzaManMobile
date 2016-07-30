angular.module('pizza', ['ionic', 'pizza.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.value('apiUrl', 'http://pizzamanapi.azurewebsites.net/api/');

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    },

    .state('pizzeria', {
      url: '/pizzera',
      templateUrl: 'templates/pizzeria.html',
      controller: 'PizzeriaCtrl'
    }

    );

  $urlRouterProvider.otherwise("/home");

})
