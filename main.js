function headfun(){
	document.getElementById('head').style.display = "none";
}

function more(){
	document.getElementById('section-b').style.display = "block";
	document.getElementById('body').style.height = "1350px";
}

function less(){
	document.getElementById('section-b').style.display = "none";
	document.getElementById('body').style.height = "1050px";
}

function dmore(){
	document.getElementById('section-b').style.display = "none";
	document.getElementById('body').style.height = "1050px";
}

function addDecision(){
	document.getElementById('addDecision').style.display = "block";
}

function addDecisiontoList(){
	document.getElementById('addDecision').style.display = "none";

	var decision = document.getElementById('textOfaddDecision').value;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(decision));
	document.getElementById("list").appendChild(li);
}


function gotoindex(){
	window.location.href = 'index.html';
}

function gototroll(){
	window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
