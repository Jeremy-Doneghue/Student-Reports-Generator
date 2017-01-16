// View controller
app1.controller('viewController', function ($scope) {

	$scope.views = [
		{
			src: 'fragments/import.html',
			jTitle: 'Import class list',
			jDescription: 'Import the names of your students by pasting in a list or entering them using the form.'
		},
		{
			src: 'fragments/template.html',
			jTitle: 'Create template',
			jDescription: 'Create a template that you will use to quickly generate reports based on the criteria you set.'
		}
	];

	$scope.currentView = 0;

	$scope.switchView = function () {
		if ($scope.currentView == 0) {
			$scope.currentView = 1;
		}
		else $scope.currentView = 0;
	}
});
