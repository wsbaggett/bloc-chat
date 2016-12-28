(function() {
     function ModalRoomCtrl($scope, $uibModalInstance) {
        /* add two fuctions here to cancel or open */
         
           $scope.cancelRoom = function() {
              
              $uibModalInstance.close();
         }
          
           $scope.createNewRoom = function() {
               
               var name = $scope.newRoomName;
               
               if (name != "") {
                      $uibModalInstance.close(name);
                } else {
                         $uibModalInstance.close();
                }  
          
         }
     }
 
     angular
         .module('blocChat')
         .controller('ModalRoomCtrl', ['$scope', '$uibModalInstance', ModalRoomCtrl]);
 })();