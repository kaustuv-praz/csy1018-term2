function setBorderEffect(){
	//alert();
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

	var div = document.getElementsByTagName('div')[0];
	div.style.border = randomBorderSize + 'px ' + divBorderEffect[randomBorderEffect] + ' ' + divColor[randomColor] ;
	div.style.backgroundColor = divColor[randomBgColor];
}

function startScript(){
	var link = document.getElementsByTagName('a');
	link[0].addEventListener('click', setBorderEffect);
}

document.addEventListener('DOMContentLoaded', startScript);