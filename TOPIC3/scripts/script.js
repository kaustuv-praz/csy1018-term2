var timer = 0;
var timer2 = 0;

document.addEventListener('DOMContentLoaded', startScript);

function startScript(){
	var circle = document.getElementById('circle');
	circle.style.top = (window.innerHeight-200) / 2  + 'px';
	circle.style.left = (window.innerWidth-200) / 2  + 'px';

	setInterval(checkKey, 10);
}


function checkKey(){
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

// function keyReleased(){
// 	clearInterval(timer);
// }

function keyPressed(event){
	var keyValue = event.keyCode;
	clearInterval(timer);
	clearInterval(timer2);

	if(keyValue == 37){
		timer = setInterval(moveLeft, 1);
		timer2 = setInterval(moveLeft2, 0.3);
	}
	if(keyValue == 38){
		timer = setInterval(moveTop, 1);
		timer2 = setInterval(moveTop2, 0.3);
	}
	if(keyValue == 39){
		timer = setInterval(moveRight, 1);
		timer2 = setInterval(moveRight2, 0.3);
	}
	if(keyValue == 40){
		timer = setInterval(moveDown, 1);
		timer2 = setInterval(moveDown2, 0.3);
	}
}

function moveLeft(){
	var circle = document.getElementById('circle');
	
	var positionLeft = circle.offsetLeft;
	

	
	circle.style.left = positionLeft - 1 + 'px';

	if(positionLeft == 0){
	 	clearInterval(timer);
	 	timer = setInterval(moveRight, 1);
	}

	
}
function moveLeft2(){
	var circle2 = document.getElementById('circle2');
	var positionLeft2 = circle2.offsetLeft;

	circle2.style.left = positionLeft2 - 1 + 'px';

	if(positionLeft2 == 0-200){
		circle2.style.left = window.innerWidth + 'px';
	}
}

function moveRight(){
	var circle = document.getElementById('circle');
	

	var positionLeft = circle.offsetLeft;
	

	circle.style.left = positionLeft + 1 + 'px';
	

	if(positionLeft + 200 == window.innerWidth){
		clearInterval(timer);
		timer = setInterval(moveLeft, 1);
	}

	
}
function moveRight2(){
	var circle2 = document.getElementById('circle2');

	var positionLeft2 = circle2.offsetLeft;
	circle2.style.left = positionLeft2 + 1 + 'px';

	if(positionLeft2 == window.innerWidth){
		circle2.style.left = 0-200 + 'px';
	}
}

function moveTop(){
	var circle = document.getElementById('circle');
	
	var positionTop = circle.offsetTop;
	
	circle.style.top = positionTop - 1 + 'px';
	

	if(positionTop == 0){
		clearInterval(timer);
		timer = setInterval(moveDown, 1);
	}

	
}
function moveTop2(){
	var circle2 = document.getElementById('circle2');
	var positionTop2 = circle2.offsetTop;

	circle2.style.top = positionTop2 - 1 + 'px';

	if(positionTop2 == 0-200){
		circle2.style.top = window.innerHeight + 'px';
	}
}

function moveDown(){
	var circle = document.getElementById('circle');
	
	var positionTop = circle.offsetTop;
	
	circle.style.top = positionTop + 1 + 'px';
	

	if(positionTop + 200 == window.innerHeight){
		clearInterval(timer);
		timer = setInterval(moveTop, 1);
	}

	
}
function moveDown2(){
	var circle2 = document.getElementById('circle2');
	var positionTop2 = circle2.offsetTop;

	circle2.style.top = positionTop2 + 1 + 'px';
	
	if(positionTop2 == window.innerHeight){
		circle2.style.top = 0 - 200 + 'px';
	}
}
