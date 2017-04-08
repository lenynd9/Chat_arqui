var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
  .when('/consulta', {
    controller: 'ListController',
    templateUrl: 'views/list.html'
  })
  .when('/add', {
    controller: 'AddController',
    templateUrl: 'views/add.html'
  })
  .when('/reg', {
    controller: 'regController',
    templateUrl: 'views/reg.html'

  })
  .when('/', {
    controller: 'loginController',
    templateUrl: 'views/login.html'

  })
  .otherwise({
    redirectTo: '/'
  });
});

app.constant('FBURL', 
  'https://appchat-92897.firebaseio.com/products/' 
  //Use the URL of your project here with the trailing slash                                                   
);