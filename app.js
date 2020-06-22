(function () {
  angular
    .module("lunchCheker", [])
    .controller("lunchCheckContoller", lunchCheckContoller);

  lunchCheckContoller.$inject = ["$scope"];
  function lunchCheckContoller($scope) {
    $scope.lunchItems = "";
    $scope.name = "pavan";
    $scope.message = "";
    $scope.sign = "";
    $scope.borderStyle = "";
    $scope.checkLunch = function () {
      if ($scope.lunchItems == "") {
        $scope.message = "Please enter Data first!";
        $scope.sign = "danger";
        $scope.borderStyle = "danger-border";
      } else {
        let itemsArray = $scope.lunchItems.split(",");
        if (itemsArray.includes(" ")) {
          $scope.warning =
            "WARNING: Please make sure to remove , , else it would be counted!";
        }

        itemsArray.length <= 3
          ? (($scope.message = "Enjoy!"),
            ($scope.sign = "success"),
            ($scope.borderStyle = "success-border"))
          : (($scope.message = "Too much!"),
            ($scope.sign = "danger"),
            ($scope.borderStyle = "danger-border"));
      }
    };
    $scope.onLunchItemsChange = function () {
      $scope.message = "";
      $scope.borderStyle = "";
      $scope.warning = "";
    };
  }
})();
