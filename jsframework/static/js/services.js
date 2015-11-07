(function(){
    'use strict';

    angular.module('services', [])
        .service('Todos', ['$http', 'BASE_URL', function($http, BASE_URL){
            return {
                all: function(){
                    return $http.get(BASE_URL);
                },
                update: function(updatedTodo){
                    return $http.put(BASE_URL + updatedTodo.id, updatedTodo);
                },
                delete: function(id){
                    return $http.delete(BASE_URL + id + '/');
                },
                create: function(newTodo){
                    return $http.post(BASE_URL, newTodo);
                }
            }
        }]);
})();