angular.module('posts').factory('Posts', ['$resource',
	function($resource) {
    return $resource('api/posts/:postId', {
		// return $resource('api/todos/:todoId', {
			postId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);