'use strict';

//var STORE_NAME = 'tasks';		//private var for this module

exports.save = function(tasks){
	localStorage.setItem('tasks', JSON.stringify(tasks));
};
exports.load = function(){
	var storedTasks = localStorage.getItem('tasks');
	if (storedTasks){
		return JSON.parse(storedTasks);
	}
	return [];
};
exports.clear = function(){
	localStorage.removeItem('tasks');
};


// module.exports = {
// 	save: function(tasks){},
// 	load: function(){},
// 	clear:function(){}
// }
