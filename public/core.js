var cfcwbWorkshopMean = angular.module('cfcwbWorkshopMean', [])
  .controller('mainController', mainController);

var apiURL = "http://localhost:1234";

function mainController($scope, $http) {
  $scope.formData = {};

  // Carrega todos os comentários quanto abre a página
  $http.get(apiURL + '/api/comment')
    .success(function(data) {
      $scope.commentData = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // Adiciona um novo comentário
  $scope.createComment = function() {
    $http.post(apiURL + '/api/comment', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // Limpa o form

        // Carrega os comentários
        $http.get(apiURL + '/api/comment')
          .success(function(data) {
            $scope.commentData = data;
            console.log(data);
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}