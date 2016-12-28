(function() {
     function HomeCtrl(Room, $uibModal) {
         this.heroTitle = "Bloc Chat";
         this.createRoomModal=function() {
            var modal=$uibModal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'ModalRoomCtrl as modRoom',   
            size: 'sm'
            }); 
             
             modal.result.then(function(name) {
                 Room.addIt(name);
             });
         }
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();