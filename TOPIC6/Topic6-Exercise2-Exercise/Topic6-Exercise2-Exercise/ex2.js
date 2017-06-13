var interval = 0;
var currentDraw;

function generateRandom(){
	var currentDraw = this;
	var numberSlots = this.parentNode.getElementsByTagName('td');

	interval = setInterval(motion, 100);
	stopInterval = setInterval(stopMotion, 2000);
	
}

function motion(){
	var numberSlots = currentDraw.parentNode.getElementsByTagName('td');
	for(var i = 0; i < numberSlots.length; i++){
		var random = Math.ceil(Math.random()*49);
		numberSlots[i].firstChild.nodeValue = random;
	}
}

function stopMotion(){
	clearInterval(interval);
	clearInterval(stopInterval);

	var numberSlots = currentDraw.parentNode.getElementsByTagName('td');
	for(var i = 0; i < numberSlots.length; i++){
		var random = Math.ceil(Math.random()*49);
		numberSlots[i].firstChild.nodeValue = random;
	}
}

function startScript(){
	var button = document.getElementsByTagName('button');
	for(var i = 0; i < button.length; i++){
		button[i].addEventListener('click', generateRandom);
	}
}

document.addEventListener('DOMContentLoaded', startScript);