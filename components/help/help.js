app1.controller('helpController', function($scope) {

	const importStudentsHelp = [
		['Your students', 'Your class list. When you generate your reports, these names will be placed in automatically, no more copy pasting!'],
		['Bulk import', 'Paste in the names of your students, one on each line, to import them all at once.'],
		['Test', '123']
	];

	const createTemplateHelp = [
		['Aspects', 'These are the topics you want to comment on about your students. For example, homework or attitude in class. When it comes to creating the reports, you don\'t necesarily need to use each aspect on every student. You can just pick the most relevant ones.'],
		['Test', '123']
	];

	$scope.helpComments = [importStudentsHelp, createTemplateHelp];
});
