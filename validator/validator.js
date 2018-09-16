function calculate() {

	if (validate() == true) {

		//Qué hacer
	
	}

}

function validate() { 
			
var obj_form = document.getElementById("form");
var validable = ["INPUT", "SELECT", "TEXTAREA", "DATALIST", "OUTPUT"];
var errors = 0;

	for (var i = 0; i < obj_form.children.length; i++) {
		//Variable para el tag
		var checkingTag = obj_form.children[i].tagName;

		//Check if child is validable
		if (validable.includes(checkingTag) == true) {		
			//Comprobar el tipo de campo (Ahora mismo no se hace) * ¿Es necesario?
			//Comprobar si el usuario ha rellenado el campo
			if (obj_form.children[i].value === "" || obj_form.children[i].value == 0 || obj_form.children[i].value === 0) {
				obj_form.children[i].className = "error";
				errors++;
			}
			else { 
				obj_form.children[i].className = "good";
			}
		}
	}

if (errors == 0) { return true; }
else { return false; }
}

document.getElementById("calculate").onclick = function() { calculate(); };

