var interval;
var leftPressed = false;
var topPressed = false;
var rightPressed = false;
var downPressed = false;
var slideValue = 0;
var intervalPOpen = 0;
var intervalPClose = 0;

function startScript(){
	changeHead();
	changeBody();

	document.addEventListener('keydown', isKeyDown);
	document.addEventListener('keyup', isKeyUp);

	setInterval(move, 10);

	var close = document.getElementById('closeside');
	close.addEventListener('click', hidePanel);

	var player = document.getElementById('player');
	var opponent = document.getElementById('opponent');
	player.addEventListener('click', showPanel);
	player.addEventListener('click', showPanel);

}

function showPanel(){
	intervalPOpen = setInterval(openSlide, 1);
}

function openSlide(){
	closeInterval(intervalPClose);
	if(slideValue >= 0){
		slideValue -= 2;
		var aside = document.getElementsByClassName('aside');
		aside[0].style.left = window.innerWidth + slideValue + 'px' ;
	}l
}

function hidePanel(){
	
	intervalPClose = setInterval(closeSlide, 1);


}

function closeSlide(){
	closeInterval(intervalPOpen);
	if(slideValue <= 250){
		slideValue +d= 2;
		var aside = document.getElementsByClassName('aside');
		aside[0].style.left = window.innerWidth + slideValue + 'px' ;
	}
}



function move(){
	if(leftPressed == true){
		moveAndSetLeft();
	}
	if(topPressed == true){
		moveAndSetTop();
	}
	if(rightPressed == true){
		moveAndSetRight();
	}
	if(downPressed == true){
		moveAndSetDown();
	}
}

function moveAndSetLeft(){
	var player = document.getElementById('player');
	player.className = 'character standLeft walkLeft';

	var positionLeft = player.offsetLeft;
	player.style.left = positionLeft - 2 + 'px';
}

function moveAndSetTop(){
	var player = document.getElementById('player');
	player.className = 'character standUp walkUp';


	var positionTop = player.offsetTop;
	player.style.top = positionTop - 2 + 'px';
}

function moveAndSetRight(){
	var player = document.getElementById('player');
	player.className = 'character standRight walkRight';

	var positionLeft = player.offsetLeft;
	player.style.left = positionLeft + 2 + 'px';
}

function moveAndSetDown(){
	var player = document.getElementById('player');
	player.className = 'character standDown walkDown';

	var positionTop = player.offsetTop;
	player.style.top = positionTop + 2 + 'px';
}

function isKeyDown(event){
	var code = event.keyCode;

	if(code == 37){
		leftPressed = true;
	}
	if(code == 38){
		topPressed = true;
	}
	if(code == 39){
		rightPressed = true;
	}
	if(code == 40){
		downPressed = true;
	}
}

function isKeyUp(){
	var code = event.keyCode;


	if(code == 37){
		leftPressed = false;

		var player = document.getElementById('player');
		player.className = 'character standLeft';
	}
	if(code == 38){
		topPressed = false;

		var player = document.getElementById('player');
		player.className = 'character standUp';
	}
	if(code == 39){
		rightPressed = false;

		var player = document.getElementById('player');
		player.className = 'character standRight';
	}
	if(code == 40){
		downPressed = false;

		var player = document.getElementById('player');
		player.className = 'character standDown';
	}
}

function changeHead(){

	var head = document.getElementsByClassName('heads');
	var tag = head[0].getElementsByTagName('li');

	for(var i = 0; i < tag.length; i++){
		tag[i].addEventListener('click', setHead);
	}

	// var head0 = document.getElementById('head0');
	// head0.addEventListener('click', setHead);

	// var head1 = document.getElementById('head1');
	// head1.addEventListener('click', setHead);

	// var head2 = document.getElementById('head2');
	// head2.addEventListener('click', setHead);

	// var head3 = document.getElementById('head3');
	// head3.addEventListener('click', setHead);

	// var head4 = document.getElementById('head4');
	// head4.addEventListener('click', setHead);

}

function changeBody(){


	var body = document.getElementsByClassName('bodies');
	var tag = body[0].getElementsByTagName('li');

	for(var i = 0; i < tag.length; i ++){
		tag[i].addEventListener('click', setBody);
	}

	// var body0 = document.getElementById('body0');
	// body0.addEventListener('click', setBody0);

	// var body1 = document.getElementById('body1');
	// body1.addEventListener('click', setBody1);

	// var body2 = document.getElementById('body2');
	// body2.addEventListener('click', setBody2);

	// var body3 = document.getElementById('body3');
	// body3.addEventListener('click', setBody3);

	// var body4 = document.getElementById('body4');
	// body4.addEventListener('click', setBody4);
}


// setting body
function setBody(event){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function setBody0(){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = "url(images/body0.png)";
}

function setBody1(){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = "url(images/body1.png)";
}

function setBody2(){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = "url(images/body2.png)";
}

function setBody3(){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = "url(images/body3.png)";
}

function setBody4(){
	var body = document.getElementsByClassName('body');
	body[0].style.backgroundImage = "url(images/body4.png)";
}


// setting heads
function setHead(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function setHead0(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = "url(images/head0.png)"; 
}

function setHead1(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = "url(images/head1.png)"; 
}

function setHead2(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = "url(images/head2.png)"; 
}

function setHead3(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = "url(images/head3.png)"; 
}

function setHead4(){
	var head = document.getElementsByClassName('head');
	head[0].style.backgroundImage = "url(images/head4.png)"; 
}

document.addEventListener('DOMContentLoaded', startScript);