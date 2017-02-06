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
		
		const wc = templateService.wildcards;
		
		for (word in split) {
			if (split[word][0] == wildcard.trigger) {

				// If the wildcard has 2 arguments
				if (split[word].length == 3) {
					if (split[word].substring(1, 3) == 'np' ||
						split[word].substring(1, 3) == 'pn') {
							
							//If name ends with s, do alternate rule
							if (student.fName.slice(-1) == 's') {
								split[word] = student.fName + "'"; //Add single apostrophe
							}
							else {
								split[word] = student.fName + "'s";
							}
						}
				}
				// If the wildcard has one argument
				else if (split[word].length == 2) {
					switch (split[word][1]) {
						case wc.name:
							split[word] = student.fName;
							break;

						case wc.posessive:
							if (student.gender == 'm') { split[word] = 'his'; }
							else if (student.gender == 'f') { split[word] = 'her'; }
							else if (student.gender == 'n') { split[word] = 'their'; }
							break;

						case wc.gender:
							if (student.gender == 'm') { split[word] = 'man'; }
							else if (student.gender == 'f') { split[word] = 'woman'; }
							else if (student.gender == 'n') { split[word] = 'adult'; }
							break;

						case wc.reflexive:
							if (student.gender == 'm') { split[word] = 'him'; }
							else if (student.gender == 'f') { split[word] = 'her'; }
							else if (student.gender == 'n') { split[word] = 'them'; }
							
						case wc.personal:
							if (student.gender == 'm') { split[word] = 'he'; }
							else if (student.gender == 'f') { split[word] = 'she'; }
							else if (student.gender == 'n') { 								
								split[word] = 'they'; 
								
								if (split[(parseInt(word) + 1)]  == 'is') {
									split[(parseInt(word) + 1)]  = 'are';
								}
							}
					}
				}
			}
		}
		return split;
	}

	//Replaces gendered pronouns in the template to use the markup
	function replacePronouns(array) {
		
		const wc = templateService.wildcards;
		
		for (word in array) {
			switch (array[word]) {

				//Reflexive ('her' is ambiguous)
				case 'him':
				case 'them':
					array[word] = '$' + wc.reflexive;
					break;

				//Posessive
				case 'his':
				case 'her':
				case 'thier':
					array[word] = '$' + wc.posessive;
					break;

				case 'man':
				case 'woman':
					array[word] = '$' + wc.gender;
					break;
					
				case 'he':
				case 'she':
					array[word] = '$' + wc.personal;
					break;
			}
		}
		return array;
	}
});
