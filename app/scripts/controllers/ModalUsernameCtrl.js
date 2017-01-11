(function() {
     function ModalUsernameCtrl($scope, $cookies, $uibModalInstance) {
          
           this.enterUsername = function() {
             
            if ($scope.userName) {      
               var trimmedUser = $scope.userName.trim(); 
              
               if (trimmedUser != "") {  
                 $cookies.put('blocChatCurrentUser', trimmedUser);
                  $uibModalInstance.close(trimmedUser);
               }
             }    
           }
     }
 
     angular
         .module('blocChat')
         .controller('ModalUsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', ModalUsernameCtrl]);
 })();