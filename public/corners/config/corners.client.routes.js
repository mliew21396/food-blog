angular.module('corners').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/corners/selection', {
      templateUrl: 'corners/views/selection.client.view.html'
    }).
    when('/corners/general', {
      templateUrl: 'corners/views/general.client.view.html'
    }).
    when('/corners/steph', {
      templateUrl: 'corners/views/steph.client.view.html'
    }).
    when('/corners/mat', {
      templateUrl: 'corners/views/mat.client.view.html'
    }).
    when('/corners/budge', {
      templateUrl: 'corners/views/budge.client.view.html'
    });
  }
]);