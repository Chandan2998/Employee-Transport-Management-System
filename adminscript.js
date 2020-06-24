var button = document.getElementById("enter");
var vbutton = document.getElementById("venter");
var input = document.getElementById("userinput");
var dvinput = document.getElementById("drivevinput");
var vinput = document.getElementById("vehicleinput");
var einput = document.getElementById("employeeinput");
var uldrive = document.getElementById("drive");
var ulvehicle = document.getElementById("vehicle");

/* var ul = document.querySelector("ul"); */

function inputLength() {
	return input.value.length;
}
function dvinputLength() {
	return dvinput.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createTextNode(" is assigned to "));
	li.appendChild(document.createTextNode(dvinput.value));
	uldrive.appendChild(li);
	input.value = "";
	dvinput.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0 && dvinputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 && dvinputLength() > 0) {
		createListElement();
	}
}

function myFunction() {
	uldrive.removeChild(uldrive.childNodes[0]);
  }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function vinputLength() {
	return vinput.value.length;
}
function einputLength() {
	return einput.value.length;
}

function vcreateListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(einput.value));
	li.appendChild(document.createTextNode(" to be Boarded in "));
	li.appendChild(document.createTextNode(vinput.value));
	ulvehicle.appendChild(li);
	vinput.value = "";
	einput.value = "";
}

function vaddListAfterClick() {
	if (vinputLength() > 0 && einputLength() >0) {
		vcreateListElement();
	}
}

function vaddListAfterKeypress(event) {
	if (vinputLength() > 0 && einputLength() >0 && event.keyCode === 13) {
		vcreateListElement();
	}
}

function myFunctionv() {
	ulvehicle.removeChild(ulvehicle.childNodes[0]);
  }


vbutton.addEventListener("click", vaddListAfterClick);
vinput.addEventListener("keypress", vaddListAfterKeypress);





