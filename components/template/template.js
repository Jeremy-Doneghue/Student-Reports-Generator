app1.controller('templateController', function ($scope, templateService) {

	//Template stuff
	$scope.template = templateService;

	$scope.createAspect = templateService.createAspect;

	$scope.addCommentToAspect = function() {
		templateService.aspects[$scope.currentAspect].addComment();
	};
	$scope.removeCommentFromCurrentAspect = function(index) {
		templateService.aspects[$scope.currentAspect].removeComment(index);
	};

	$scope.loadExample = function() {
		templateService.createAspect('Attendence', [['Good', 'Good attendance'], ['Poor', 'Poor attendance']]);
		templateService.createAspect('Homework', [['Good', 'Well done with homework'], ['Poor', 'Poor homework']]);
	};

	// Remember which aspect tab is selected.
	$scope.currentAspect = 1;
	$scope.changeAspect = function(index) {
			$scope.currentAspect = index;
	};

	//Adding aspects
	$scope.addingAspect = false;
	$scope.newAspectName = '';
	$scope.toggleAddingAspect = function() {
		$scope.addingAspect = !$scope.addingAspect;
	};
	
	$scope.addAspect = function() {
		const blankComment = [['', '']];

		if ($scope.newAspectName != '') {
			templateService.createAspect($scope.newAspectName, blankComment);

			//clean up
			$scope.newAspectName = '';
			$scope.currentAspect = $scope.template.aspects.length - 1;
			$scope.toggleAddingAspect();
		}
		else {
			$scope.toggleAddingAspect();
		}
	};

	// Greeting message
	$scope.showOverlay = true;
	$scope.toggleOverlay = function() {
		$scope.showOverlay = !$scope.showOverlay;
	};
});
