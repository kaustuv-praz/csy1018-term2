var element = new Array('a1','a2', 3);
var elements = new Array(1,2,3,5);

// associative arrays

var associative = [];
associative['name'] = 'kaustuv';
associative['age'] = 19;

function startScript(){
	var combined = element.concat(elements);

	console.log(combined);

	console.log(associative['age']);
}

document.addEventListener('DOMContentLoaded', startScript);
