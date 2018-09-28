import { FormValidator } from './libs/FormValidator.class';


window.onload = initValidators;

 function initValidators() {

	let forms = document.getElementsByTagName('form');

	for (let form of forms) {

		if (form.classList.contains("validate")) {



			let obj_form = new FormValidator(form);		
				
		}
	}
	
}

