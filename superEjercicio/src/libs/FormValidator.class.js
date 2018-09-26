import { AlertBox } from './AlertBox.class';

export class FormValidator {

	constructor(form) {

		this.form = form;
		this.form.addEventListener('submit', this.onSubmit, false);
		this.form.addEventListener("invalid", this.onInvalid, true);
		
	}

	onSubmit(event) {
		event.preventDefault();
		
		alert(this.id);
		
		let formToValidate = document.getElementById(this.id);

	    for (let input of formToValidate) {
	    	alert(input.type);
	    }   
	}

	onInvalid(event) {
		
		event.preventDefault();

		const box_msg_validation = new AlertBox('middle', 'bottom', 300, 'auto');
		const { 
			currentTarget: form, 
			target: input

		} = event;

		const {
			name: name_field_invalid,
			title: err_msg_title,
			validationMessage: err_msg_validation
		
		} = event.target;

			
		const mark_errors = (inputs) => inputs.forEach( (input) => input.classList.add('input-error') );
		const clean_mark_errors = (form) => { 

			for (let input of form) {
			
				input.classList.remove('input-error');
			}				
		}
				
		const inputs_invalid = form.querySelectorAll(':invalid'); 
		
		clean_mark_errors(form);
		mark_errors(inputs_invalid);


		const msg_error = 
		`
			${ name_field_invalid } 
			${ err_msg_title } 
			${ err_msg_validation }
		`
		;

		box_msg_validation.addAlert(msg_error);
		box_msg_validation.show();
	}	
}