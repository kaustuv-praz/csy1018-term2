var pressedLeft = false;
var pressedTop = false;
var pressedRight = false;
var pressedDown = false;



function keyUp(event){
	var keyValue = event.keyCode;

	if(keyValue == 37){
		pressedLeft = false;
	}
	if(keyValue == 38){
		pressedTop = false;
	}
	if(keyValue == 39){
		pressedRight = false;
	}
	if(keyValue == 40){
		pressedDown = false;
	}
}

function keyDown(event){
	var keyValue = event.keyCode;

	if(keyValue == 37){
		pressedLeft = true;
	}
	if(keyValue == 38){
		pressedTop = true;
	}
	if(keyValue == 39){
		pressedRight = true;
	}
	if(keyValue == 40){
		pressedDown = true;
	}
	
}

function ballMove(){
	var ball = document.getElementById('ball');
	var positionLeft = ball.offsetLeft;
	var postionTop = ball.offsetTop;

	if(pressedLeft == true){
		ball.style.left = positionLeft - 4 + 'px';
	}
	if(pressedRight == true){
		ball.style.left = positionLeft + 4 + 'px';
	}
	if(pressedTop ==  true){
		ball.style.top = postionTop - 4 + 'px';
	}
	if(pressedDown == true){
		ball.style.top = postionTop + 4 + 'px';
	}

}

function startScript(){
	document.addEventListener('keyup', keyUp);
	document.addEventListener('keydown', keyDown);
	setInterval(ballMove, 10);


	// set the ball at the center of the screen
	var ball = document.getElementById('ball');

	ball.style.top = (window.innerHeight - 200) / 2 + 'px';
	ball.style.left = (window.innerWidth - 200) / 2 + 'px';

}

document.addEventListener('DOMContentLoaded', startScript);
