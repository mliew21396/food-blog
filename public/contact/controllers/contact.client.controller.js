angular.module('contact').controller('ContactController', ['$scope', '$http', 'Contact',
  function($scope, $http, Contact) {

    this.sendMail = function () {

      $scope.isDisabled = true;

      var contactData = ({
          name : this.contactName,
          msg : this.contactMsg
      });

      Contact.sendData(contactData).success(function(result) {})

    };
  }
]);