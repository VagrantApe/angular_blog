(function(){var t;t=angular.module("Blog",["ngRoute"]),t.config(["$routeProvider",function(t){return t.when("/post/new",{templateUrl:"../assets/mainCreatePost.html",controller:"CreatePostCtrl"}).when("/post/:postId",{templateUrl:"../assets/mainPost.html",controller:"PostCtrl"}),t.otherwise({templateUrl:"../assets/mainIndex.html",controller:"IndexCtrl"})}])}).call(this),function(){angular.module("Blog").factory("postData",["$http",function(t){var o;return o={data:{posts:[{title:"Loading...",contents:""}]},isLoaded:!1},o.loadPosts=function(){return o.isLoaded?void 0:t.get("./posts.json").success(function(t){return o.data.posts=t,o.isLoaded=!0,console.log("Successfully loaded posts.")}).error(function(){return console.error("Failed to load posts.")})},o}])}.call(this),function(){this.CreatePostCtrl=function(t,o,n){return t.data=n.data,n.loadPosts(),t.formData={newPostTitle:"",newPostContents:""},t.navNewPost=function(){return o.url("/post/new")},t.navHome=function(){return o.url("/")}},this.CreatePostCtrl.$inject=["$scope","$location","postData"]}.call(this),function(){this.IndexCtrl=function(t,o,n,s){return t.data=s.data,s.loadPosts(),t.viewPost=function(t){return o.url("/post/"+t)},t.navNewPost=function(){return o.url("/post/new")}},this.IndexCtrl.$inject=["$scope","$location","$http","postData"]}.call(this),function(){this.PostCtrl=function(t,o,n){return t.data={postData:n.data},n.loadPosts(),t.data.postId=o.postId},this.PostCtrl.$inject=["$scope","$routeParams","postData"]}.call(this);