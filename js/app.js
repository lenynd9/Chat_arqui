var app = angular.module('myApp', ['ionic', 'firebase']);

var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
        firebase.initializeApp(config);
    });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('add', {
  	url:'/add',
    controller: 'AddController',
    templateUrl: 'views/add.html'
  })
  .state('reg', {
  	url:'/reg',
    controller: 'regController',
    templateUrl: 'views/reg.html'

  })
  .state('login', {
  	url:'/login',
  	controller: 'loginController',
  	templateUrl: 'views/login.html'
    
   
  })
  .state('chat', {
  	url:'/chat',
  	controller: 'chatController',
  	templateUrl: 'views/chat.html'
    
  });
  $urlRouterProvider.otherwise('/login');
});

app.constant('FBURL', 
  'https://appchat-92897.firebaseio.com/chats/' 
  //Use the URL of your project here with the trailing slash                                                   
);

app.controller('loginController', ['$scope', '$firebaseAuth', '$location','FBURL', function($scope, $firebaseAuth, $location, FBURL){
	
	var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  firebase.initializeApp(config);
  	$scope.mensaje = "conectado?";
	$scope.signIn = function(){
		var email = $scope.log.email;
		var password = $scope.log.password;

		if(email && password){
			
			firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
				$location.path('/chat');
				$scope.mensaje="conecto";
			}).catch(function(error){
				var errorCode = error.code;
  				var errorMessage = error.message;
			});
		}
	};

}]);

app.controller('chatController', ['$scope', '$firebaseArray', '$location','FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  firebase.initializeApp(config);

	//Creemos nuestro modulo de angular
    //Conectemos a Firebase
    var rootRef = firebase.database().ref('chats');

    
    //Para prevenir cualquier excepcion con nuestras variables, lo inicializamos a ""
    
    
    //Para prevenir cualquier excepcion con nuestras variables, lo inicializamos a ""
    $scope.nickname="";
    $scope.chats={};
    
    //Ahora crearemos la funcion que enviara nuestros chats a Firebase
    $scope.send = function(){
      if($scope.nickname === ""){
        $scope.nickname = "Anonimo";
      }
      var time = new Date();
      rootRef.push({
        sender : $scope.nickname,
        text : $scope.chatSend,
        time : time.toString()
      });
    };
    $scope.getTiempo = function(tiempo){
      var momentTiempo = moment(tiempo).fromNow();
      return momentTiempo;
    };
    
    
    var syncArreglo;
    var arreglo=rootRef.on('value', function(snapshot) {
        return $scope.chats= snapshot.val();
      }); 

  }]);

app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
  var ref = new Firebase(FBURL);
  var product = $firebaseArray(ref);
  $scope.addProduct = function() {
    product.$add({
      sku: $scope.product.sku,
      description: $scope.product.description,
      price: $scope.product.price
    });
    $location.path('/');
  };

}]);


app.controller('regController', ['$scope', '$firebaseAuth', '$location','FBURL', function($scope, $firebaseAuth, $location, FBURL){
	
	var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  firebase.initializeApp(config);

	$scope.signUp = function(){
		var email = $scope.reg.email;
		var password = $scope.reg.password;

		if(email && password){
			
			firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
				$location.path('/');
			}).catch(function(error){
				var errorCode = error.code;
  				var errorMessage = error.message;
			});
		}
	};

}]);


