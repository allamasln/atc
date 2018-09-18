function calculateTip() {
			
//Variable definition
	var bill = document.getElementById("bill").value;
	var service = document.getElementById("service").value;
	var people = document.getElementById("people").value;
	var paragraph = document.getElementById("p");
	var required = document.createTextNode("Required Field");
	
//Validate input
	if (bill === "" || service == 0) {
		document.getElementById("alerts").style.display = "block";
		if (bill === "") { 
		document.getElementById("bill").className = "error";
		if (paragraph.innerHTML == "") { paragraph.appendChild(required); }
		
		}  // this adds the error class
		if (service == 0) { document.getElementById("service").className = "error"; }
		//Mejorar alert
		//alert("Please enter values");
		return;
	}
	document.getElementById("bill").className = "good";
	document.getElementById("service").className = "good";
//Check people input
	if (people === "" || people <= 1) {
		people = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

//Calculate tip	
	var total = (bill * service) / people;

//Round to two decimals
	total = Math.round(total*100) / 100;

//To have 2 digits after decimal point
	total = total.toFixed(2);

//Display the tip --- confuso ?¿
	document.getElementById("total").style.display = "block";
	closeAlert();
	document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load -- comprobar
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call the function
document.getElementById("calculate").onclick = function() { calculateTip(); };

function closeAlert() {
	document.getElementById("alerts").style.display = "none";
}
