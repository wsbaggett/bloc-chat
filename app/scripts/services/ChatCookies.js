(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
      
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
          templateUrl: 'templates/usernameModal.html',
          controller: 'ModalUsernameCtrl as user',
          size: 'sm',
          backdrop: 'static',
          keyboard: false
         
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();