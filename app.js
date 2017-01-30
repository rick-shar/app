//Main file for app

var program = require('commander');
var args = process.argv;

// setup commander args
// https://www.npmjs.com/package/commander

program
	.option('-s --sum', 'sum')
	.option('-p --product', 'product')
	.parse(args);

var isNumber = function(x){
	return !isNaN(parseFloat(x));
}
var numbers = args.filter(isNumber).map(parseFloat);
var result;
if(!program.sum && !program.product) {
	throw "no flag passed";
}
if(program.sum){
	// do sum stuff
	result = numbers.reduce(function(a,b){ return a + b; });
}

if(program.product){
	// do product stuff
	result = numbers.reduce(function(a,b){ return a * b; });
	
}
console.log(result);