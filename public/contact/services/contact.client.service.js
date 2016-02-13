angular.module('contact').factory('Contact', ['$http', 'toastr',
  function($http, toastr) {
    return {
      sendData: function(contactData){
        return $http.post('/contact-form', contactData).
            success(function(data, status, headers, config) {
              toastr.success('Thanks for your message ' + contactData.name + '!');
            }).
            error(function(data, status, headers, config) {
              toastr.error('Sorry your message did not go through. Please contact us at sbm.food.blog@gmail.com!');
            });
      }
    }
  }
]);