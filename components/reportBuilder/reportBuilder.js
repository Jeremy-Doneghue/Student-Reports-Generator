app1.controller('reportController', function ($scope, templateService, studentService) {

	$scope.template = templateService;
	$scope.students = studentService;

	//$scope.currentStudent = studentService.names[selectedStudent];

	$scope.answers = [];

	$scope.generate = function() {
		var report = '';

		for (index in $scope.answers) {
			report += templateService.aspects[index].comments[$scope.answers[index]][1];
			report += ' ';
		}
		console.log(report);
	}
});
