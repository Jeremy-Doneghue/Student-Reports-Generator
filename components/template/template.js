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
		templateService.createAspect('General comment', [
			['Excellent', '$n is a focused student who has an obvious passion for the subject.'],
			['Good', '$n is a pleasant young man who has approached Art with an open mind and a willingness to learn new things.'],
			['Has potential', '$n is a capable student who has achieved good grades thus far, but I believe he is capable of better.'],
			['Absent a lot', 'Numerous absences have contributed to a lack of work and engagement with the subject.'],
		]);

		templateService.createAspect('Homework', [
			['Average', 'A more focused effort in class and with homework to ensure work is completed will help $m to achieve better.'],
			['Poor', '$n has not managed to complete any homework at all this term, which has been a detriment to $p grades.'],
			['Improved', '$a has made a much greater effort this term to complete his homework, which has led to a marked improvement in $p grades.']
		]);

		templateService.createAspect('Grades', [
			['Excellence', '$n should be proud of the grades he has achieved this term.'],
			['High merit', '$n has achieved well this term, some extra attention to detail will enable him to turn his merit grades into excellence.'],
			['Merit', '$n has performed well this term in his assessments achieving a grade of merit, well done.'],
			['Low merit', '$n has managed to improve his work ethic this term and improve his achieved grade to merit.'],
			['High achieved', '$n was close to receiving a merit grade, but a lack of attention to detail has held it to the high end of achieved.'],
			['Achieved', '---- Achieved grade comment ----'],
			['Low achieved', '---- Low achieved grade comment ----'],
			['High not-achieved', '---- High not-achieved comment ----'],
			['Not Achieved', '---- Not-achieved comment ----']
		]);

		templateService.createAspect('Work', [
			['Good', 'Well done with homework'],
			['Poor', 'Poor homework']
		]);
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
		$scope.loadExample(); //TODO: TEMPORARY
	};
});
