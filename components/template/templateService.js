app1.factory('templateService', function() {
    var templateInstance = {

        tName: '',
        aspects: [],

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
