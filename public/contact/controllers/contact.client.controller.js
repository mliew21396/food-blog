angular.module('contact').controller('ContactController', ['$scope', '$http',
  function($scope, $http) {

    this.sendMail = function () {

        var contactData = ({
            name : this.contactName,
            msg : this.contactMsg
        });

        ajaxService.sendData(contactData).success(function(result) {})

    };
  }
]);