(function () {
	var app = angular.module('todo', ['ngRoute']);

	app.config(function ($routeProvider, $locationProvider, $httpProvider) {
		console.log('hi');
		$routeProvider
			.when('/tasks', {
				templateUrl: 'templates/todo.html',
				controller: 'todoCtrl as ctrl'
			})
			.when('/categories', {
				templateUrl: 'templates/categories.html',
				controller: 'categoryCtrl as ctrl'
			})
			.otherwise('/tasks');
	})
}());