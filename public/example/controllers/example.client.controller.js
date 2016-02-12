angular.module('example').controller('ExampleController', ['$scope', 'Authentication','Posts',
	function($scope, Authentication, Posts) {
		$scope.authentication = Authentication;

    $scope.find = function() {
      $scope.posts = Posts.query();
    };
	}
]);