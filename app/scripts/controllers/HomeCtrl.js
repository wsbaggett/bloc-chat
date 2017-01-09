(function() {
     function HomeCtrl($uibModal) {
         this.heroTitle = "Bloc Chat";
         this.createRoomModal=function() {
            $uibModal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'ModalRoomCtrl as modRoom',   
            size: 'sm'
            });   
         }
         
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$uibModal', HomeCtrl]);
 })();