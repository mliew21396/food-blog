angular.module('posts').controller('PostsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Posts',
	function($scope, $routeParams, $location, Authentication, Posts) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var post = new Posts({
				title: this.title,
				comment: this.htmlVariable
			});

			post.$save(function(response) {
				$location.path('posts/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.posts = Posts.query();
		};

		$scope.findOne = function() {
			$scope.post = Posts.get({
				postId: $routeParams.postId
			});
		};

		$scope.update = function() {
			$scope.post.$update(function() {
				$location.path('posts/' + $scope.post._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(post) {
			if (post) {
				post.$remove(function() {
					for (var i in $scope.posts) {
						if ($scope.posts[i] === post) {
							$scope.posts.splice(i, 1);
						}
					}
				});
			} else {
				$scope.post.$remove(function() {
					$location.path('posts');
				});
			}
		};
	}
]);