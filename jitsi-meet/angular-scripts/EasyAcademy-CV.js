var app = angular.module("EasyAcademyCV", []);

app.controller("ClasseVirtuelle", function ($scope) {
	$scope.enableWhiteBoard = false;

	$scope.activateWhiteBoard = function() {
		if ($scope.enableWhiteBoard) {
			$scope.enableWhiteBoard = false;
			$("#toolbar_button_whiteboard").removeClass('active');
			APP.conference.toggleScreenSharing();
		}
		else if (!$scope.enableWhiteBoard) {
			$scope.enableWhiteBoard = true;
			$("#toolbar_button_whiteboard").addClass('active');
			APP.conference.toggleScreenSharing();
		}
	}
});