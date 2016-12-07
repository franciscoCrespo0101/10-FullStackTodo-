(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    /* @ngInject */
    function todoFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(post) {
        					//url/data/[optionaloptions]
        	return $http.post('http://localhost:61483/api/Todoes', post);
        }

        function getAll() {
        	return $http.get('http://localhost:61483/api/Todoes');
        }

        function getById(id) {
        	return $http.get('http://localhost:61483/api/Todoes/' + id);
        }

        function update(id, post) {
        	return $http.put('http://localhost:61483/api/Todoes/'+ id, post);

        }

        function remove(id) {
        	return $http.delete('http://localhost:61483/api/Todoes/'+ id);
        }
    }
})();