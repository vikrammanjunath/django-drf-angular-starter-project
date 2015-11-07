(function(){
	angular.module('drf-angular', ['routing', 'controllers', 'services'])
        .constant('BASE_URL', 'http://localhost:8000/api/v1/todos/');
})();
