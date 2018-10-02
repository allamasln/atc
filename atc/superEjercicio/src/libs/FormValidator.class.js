import { AlertBox } from './AlertBox.class';

export class FormValidator {
	
	constructor(form) {

		this._box;
		this._form = form;

		this._form.addEventListener('submit', this._onSubmit.bind(this), true);
		this._form.addEventListener("invalid", this._eachInvalidFieldonSubmit.bind(this), true);

		this._invalidCounter = 0;
		this._alerts = [];
	}

	_markInvalidFields(fields) { 
		
		fields.forEach((field) => field.classList.add('input-error'));
	}

	_unmarkInvalidFields(form) { 

		for (let field of form)
		{
		
			field.classList.remove('input-error');
		}				
	}

	_isFirstAttemptTosubmit() {
		
		return (this._box === undefined) ? true : false;
	}

	_isFistInvalidField() { 

		return (this._invalidCounter == 0) ? true : false;
	}

	_isLastInvalidField(totalInvalids) { 

		return (this._invalidCounter == totalInvalids-1) ? true : false;
	}

	_onSubmit(event) {
	
		event.preventDefault();	

		this._unmarkInvalidFields(this._form);

		if (this._isFirstAttemptTosubmit()) 
		{

			this._box = new AlertBox('success', 300);	
		}
		
		this._box.reset();
		this._box.currentType = "success";
		this._box.addAlert('Validado correctamente');
		this._box.show();
	}

	_eachInvalidFieldonSubmit(event) {

		event.preventDefault();
		
		//
		//  ▒
		//Guardar todas las variables 
		//
		//  ▒
		//__^__
		//*************** COMENTARIO DE COMENTARIOS:
		//^^^^^^  Que comentario es este tino?, "guardar todas las variables"? no lo estás viendo en el código.???? 
		//^^^^^^  ¡¡¡  ESTAS ENSUCIANDO EL CODIGO !!!
		//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		//--------------------------------------------------------------------------------------------------------------

		let { 
			currentTarget: form, 
			target: invalidField

		} = event;

		let {
			name: nameInvalidField,
			title: errorTitleMessage,
			validationMessage: errorValidationMessage
		
		} = invalidField;

		let errorMessage = `Error: ${ errorValidationMessage } (${ nameInvalidField }) ${ errorTitleMessage }.`;

		this._alerts.push(errorMessage);		
			
		let invalidFields = form.querySelectorAll(':invalid');


		if(this._isFistInvalidField())
		{
			if(this._isFirstAttemptTosubmit())
			{
				
				this._box = new AlertBox('error', 300);
			
			} else 
			{	
				
				this._unmarkInvalidFields(form);
				this._box.reset();
				this._alerts = [errorMessage];
			}
		
		}

		if (this._isLastInvalidField(invalidFields.length)) 
		{
			
			invalidFields[0].focus();
			this._markInvalidFields(invalidFields);
		
			this._alerts.forEach((alert) => this._box.addAlert(alert, 'last'));

			this._box.currentType = "error";
			this._box.show();
			
			this._invalidCounter = -1;
		}

		this._invalidCounter++;			

	}	
}
