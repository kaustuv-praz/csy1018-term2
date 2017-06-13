

function onClick(){
	var name = [];
	name[0] = 'Nepal';
	name[1] = 'India';
	name[2] = 'Argentina';
	name[3] = 'Brazil';
	name[4] = 'China'
	name[5] = 'France'
	name[6] = 'Italy';
	name[7] = 'USA';

	var selected = [];
	var isSelectedFirst;
	var isSelectedSecond;

	var oldUl = document.getElementsByTagName('ul');
	if(oldUl.length > 0){
		oldUl[0].parentNode.removeChild(oldUl[0]);
	}

	var ul = document.createElement('ul');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(ul);

	for(var i = 0; i < name.length/2; i++){
		newTeam = false;
		
		while(newTeam == false){
			var firstName = Math.floor(Math.random() * 8);
			var alreadySelected = false;
			for(var j = 0; j <= selected.length; j++){

				if(name[firstName] == selected[j]){
					alreadySelected = true;
				}	
			}

			if(alreadySelected == false){
				newTeam = true;
				selected.push(name[firstName]);
				console.log(selected);
			}
		}
		newTeam = false;
		while(newTeam == false){
			var secondName = Math.floor(Math.random() * 8);
			var alreadySelected = false;
			for(var j = 0; j <= selected.length; j++){

				if(name[secondName] == selected[j]){
					alreadySelected = true;
				}	
			}

			if(alreadySelected == false){
				newTeam = true;
				selected.push(name[secondName]);
				console.log(selected);

			}
		}


		var li = document.createElement('li');
		var textNode = document.createTextNode(name[firstName] + " VS " + name[secondName]);
		li.appendChild(textNode);
		ul.appendChild(li);
		
	}
}

function startScript(){
	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', startScript);