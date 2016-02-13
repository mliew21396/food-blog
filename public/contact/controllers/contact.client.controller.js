angular.module('contact').controller('ContactController', ['$scope', '$http', 'toastr',
  function($scope, $http, toastr) {

    this.sendMail = function () {

        var contactData = ({
            name : this.contactName,
            msg : this.contactMsg
        });

        $http.post('/contact-form', contactData).
            success(function(data, status, headers, config) {
              toastr.success('Thanks for your message ' + contactData.name + '!');
            }).
            error(function(data, status, headers, config) {
              toastr.error('Sorry your message did not go through. Please contact us at sbm.food.blog@gmail.com!');
            });

    };
  }
]);