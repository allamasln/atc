window.onload = initValidators;

function initValidators() {
	
	var forms = document.getElementsByTagName('form');



	for (var form of forms) {

		if (form.classList.contains("validate")) {

			
			form.addEventListener("submit", formValidate, false); //El false hace que el flujo sea "bubbling" en vez de "capture), (bubbling: desde hijos a padres)
		}
	}

	function formValidate() {
	    
	    event.preventDefault(); //Evita el funcionamiento por defecto del event

	    alert(this.id); //Te devuelve el id del form en el que está el botón pulsado
	    var FORM_TO_VALIDATE = document.getElementById(this.id);

	    for (var input of FORM_TO_VALIDATE) {
	    	alert(input.type);

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

		





