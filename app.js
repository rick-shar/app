//Main file for app
var args = process.argv;
var presentFlags = [];

args.forEach(function(arg){
	if((arg === '--sum') || (arg == '--product')){
		presentFlags.push[arg];
	}
});

if(presentFlags.length !== 1) {
	throw "incorrect number or type of flags";
}

if(presentFlags[0] === '--sum'){
	// do sum stuff
}

if(presentFlags[1] === '--product'){
	// do product stuff
}