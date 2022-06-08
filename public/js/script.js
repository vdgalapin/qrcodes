(function(){
    'use strict';
    var app = angular.module('kawasakiApp', []);

    app.controller('kawasakiController', ($scope)=> {
        $scope.vm = {};
        $scope.testing = function() {
            alert('test!');
        }
        $scope.name = "vyron Galapin"
        $scope.vm.finished = function($event) {
            alert($event);
        }
    });  

})();


















// function postData() {
//     console.log('Button was clicked')
//     fetch('/readPython', {method: 'POST'})
//         .then(function(response) {
//             if(response.ok) {
//                 console.log('Click was recorded')
//                 return;
//             }
//             throw new Error('Request Failed')
//         })
//         .catch(function(error) {
//             console.log(error)
//         })
// }
