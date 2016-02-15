angular.module('example').controller('ExampleController', ['$scope', 'Authentication','Posts', '$http', 'Example',
	function($scope, Authentication, Posts, $http, Example) {
		$scope.authentication = Authentication;

        $scope.find = function() {
          $scope.posts = Posts.query();
        };

        $scope.likeClick = function (post) {
          if (!post.liked) {

            post.liked = true;

            post.likes += 1;

            Example.updateLink(post).success(function(result) {});
          };
        };

	}
]);