import { AlertBox } from './AlertBox.class';

export class FormValidator {
	
	constructor(form) {

		this._box;
		this._form = form;

		this._form.addEventListener('submit', this._onSubmit.bind(this), true);
		this._form.addEventListener("invalid", this._eachInvalidFieldonSubmit.bind(this), true);

		this._count_invalid = 0;	
		this._errors = [];
	}

	_mark_errors(inputs) { 
		
		inputs.forEach((input) => input.classList.add('input-error'))
	}

	_clean_mark_errors(form) { 

		for (let input of form) {
		
			input.classList.remove('input-error');
		}				
	}

	_onSubmit(event) {
	
		event.preventDefault();
		
		this._clean_mark_errors(this._form);
		
		this._box.cleanAlertBox();
		this._box.current_type = "success";
		this._box.addAlert("Validado correctamente");
	}

	_eachInvalidFieldonSubmit(event) {
		
		event.preventDefault();

		let { 
			currentTarget: form, 
			target: input

		} = event;

		let {
			name: name_field_invalid,
			title: err_msg_title,
			validationMessage: err_msg_validation
		
		} = input;

		let msg_error = 
		`
			${ name_field_invalid } 
			${ err_msg_title } 
			${ err_msg_validation }
		`
		;
						
		let inputs_invalid = form.querySelectorAll(':invalid'); 

		this._errors.push(msg_error);
		
		if (this._count_invalid == 0) {
			
			this._errors = [];

			if (typeof this._box === "undefined"){
				
				this._box = new AlertBox('error', 300);
			} 		
		}

		if(this._count_invalid == inputs_invalid.length) {

			
			this._clean_mark_errors(form);
			this._mark_errors(inputs_invalid);

			this._box.cleanAlertBox();

			this._errors.forEach((alert) => this._box.addAlert(alert));
			
			this._box.show();
			
			this._count_invalid = 0;
		} else {
			this._count_invalid++;
		}
	}	
}
