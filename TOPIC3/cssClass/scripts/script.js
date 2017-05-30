function startScript(){
	var circle = document.getElementById('circle');
	circle.className = "ball1";

	var class1 = document.getElementsByClassName('ball1');
	class1[0].style = 'background: green;';
}

document.addEventListener('DOMContentLoaded', startScript);
