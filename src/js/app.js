'use strict';

var $ = require('jquery');
var tasks = require('./tasks');

function _addTask(){tasks.add()}
function _deleteAllTasks(){tasks.clear()}
function _saveChanges(){tasks.save()}
function _cancelChanges(){tasks.cancel()}
function _deleteTask(e){tasks.remove(e)}

function _registerEventHandlers() {
	$('#new-task-button').on('click', _addTask);
	$('#delete-all-button').on('click', _deleteAllTasks);
	$('#save-button').on('click', _saveChanges);
	$('#cancel-button').on('click', _cancelChanges);
	$('#task-list').on('click', '.delete-button', _deleteTask);
}

_registerEventHandlers();
tasks.render();