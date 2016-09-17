(function(){
	'use strict';
	var app = angular.module('todo');
	
	function todoCtrl(taskResource, categoryResource){
		var ctrl = this;

	
		ctrl.tasks = taskResource.getTasks();
		
		ctrl.categories = categoryResource.getCategories();
		
		ctrl.newTask = function(){
			if(ctrl.newTaskName === ''){
				return;
			}
			var task = {
				name: ctrl.newTaskName
			};
			
			ctrl.tasks.push(task);
		
			ctrl.newTaskName = '';
		};
	}
	
	app.controller('todoCtrl', todoCtrl);
	
}());