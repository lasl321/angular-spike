(function(app) {
    'use strict';

    app.TodoController = function($scope) {
        $scope.totalTodos = function() {
            return $scope.todos.length;
        };

        $scope.todos = [{
            text: 'foo',
            done: false
        },
        {
            text: 'bar',
            done: false
        }];

        $scope.addTodo = function() {
            var newTodoText = $scope.newTodoText;
            if (!newTodoText) {
                return;
            }

            $scope.todos.push({
                text: newTodoText,
                done: false
            });

            $scope.newTodoText = '';
        };

        $scope.clearDone = function() {
            $scope.todos = $scope.todos.filter(function(todo) {
                return ! todo.done;
            });
        };
    };
} (window.app));

