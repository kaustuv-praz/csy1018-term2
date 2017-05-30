function person(firstName, lastName, address, age){
	this.fName = firstName;
	this.lName = lastName;
	this.add = address;
	this.aged = age;

	this.newName = changeName;

}

function changeName(newName){
	this.fName = newName;
}

function startScript(){

	var person1 = new person('kaustuv', 'prajapati', 'suryabinayak', 19);

	person1.newName('susmita');

	alert(person1.fName);
}

document.addEventListener('DOMContentLoaded', startScript);
