(function(){
	'use strict';
	var app = angular.module('todo');
	
	function taskResource (){
	
		var tasks = [{name:'Task 1'},{name:'Task 2'},{name:'Task 3'},{name:'Task 4'}];
		function getTasks(){
			return tasks;
		}
		
		return {
			getTasks: getTasks
		};
			
			
	}
	
	app.service('taskResource', taskResource)
}());