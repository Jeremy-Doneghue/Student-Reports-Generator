// View controller
app1.controller('viewController', function ($scope) {

	$scope.views = [
		{
			jTitle: 'Import Class List',
			jDescription: 'Import the names of your students by pasting in a list or entering them using the form.'
		},
		{
			jTitle: 'Create Template',
			jDescription: 'Create a template that you will use to quickly generate reports based on the criteria you set.'
		},
		{
			jTitle: 'Build Report',
			jDescription: 'Generate reports for your students using the template.'
		}
	];

	$scope.currentView = 1;
	$scope.sectionNav = document.getElementById("section-nav");
	$scope.switchView = function ($event, viewInt) {
		if (viewInt > 2 || viewInt < 0) viewInt = 0;
		$scope.currentView = viewInt;
	}
});
