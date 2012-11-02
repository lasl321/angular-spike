(function(app) {
    'use strict';

    app.TodoController = function($scope) {
        $scope.totalTodos = 4;

        $scope.todos = [{
            text: 'foo',
            done: false
        },
        {
            text: 'bar',
            done: false
        }];
    };
} (window.app));

