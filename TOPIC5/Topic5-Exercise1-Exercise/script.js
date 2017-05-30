var num = [0];
num[1] = 1; num[2] = 5; num[3] = 6;
num[4] = 90; num[5] = 20; num[6] = 10;

var intervalStart;
var intervalStop;

var currentDice;
// display first value
for(var dis = 0; dis < num.length; dis++){
	console.log(num[dis] + 1);
}
// 
var sortLast = num.length - 1;
for(var sortFirst = 0; sortFirst < num.length/2; sortFirst++){
	
		var temp = num[sortFirst];
		num[sortFirst] = num[sortLast];
		num[sortLast] = temp;
		//console.log(num[sortFirst]);
		sortLast--;
}

for(var dis = 0; dis < num.length; dis++){
	console.log(num[dis] + 1);
}

function roll(){
	number = Math.ceil(Math.random()*6);
	currentDice.className = 'side' + number ;
}

function stopRoll(){

		clearInterval(intervalStart);
		clearInterval(intervalStop);	



	number = Math.ceil(Math.random()*6);
	currentDice.className = 'side' + number ;

	var nextElement = currentDice.nextSibling.nextSibling;
	nextElement.innerHTML = "you rolled " + num[number];
}

function diceFace(){
	currentDice = this;

	intervalStart = setInterval(roll, 80);
	intervalStop = setInterval(stopRoll, 2000);


	
}

function rollDice(){
	currentDice = this.previousSibling.previousSibling;
	intervalStart = setInterval(roll, 80);
	intervalStop = setInterval(stopRoll, 2000);


	//this.innerHTML = 'you rolled ' + num[number] ;
}



function myload(){
	var dice = document.getElementsByTagName('div');
	for(var i = 0; i < dice.length; i++){
		dice[i].addEventListener('click', diceFace);
	}

	var p = document.getElementsByTagName('p');
	for(var j = 0; j < p.length; j++){
		p[j].addEventListener('click', rollDice);
	}


}

document.addEventListener('DOMContentLoaded',myload);
