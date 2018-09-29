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

		console.log("//////////////////////");

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

		this._errors.push(errorMessage);

		if (this._box === undefined) {

			console.log(this._box);
			console.log("indefinido!");
			this._box = new AlertBox('error', 300);
			console.log("nueva box creada");

		}

		if (invalidFields.length > 0) { //creo que se puede quitar

			this._box.addAlert(errorMessage);
			this._box.show();	

		}

/*		if (this._invalidCounter == 0) {

			console.log(this._invalidCounter);

			this._errors = [];

			if (typeof this._box === undefined){
				
				this._box = new AlertBox('error', 300);
				this._invalidCounter++;
				console.log(this._invalidCounter);
				console.log(invalidFields.length);

			} 		
		} */

		if(this._invalidCounter == invalidFields.length) {
			
			this._unmarkInvalidFields(form);
			this._markInvalidfields(invalidFields);
			this._box.cleanAlertBox();

			//this._errors.forEach((alert) => this._box.addAlert(alert));
			
			//this._box.show();
			
			this._invalidCounter = 0;
		} else {
			this._invalidCounter++;
			console.log(this._invalidCounter);
		}
	}	
}
