angular.module('contact').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/contact', {
      templateUrl: 'contact/views/contact.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);