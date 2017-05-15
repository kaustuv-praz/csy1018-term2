document.addEventListener('DOMContentLoaded', script);

var time = 0, time2 = 0;

function script(){

	alert("Hello Again!!");



	print5();
	print5();

	var head = document.getElementById('heading');
	head.addEventListener('click', headChange);

	var para = document.getElementById('para');
	para.addEventListener('click', paraChange);

	var enter = document.getElementById('mouseenter');
	enter.addEventListener('mouseenter', whenMouseEnter);

	var leave = document.getElementById('mouseleave');
	leave.addEventListener('mouseleave', whenMouseLeave);

	var button = document.getElementById('button');
	button.addEventListener('click', submit);

	
	var write = document.getElementById('write');
	write.addEventListener('keyup', division1);
	
}

function division1(){
	var division = document.getElementById('division1');
	var write = document.getElementById('write');
	division.innerHTML = write.value;
}

function submit(){
	var input = document.getElementById('input');
	alert(input.value);

	var div = document.getElementById('division');
	div.innerHTML = input.value;
}

function whenMouseLeave(){
	var leave = document.getElementById('mouseleave');
	leave.innerHTML = "Please Don't leave ... _/\\_"
}

function whenMouseEnter(){

	var enter = document.getElementById('mouseenter');
	enter.innerHTML = "Stop IT ... Idiot";

}


function print5(){
	console.log(1);
	console.log(2);
	console.log(3);
	console.log(4);
	console.log(5);
}

function headChange(){
	if(time == 0){
		var element = document.getElementById('heading');
		element.innerHTML = "hello only";
		time = 1;
	}else if(time == 1){
		var element = document.getElementById('heading');
		element.innerHTML = "HELLO WORLD";
		time = 0;
	}
}


function paraChange(){
	if(time2 == 0){
		var paragraph = document.getElementById('para');
		para.innerHTML = "new paragraph is here !!";
		time2 = 1;
	}else if(time2 == 1){
		var paragraph = document.getElementById('para');
		para.innerHTML = "This is me The web site with java script. :P";
		time2 = 0;
	}
}

