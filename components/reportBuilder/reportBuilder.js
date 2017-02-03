app1.controller('reportController', function ($scope, templateService, studentService) {

	$scope.template = templateService;
	$scope.students = studentService;
	$scope.getSelectedStudent = function() {
		return studentService.list[studentService.currentStudent];
	}

	$scope.answers = [];

	//TODO: switching students doesnt work properly
	$scope.generate = function() {
		var report = '';

		// Concatinate aspects
		for (index in $scope.answers) {
			report += templateService.aspects[index].comments[$scope.answers[index]][1];
			report += ' ';
		}

		// Find and replace pronouns
		report = join(report, studentService.list[studentService.currentStudent], templateService.wildcards);
		console.log(report);
	}

	function join(text, student, wildcard) {

		var split = text.split(' ');
		split = replacePronouns(split);
		split = process(split, student, wildcard);
		return split.join(" ");
	}

	function process(split, student, wildcard) {
		for (word in split) {
			if (split[word][0] == wildcard.trigger) {

				// If the wildcard has 2 arguments
				if (split[word].length == 3) {
					console.log('error');
				}
				// If the wildcard has one argument
				else if (split[word].length == 2) {
					switch (split[word][1]) {
						case 'n':
							split[word] = student.fName;
							break;

						case 'p':
							if (student.gender == 'm') { split[word] = 'his'; }
							else if (student.gender == 'f') { split[word] = 'her'; }
							else if (student.gender == 'n') { split[word] = 'their'; }
							break;

						case 'g':
							if (student.gender == 'm') { split[word] = 'man'; }
							else if (student.gender == 'f') { split[word] = 'woman'; }
							else if (student.gender == 'n') { split[word] = 'adult'; }
							break;

						case 'r':
							if (student.gender == 'm') { split[word] = 'him'; }
							else if (student.gender == 'f') { split[word] = 'her'; }
							else if (student.gender == 'n') { split[word] = 'them'; }
					}
				}
			}
		}
		return split;
	}

	//Replaces gendered pronouns in the template to use the markup
	function replacePronouns(array) {
		for (word in array) {
			switch (array[word]) {

				//Reflexive ('her' is ambiguous)
				case 'him':
				case 'them':
					array[word] = '$r';
					break;

				//Posessive
				case 'his':
				case 'her':
				case 'thier':
					array[word] = '$p';
					break;

				case 'man':
				case 'woman':
					array[word] = '$g';
					break;
			}
		}
		return array;
	}
});
