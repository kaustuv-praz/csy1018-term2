document.addEventListener('DOMContentLoaded', startScript);

function startScript(){
	var circle = document.getElementById('circle');
	circle.addEventListener('click', circleClicked);
	circle.style.opacity = '1';


	document.addEventListener('keydown',keyDown);
	//setInterval();

}
var timer = 0;

function keyDown(event){
	var code = event.keyCode;
	var circle = document.getElementById('circle');
	console.log(code);
	var positionLeft = circle.offsetLeft;
	var positionTop = circle.offsetTop;

	clearInterval(timer);
	if (code == 37){
		//circle.style.left = positionLeft - 20 + 'px';
		timer = setInterval(moveLeft, 10);
		clearInterval(timer);
	}
	else if (code == 38){
		circle.style.top = positionTop - 20 + 'px';
	}
	else if (code == 39){
		circle.style.left = positionLeft + 10 + 'px';
	}
	else if (code == 40){
		circle.style.top = positionTop + 10 + 'px';
	}

}

function moveLeft() {
	var circle = document.getElementById('circle');
	var positionLeft = circle.offsetLeft;
	circle.style.left = positionLeft - 10 + 'px';
}

function circleClicked(){
	var circle = document.getElementById('circle');
	circle.style.backgroundColor = 'blue';		// changes the background of the div ie circle when clicked

	//setInterval(transparency, 10);

	var opacity = parseFloat(circle.style.opacity);

	// code that make the circle more transparent
	// circle.style.opacity = opacity - 0.1;

	// code that make the circle more opaque when click
	//circle.style.opacity = opacity + 0.1;

	circle.style.color = 'yellow';		
	
	//alert("The Button was pressed");


	// to move the object on right direction each time the key is pressed
	var positionLeft = circle.offsetLeft;
	//document.write("yes");
	var positionTop = circle.offsetTop;
	circle.style.left = positionLeft + 10 + 'px';

}

function transparency(){
	var circle = document.getElementById('circle');
	var opacity = parseFloat(circle.style.opacity);

	circle.style.opacity = opacity - 0.01;
}