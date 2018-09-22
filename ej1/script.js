window.onload = initValidators;

function initValidators() {
	
	var forms = document.getElementsByTagName('form');



	for (var form of forms) {

		if (form.classList.contains("validate")) {

			form.addEventListener("submit", formValidate, false); //El false hace que el flujo sea "bubbling" en vez de "capture), (bubbling: desde hijos a padres)
    		form.addEventListener("invalid", formValidateNot, true);

		}
	}

	function formValidateNot() {
		event.preventDefault();

		var invalidField = event.target;
		var invalidForm = event.currentTarget;
		var errorMessageTitle = event.target.title;
		var errorMessageVldmsg = event.target.validationMessage;
		var alertDiv = document.getElementById("alerts");
		var body = document.getElementsByTagName("BODY")[0];		
		var invalidFields = invalidForm.querySelectorAll( ":invalid" )

		console.log(invalidField);
		console.log(invalidFields); 


		if (alertDiv == null) { //si no existe un div, aquí se crea //

		body.insertAdjacentHTML('afterbegin', '<div id="alerts" class="alert"></div>');

		} else { alertDiv.style.display = "block"; } //si existe. lo hace block para mostrarlo

		//marcar en rojo los campos con error

		//invalidField.classList.add("error");

		//rellenar el div con los mensajes de error

		//		for (var i = 0; i < invalidFields.length; i++) {

			//label = invalidForm.querySelector( "label[for=" + invalidFields[ i ].id + "]" );
			//var errorMessage = "<li>" + invalidField.name + " " + errorMessageTitle + " " + errorMessageVldmsg + "</li>";
			var errorMessage = "<p>" + invalidField.name + " " + errorMessageTitle + " " + errorMessageVldmsg + "</p>";
			
			console.log("for");
			console.log(errorMessage);

			alertDiv.insertAdjacentHTML('afterbegin', errorMessage);
			//alertDiv.innerHTML(errorMessage);
			//console.log(label);

		//}

		//
		
	}

	function formValidate() {
	    
	    event.preventDefault(); //Evita el funcionamiento por defecto del event
	    alert(this.id); //Te devuelve el id del form en el que está el botón pulsado
	    var formToValidate = document.getElementById(this.id);

	    for (var input of formToValidate) {
	    	alert(input.type);



	    	/*switch (input.type)
	    	{
	    		case "text": console.log(input);
	    		break;
	    		case "number": console.log(input);
	    		break;
	    	}
			*/
	    }

	    /* 

	    Detectar entradas del form :    TEXTAREA
	    								SELECT(OPTIONS)
	    								INPUT.TEXT
	    								INPUT.EMAIL  
	    								INPUT.NUMBER 
	    								INPUT.PASSWORD
	    								INPUT.RANGE 
	    								INPUT.CHECKBOX 
	    								INPUT.RADIO 
	    								INPUT.COLOR 
	    								INPUT.BUTTON
	    								INPUT.SUBMIT  
	    								INPUT.DATE 
	    								INPUT.MONTH 
	    								INPUT.WEEK 
	    								INPUT.TIME 
	    								INPUT.DATETIME 
	    								INPUT.DATETIME-LOCAL 
	    								
	    */

		/* Ejecuta función fieldValidate que de momento ejecute un alert por cada entrada diciendo el tipo de entrada qu es
	    								
		// Agrega a index.html  entradas para los formularios 2 y 3

		/* 

			El resultado del programa debe dar 3 formularios en la misma página, cuando presione el submit del formularioN 
			que alerte con la id del formulario (Linea 18: alert(this.id);) y que alerte por cada entrada el tipo de entrada que es.
		*/   								 

	}

}

		





