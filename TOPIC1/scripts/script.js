document.addEventListener('click', contentLoaded);

alert("Hello Again!!");



print5();
print5();

function print5(){

	console.log(1);
	console.log(2);
	console.log(3);
	console.log(4);
	console.log(5);

}


function contentLoaded(){
	var element = document.getElementById('heading');
	element.innerHTML = "hello only";

	var paragraph = document.getElementById('para');
	para.innerHTML = "new paragraph is here !!"
}
