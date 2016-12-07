(function() {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['todoFactory'];

    function PostController(todoFactory) {
        var vm = this;
        vm.posts = [];
        vm.addPost = addPost;
        vm.edit = edit;
        vm.deletePost = deletePost;
        vm.getClass = getClass;

        activate();

        /////////////////////////////////////

        function activate() {
            todoFactory
                .getAll()
                .then(function(response) {
                    vm.posts = response.data;
                });
        }


        function addPost() {
            todoFactory
                .create(vm.newPost)
                .then(function(response) {
                    vm.posts.push(response.data);


                    vm.newPost = {};
                })
                .catch(function(error) {

                });
        }

        function deletePost(post) {
            todoFactory
                .remove(post.todoId)
                .then(function(response) {
                    var index = vm.posts.indexOf(post);

                    vm.posts.splice(index, 1);

                })

        }

        /*function updatePost(post) {
            todoFactory
                .update(post.todoId)
                .then(function(response) {
                    var index = vm.posts.indexOf(post);

                    vm.posts.splice(index, 1);

                })
        }


           function editPost(Post) {
            var newName = prompt("Edit your todo below:");
            post.entry = newName;
            console.log("hi");
            todoFactory
                .update(post.todoId, post)
                .then(function(response) {
                    toastr.success("Save successful");
                })
                .catch(function(error) {
                    toastr.error("Save NOT successful");
                })
        }*/


        function edit(post) {
            todoFactory
                .update(post.todoId, post)
                .then(function(response) {

                });
        }


        function getClass(post) {
            switch (post.severity) {
                case 1:
                    return 'list-group-item-danger';
                case 2:
                    return 'list-group-item-warning';
                case 3:
                    return 'list-group-item-success';

            }




        };
    }
})()
