(function(app, angular) {
    'use strict';

    var theRemoteDataModuleDependecies = ['ngResource'];

    angular.module('ns:theRemoteDataModule', theRemoteDataModuleDependecies).factory('TheServiceName', function($resource) {
        var resourceUri = 'https://api.mongolab.com/api/1/databases/angularjs/collections/projects/:id';
        var paramDefaults = {
            apiKey: '4f847ad3e4b08a2eed5f3b54',
            id: '@_id.$oid'
        };
        var actions = {
            getMyStuff: {
                method: 'GET',
                params: {
                    foo: 'bar'
                },
                isArray: true
            }
        };
        var RemoteData = $resource(resourceUri, paramDefaults, actions);
        return RemoteData;
    });

    angular.module('wrapperModule', ['ns:theRemoteDataModule']);

    angular.module('project', ['wrapperModule']).controller('app.DefaultController', function($scope, TheServiceName) {
        var remoteDataItems = TheServiceName.getMyStuff(function() {
            console.log(remoteDataItems[0]);
            console.log(remoteDataItems[0].$get());
        });
        $scope.remoteDataItems = remoteDataItems;
    });
} (window.app, window.angular));

