import { AlertBox } from './AlertBox.class';

export class FormValidator {
	
	constructor(form) {

		this._box;
		this._form = form;

		this._form.addEventListener('submit', this._onSubmit.bind(this), true);
		this._form.addEventListener("invalid", this._eachInvalidFieldonSubmit.bind(this), true);

		this._invalidCounter = 0;
		this._errors = [];
	}

	_markInvalidfields(fields) { 
		
		fields.forEach((field) => field.classList.add('input-error'));
	}

	_unmarkInvalidFields(form) { 

		for (let field of form) {
		
			field.classList.remove('input-error');
		}				
	}

	_onSubmit(event) {
	
		event.preventDefault();
		
		this._unmarkInvalidFields(this._form);
		
		this._box.cleanAlertBox();
		this._box.currentType = "success";
		this._box.addAlert("Validado correctamente");
	}

	_eachInvalidFieldonSubmit(event) {
		
		event.preventDefault();

		//Guardar todas las variables

		let { 
			currentTarget: form, 
			target: invalidField

		} = event;

		let {
			name: nameInvalidField,
			title: errorTitleMessage,
			validationMessage: errorValidationMessage
		
		} = invalidField;

		let errorMessage = 
		`
			${ nameInvalidField } 
			${ errorTitleMessage } 
			${ errorValidationMessage }
		`
		;
						
		let invalidFields = form.querySelectorAll(':invalid'); 

		if (this._invalidCounter > invalidFields.length) { 

			this._invalidCounter = invalidFields.length; 
		}

		if(this._invalidCounter == invalidFields.length) { //Comprobar campos y resetear alertbox
			

			while (this._box.alertList.hasChildNodes()) { //Borrar todos los campos del alertlist  
   				this._box.alertList.removeChild(this._box.alertList.firstChild);
			}

			this._invalidCounter = 1;
			
		} else {
			this._invalidCounter++;
		}

		this._errors.push(errorMessage);

		if (this._box === undefined) {

			this._box = new AlertBox('error', 300);
			console.log("nueva box creada");

		}

		this._box.addAlert(errorMessage);
		this._markInvalidfields(invalidFields);
		this._box.show();	

	}	
}
