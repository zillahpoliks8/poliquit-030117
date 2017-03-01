function clickMeBEH() {
	document.getElementByid('first').innerHTML = "Ching";
	}

function addme() {
	var x = document.getElementByid('fn').value;
	var y = document.getElementByid('sn').value;
	var sum = parseInt(x) + parseInt(y);
	document.getElementByid('answer').innerHTML = sum;
	}