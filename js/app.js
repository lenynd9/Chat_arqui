var app= angular.module('mainApp',[]);
app.controller('mainCtrl',function($firebase){
    var referencia_a_nuestra_aplicacion = Firebase('https://appchat-92897.firebaseio.com/');
    var encapsulemos_nuestra_referencia = $firebase(referencia_a_nuestra_aplicacion);
});
