var through = require('through2');
var handlebars = require('handlebars');

var buffer = '';

function transform(chunk, encoding, next){
	buffer += chunk;		//this.push(chunk);
	next();
}

function flush(next){
	var precompiled = handlebars.precompile(buffer);
	var output = "var handlebarsCompiler = require('handlebars/runtime')['default'];\n";
	output		+= "module.exports = handlebarsCompiler.template(" +precompiled.toString()+ ");\n";
	this.push(output);
	next()
};

function processFile(file){
	// return through(transform, flush);
	var fileExtension = file.split('.').pop();
	if (fileExtension==='hbs') {
		return through(transform, flush);
	} else {
		return through();
	}
}



module.exports = processFile;