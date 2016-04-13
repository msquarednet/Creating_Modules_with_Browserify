'use strict';

var $ = require('jquery');
var taskData = require('./data/taskData');
var taskRenderer = require('./renderers/taskRenderer');


function add(){
	taskRenderer.renderNew()
}
function remove(e){
	$(e.target).closest('.task').remove()
}
function clear(){
	taskData.clear()
	render();
}
function save(){
	var tasks = [];
	$('#task-list .task').each(function(i,task){
		var $task = $(task);
		tasks.push({
			complete: $task.find('.complete').prop('checked'),
			description: $task.find('.description').val()
		});
	});
	taskData.save(tasks);
}
function cancel(){render()}
function render(){
	taskRenderer.renderTasks(taskData.load());
}




module.exports = {
	add:add,
	remove:remove,
	clear:clear,
	save:save,
	cancel:cancel,	
	render:render
}