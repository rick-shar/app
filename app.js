//Main file for app
var args = process.argv;
var presentFlags = [];
args.forEach(function(arg){
	if((arg === '--sum') || (arg === '--product')){
		presentFlags.push(arg);
	}
});
if(presentFlags.length !== 1) {
	throw "incorrect number or type of flags";
}
var isNumber = function(x){
	return !isNaN(parseFloat(x));
}
var numbers = args.filter(isNumber).map(parseFloat);
var result;
if(presentFlags[0] === '--sum'){
	// do sum stuff
	result = numbers.reduce(function(a,b){ return a + b; });
}

if(presentFlags[0] === '--product'){
	// do product stuff
	result = numbers.reduce(function(a,b){ return a * b; });
	
}
console.log(result);