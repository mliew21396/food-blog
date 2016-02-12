angular.module('corners').controller('CornersController', ['$scope', 'Authentication','Posts',
  function($scope, Authentication, Posts) {
    $scope.authentication = Authentication;

    $scope.find = function() {
      $scope.posts = Posts.query();
    };
  }
]);