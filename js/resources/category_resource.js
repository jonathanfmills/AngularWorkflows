(function(){
	'use strict';
	var app = angular.module('todo');
	
	function categoryResource (){
	
		var categories = ['Pluralsight', 'Consulting', 'Scouts', 'Home'];
		function getCategories(){
			return categories;
		}
		
		return {
			getCategories: getCategories
		};
			
			
	}
	
	app.service('categoryResource', categoryResource)
}());