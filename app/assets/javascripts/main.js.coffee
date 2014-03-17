#= require_self
#= require_tree ./services/global
#= require_tree ./services/main
#= require_tree ./filters/global
#= require_tree ./filters/main
#= require_tree ./controllers/global
#= require_tree ./controllers/main
#= require_tree ./directives/global
#= require_tree ./directives/main

Blog = angular.module('Blog', ['ngRoute'])

Blog.config(['$routeProvider', ($routeProvider) ->

  $routeProvider
    .when('/post/new', { templateUrl: '../assets/mainCreatePost.html', controller: 'CreatePostCtrl'})

    .when('/post/:postId', { templateUrl: '../assets/mainPost.html', controller: 'PostCtrl'})

  $routeProvider.otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl'})
])

Blog.config(['$httpProvider', (provider) ->
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
])
