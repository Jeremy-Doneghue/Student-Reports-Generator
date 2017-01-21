app1.controller('templateController', function ($scope) {

	$scope.template = {

		tName: '',
		aspects: [],
	};

	/*
	 * aspectName - String: Name of aspect eg. Attendence
	 * comments - [[adjective, comment]]:  2D array of comments with an adjective attached.
	 *		eg. ['Poor', 'Numerous absences have contributed to a lack of work and engagement with the subject.']
	 */
	$scope.createAspect = function(name, comments) {
		var aspect = function(name, comments) {
			this.aName = name;
			this.comments = comments;

			this.addComment = function() {
				this.comments.push([[''], ['']]);
			};

			this.removeComment = function(index) {
				this.comments.splice(index, 1);
			};
		}
		return(new aspect(name, comments));
	};

	$scope.create = function() {
		$scope.template.aspects.push($scope.createAspect('Attendence', [['Good', 'Good attendance'], ['Poor', 'Poor attendance']]));
		$scope.template.aspects.push($scope.createAspect('Homework', [['Good', 'Well done with homework'], ['Poor', 'Poor homework']]));

		for (a in $scope.template.aspects){
			console.log($scope.template.aspects[a].aName);
		}
	};

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
			$scope.template.aspects.push($scope.createAspect($scope.newAspectName, blankComment));
			$scope.newAspectName = '';
			$scope.currentAspect = $scope.template.aspects.length - 1;
			$scope.toggleAddingAspect();
		}
		else {
			$scope.toggleAddingAspect();
		}
	};
	$scope.addCommentToAspect = function(aspectIndex) {
		$scope.template.aspects[aspectIndex].addComment();
	};

	$scope.removeCommentFromCurrentAspect = function(index) {
		$scope.template.aspects[$scope.currentAspect].removeComment(index);
	};

	// Greeting message
	$scope.showOverlay = true;
	$scope.toggleOverlay = function() {
		$scope.showOverlay = !$scope.showOverlay;
	};
});
