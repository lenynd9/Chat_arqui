//Creemos nuestro modulo de angular
angular.module('chat-firebase',['firebase'])

  //Creemos el controlador principal
  .controller("chatCtrl",function($scope, $firebase){
    
    //Conectemos a Firebase
    var ref = new Firebase("https://appchat-92897.firebaseio.com/chat");
    
    //Encapsulamos nuestra referencia a Firebase en un modulo de Angular para manipularlo mas facilmente
    var fb = $firebase(ref);
    
    //Para prevenir cualquier excepcion con nuestras variables, lo inicializamos a ""
    $scope.nickname="";
    $scope.chats={};
    
    //Ahora crearemos la funcion que enviara nuestros chats a Firebase
    $scope.send = function(){
      if($scope.nickname === ""){
        $scope.nickname = "Anonimo";
      }
      var time = new Date();
      fb.$push({
        sender : $scope.nickname,
        text : $scope.chatSend,
        time : time.toString()
      });
    };
    
    //Necesitaremos una funcion para calcular hace cuanto se escribio el mensaje que se recibio
    $scope.getTiempo = function(tiempo){
      var momentTiempo = moment(tiempo).fromNow();
      return momentTiempo;
    };
    
    //Ahora para finalizar el chat, necesitaremos sincronizar nuestra applicacion con los cambios en firebase:
    var syncArreglo = fb.$asObject();
    
    //Ahora le haremos un 'bind' a una variable de nuestro controlador
    //BIND: el proceso de la sincronizacion automatica entre el modelo y la vista
    syncArreglo.$bindTo($scope,'chats');
    
    //Actualizaremos nuestro Objeto cada minuto
    setInterval(function(){
      $scope.$digest();
    },60000);
  });