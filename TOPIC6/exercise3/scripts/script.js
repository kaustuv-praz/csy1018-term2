function addElement(){
	//alert();
	var divElement = document.createElement('div');
	divElement.className = 'block';

	var divColor = [];
	divColor[1] = 'red';
	divColor[2] = 'blue';
	divColor[3] = 'green';
	divColor[4] = 'orange';

	var divBorderEffect = [];
	divBorderEffect[1] = 'solid';
	divBorderEffect[2] = 'dotted';
	divBorderEffect[3] = 'dashed';

	var randomColor = Math.ceil(Math.random() * 4);
	var randomBgColor = Math.ceil(Math.random() * 4);
	var randomBorderEffect = Math.ceil(Math.random() * 3);

	var randomBorderSize = Math.ceil(Math.random() * 10);

//	var div = document.getElementsByTagName('div')[0];
	divElement.style.border = randomBorderSize + 'px ' + divBorderEffect[randomBorderEffect] + ' ' + divColor[randomColor] ;
	divElement.style.backgroundColor = divColor[randomBgColor];


	var body = document.getElementsByTagName('body')[0];
	body.appendChild(divElement);
}


function startScript(){

	var button = document.getElementsByTagName('button');
	button[0].addEventListener('click', addElement);
}

document.addEventListener('DOMContentLoaded', startScript);