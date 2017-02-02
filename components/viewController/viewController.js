// View controller
app1.controller('viewController', function ($scope) {

	$scope.views = [
		{
			jTitle: 'Import class list',
			jDescription: 'Import the names of your students by pasting in a list or entering them using the form.'
		},
		{
			jTitle: 'Create template',
			jDescription: 'Create a template that you will use to quickly generate reports based on the criteria you set.'
		},
		{
			jTitle: 'Build report',
			jDescription: 'Generate reports for your students using the template.'
		}
	];

	$scope.currentView = 0;

	$scope.switchView = function () {
		($scope.currentView == 2) ? $scope.currentView = 0 : $scope.currentView++;
	}
});
