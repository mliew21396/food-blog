angular.module('example').factory('Example', ['$http',
  function($http) {
    return {
      updateLink : function(post) {
          return $http.put('/api/posts/' + post._id + '/like', post).
            success(function(data, status, headers, config) {
            }).
            error(function(data, status, headers, config) {
            });
      }
    }
  }
]);