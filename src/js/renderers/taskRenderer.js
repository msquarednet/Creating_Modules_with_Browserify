'use strict';

var $ = require('jquery');	
var taskTemplate = require('../../templates/task.hbs');

//private
//var taskTemplate = '<li class="task">Task Name:<input class="complete" type="checkbox" /><input class="description" type="text" /></li>';
//private
function _renderTask(task) {
	return $(taskTemplate(task));
	// var $task = $(taskTemplate);
	// if(task.complete) {
	// 	$task.find('.complete').attr('checked', 'checked');
	// }
	// $task.find('.description').val(task.description);
	// return $task;
};


module.exports = {
	renderTasks : function(tasks){
		var elementArray = $.map(tasks, _renderTask);
		$('#task-list').empty().append(elementArray);
	},
	renderNew : function(){
		$('#task-list').prepend(_renderTask({}));
	}
}