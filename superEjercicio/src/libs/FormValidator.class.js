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

	_markInvalidfields(inputs) { 
		
		inputs.forEach((input) => input.classList.add('input-error'));
	}

	_unmarkInvalidField(form) { 

		for (let input of form) {
		
			input.classList.remove('input-error');
		}				
	}

	_onSubmit(event) {
	
		event.preventDefault();
		
		this.__unmarkInvalidField(this._form);
		
		this._box.cleanAlertBox();
		this._box.currentType = "success";
		this._box.addAlert("Validado correctamente");
	}

	_eachInvalidFieldonSubmit(event) {
		
		event.preventDefault();

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
		
		if (this._invalidCounter == 0) {
			
			this._errors = [];

			if (typeof this._box === "undefined"){
				
				this._box = new AlertBox('error', 300);
			} 		
		}

		if(this._invalidCounter == invalidFields.length) {

			
			this.__unmarkInvalidField(form);
			this.__markInvalidfields(invalidFields);

			this._box.cleanAlertBox();

			this._errors.forEach((alert) => this._box.addAlert(alert));
			
			this._box.show();
			
			this._invalidCounter = 0;
		} else {
			this._invalidCounter++;
		}
	}	
}
