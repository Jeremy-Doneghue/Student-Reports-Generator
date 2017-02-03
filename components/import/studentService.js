app1.factory('studentService', function() {
	var list = {
		currentStudent: 0,

		list: [
			  {fName: "Tim", lName: "Taylor", gender: 'm', report: null},
			  {fName: "Al", lName: "Boreland", gender: 'n', report: null},
			  {fName: 'Jill', lName: 'Taylor', gender: 'f', report: null}
		],

		getCurrentStudent: function() {
			return list[this.currentStudent];
		}
	}

	return list;
});
