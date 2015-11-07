(function(){
    'use strict';

    angular.module('controllers',['services'])
        .controller('MainCtrl', ['$scope', 'Todos', '$state', function($scope, Todos, $state){
            var vm = this;
            vm.todos = [];
            vm.newTodo = {};

            vm.addTodo = function(){
                Todos.create(vm.newTodo)
                    .then(
                        function(result){
                            // success
                            $state.go('home');
                        },
                        function(result){
                            // error
                            $state.go('home');
                        });
            };

            vm.toggleCompleted = function(todo){
                Todos.update(todo);
            };

            vm.deleteTodo = function(id){
                Todos.delete(id)
                    .then(function(){
                        vm.todos = vm.todos.filter(function(todo){ return todo.id !== id;});
                    });

            };

            Todos.all().then(
                function(data){
                    vm.todos = data.data;
                }
            );
        }]);
})();