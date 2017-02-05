app1.factory('templateService', function() {
	var templateInstance = {

		tName: '',
		aspects: [],
		wildcards: {
			trigger: '$', // Trigger replacement
			automatic: 'a', // The algorithm will use the student's name, or he/she where it thinks it would be appropriate
			name: 'n', // Replace with name
			personal: 'm', // Replace with he/she
			posessive: 'p', // Alice's, Bob's, his, her
			reflexive: 'r', // Himself, herself
			gender: 'g' // Man, woman
		},

		/*
		 * aspectName - String: Name of aspect eg. Attendence
		 * comments - [[adjective, comment]]:  2D array of comments with an adjective attached.
		 *		eg. ['Poor', 'Numerous absences have contributed to a lack of work and engagement with the subject.']
		 */
		createAspect: function(name, comments) {
			var aspect = function(name, comments) {
				this.aName = name;
				this.comments = comments;

				this.addComment = function() {
					this.comments.push([
						[''],
						['']
					]);
				};

				this.removeComment = function(index) {
					this.comments.splice(index, 1);
				};
			}
			this.aspects.push(new aspect(name, comments));
		}
	};

	// factory function body that constructs shinyNewServiceInstance
	return templateInstance;
});
