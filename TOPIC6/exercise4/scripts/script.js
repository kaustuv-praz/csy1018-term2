

function luckyDraw(){
	var table = document.createElement('table');
	var tr= document.createElement('tr');
	table.appendChild(tr);
	var selected = [];
	selected[0] = null;

	for(var i = 0; i < 4; i++){
		var newNumber = false;
		while(newNumber == false){
			var oldNumber = false;

			var random = Math.ceil(Math.random() * 10);
			
			for(var j = 0; j <= selected.length; j++){
				if(random == selected[j]){
					oldNumber = true;
				}				
			}

			if(oldNumber == false){
				newNumber = true;
				selected.push(random);
				console.log(selected);
			}

		}
		
		var td = document.createElement('td');
		var tn = document.createTextNode(random);
		td.appendChild(tn);
		tr.appendChild(td);
	}
	
	this.parentNode.appendChild(table);
}

function deleteDraw(){
	var div = document.getElementsByTagName('div')[0];
	var table = document.getElementsByTagName('table');
	
	div.removeChild(table[0]);
}

function startScript(){
	var button = document.getElementsByTagName('button');
	button[0].addEventListener('click', luckyDraw);

	var remove = document.getElementsByTagName('button')[1];
	remove.addEventListener('click', deleteDraw);
}


document.addEventListener('DOMContentLoaded', startScript);