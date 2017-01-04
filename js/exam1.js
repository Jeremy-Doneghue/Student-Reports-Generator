/*
---------- Components of an AngularJS Application ----------

AngularJS provides a front end framework based on the MVC model. It is built on top of JavaScript and JQuery. With MVC the Model represents the data source, the View is the rendered page, and the Controller handles communication between both of them. By structuring your page this way your code is easier to maintain, easier to update and makes for more readable code.

AngularJS uses modules which represent the components used in your application. Using modules makes it easy to reuse your code in many applications.

Web pages are normally manipulated by working with the DOM object in JavaScript and JQuery. AngularJS allows you to extend HTML tags and attributes using AngularJS directives which make it easy to bind data directly to HTML elements.

AngularJS uses JavaScript objects to represent data called Scope which can be data generated on the web server, a database, web service, or client side AngularJS code.

You can use expressions that are directly linked to the scope (data) so that the page is updated dynamically as the data changes. Data binding works as well so that when data changes on the web page the model is also updated.

Many services are provided for common tasks like using AJAX techniques to dynamically pull data from a web service or the server.
*/

// Here we implement the template, module, controller and scope

// Define the AngularJS Module
// Modules are used to
// 1. Associate an AngularJS app with part of an HTML document
// 2. Provide access to AngularJS features
// 3. Help with organization
// angular.module() excepts the module name, list of modules this module
// needs and an optional configuration for the module. Modules that work with
// HTML normally have a name that contains app.
var app1 = angular.module('app1', []);


// Student import controller
app1.controller('studentsController', function ($scope) {

	$scope.textAreaContent = "";

	$scope.parseNames = function () {
		$scope.textAreaContent = document.getElementById("textArea").value;
		var separated = $scope.textAreaContent.split(/\r?\n/);
		console.log(separated);

		for (n in separated) {
			let split = separated[n].split(' ');
			$scope.names.push({
				fName: split[0],
				lName: split[1]
			});
		}
		//Clear the box
		document.getElementById("textArea").value = "";
		$scope.textAreaContent = "";
	};

	$scope.names = [
		  {fName: "Tim", lName: "Taylor"},
		  {fName: "Al", lName: "Boreland"}
	];

	$scope.itemsToAdd = [{
		fName: "",
		lName: ""
	}];

	$scope.add = function (itemToAdd) {
		var index = $scope.itemsToAdd.indexOf(itemToAdd);
		$scope.itemsToAdd.splice(index, 1);
		$scope.names.push(angular.copy(itemToAdd));
		$scope.addNew();
	};

	$scope.addNew = function () {
		$scope.itemsToAdd.push({
			fName: "",
			lName: ""
		})
	};
});


// View controller
app1.controller('viewController', function ($scope) {

	$scope.views = [
		{
			src: 'fragments/import.html',
			jTitle: 'Import class list',
			jDescription: 'Import the names of your students by pasting in a list or entering them using the form.'
		},
		{
			src: 'fragments/frag2.html',
			jTitle: 'Test view',
			jDescription: 'Lorem ipsum dolor sit amet.'
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
