document.addEventListener('DOMContentLoaded', start);

function start(){
	var select = document.getElementById('heading');
	select.addEventListener('click', onClicked);
}

function onClicked(){
	var select = document.getElementById('heading');
	alert(select.offsetTop + "  " + select.offsetLeft);
	document.addEventListener('keyup', onPressed);
}

function onPressed(event){
	var select = document.getElementById('heading');
	var top = select.offsetTop;
	var left = select.offsetLeft;

	select.style.offsetTop = top + 20 + 'px';
	select.style.offsetLeft = left + 20 + 'px';
	//alert(select.offsetTop + "  " + select.offsetLeft);
}

// function onClicked(event){
// 	var select = document.getElementById('heading');
// 	var selectTop = select.offsetTop;
// 	var selectLeft = select.offsetLeft;
// 	if(event.keyCode == 37){
// 		select.style.left = selectLeft - 100 + 'px'; 
// 	}
// 	if(event.keyCode == 38){
// 		select.style.top = selectTop - 100 + 'px'; 
// 	}
// 	if(event.keyCode == 39){

// 		select.style.left = selectLeft + 100 + 'px'; 
// 	}
// 	if(event.keyCode == 40){
// 		select.style.top = selectTop + 100 + 'px'; 
// 	}
// }