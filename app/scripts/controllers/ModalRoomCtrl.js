(function() {
     function ModalRoomCtrl($scope, Room, $uibModalInstance) {
        /* add two fuctions here to cancel or open */
         
           $scope.cancelRoom = function() {
              
              $uibModalInstance.close();
         }
          
           $scope.createNewRoom = function() {
               
               var name = $scope.newRoomName;
               
               var trimmedName = name.trim();
               
               if (trimmedName != "") {   
                  Room.addIt(trimmedName);
               }
               $uibModalInstance.close(); 
         }
     }
 
     angular
         .module('blocChat')
         .controller('ModalRoomCtrl', ['$scope', 'Room', '$uibModalInstance', ModalRoomCtrl]);
 })();