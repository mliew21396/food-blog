angular.module('example').controller('ExampleController', ['$scope', 'Authentication','Posts','$location',
	function($scope, Authentication, Posts, Example, $location) {
		$scope.authentication = Authentication;

    $scope.find = function() {
      $scope.posts = Posts.query();
    };

    // $scope.liked = false;
    // // var hasLiked = false;
    // $scope.likeClick = function (post) {
    //   if (!$scope.liked) {
    //     // console.log(post);
    //     $scope.liked = true;

    //     post.liked = true;

    //     post.likes += 1;

    //     // post.$update(function() {
    //     //   $location.path('posts/' + post._id + '/like');
    //     // }, function(errorResponse) {
    //     //   $scope.error = errorResponse.data.message;
    //     // });
    //     // console.log(post);
    //   };

    //   // Example.updateLike($scope.post).success(function(result) {})

    //     // if (!hasLiked) {
    //     //     hasLiked = true;
    //     //     $scope.liked = false;
    //     //     console.log($scope.liked);
    //     // } else {
    //     //     hasLiked = false;
    //     //     $scope.liked = true;
    //     //     console.log($scope.liked);
    //     // }
    // };
	}
]);