import { AlertBox } from './AlertBox.class';
import { InputText } from './fields/InputText.class';

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

	_displayInLine(invalidField, errorMessage) {

	    if (invalidField.nextSibling.nextSibling == null) { //Funciona pero ver como mejorarlo
		let errorToDisplay = `<p class=error> ${ errorMessage } </p>`;
		invalidField.parentElement.insertAdjacentHTML('beforeend', errorToDisplay);
		}

	}
	_cleanInLine(form) {

		for (let field of form) //se repite por cada field
		{	
			if (field.nextSibling.nextSibling != null) { 
				if (field.nextSibling.nextSibling.className == "error") {	
					let elementsToDelete = form.getElementsByClassName("error");
					elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
				}
			}		
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

		this._cleanInLine(this._form);

		//let validFields = event.querySelectorAll(':valid');

		
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

		let errorMessage = `Error: ${ errorValidationMessage } (${ nameInvalidField }) ${ errorTitleMessage }.`;

		this._alerts.push(errorMessage);	

		let inputText = new InputText(invalidField);

		/*console.log(inputText);
		console.log(inputText.input);
		console.log(inputText.value);
		console.log(inputText.type);*/
		//inputText.checkType();
		//console.log(inputText.value);
		//inputText.value = "hola hola hola"; //Funciona pero no se queda costante
		//console.log(inputText.value);

		let invalidFields = form.querySelectorAll(':invalid');

		let getType = event.target.dataset.displayalerts;
		// console.log(getType);
		let displayType = "";
		switch (getType) {
		    case "inline":
		    	this._displayInLine(invalidField, errorMessage);
		    	console.log(this);
		        break;
		    case "alertbox":
		        displayType = "El tipo de display es alertbox";
				console.log(displayType);
		        break;
		    case "lol":
		        displayType = "El tipo de display es lol";
		        console.log(displayType);
		        break;
		    case undefined:
		        displayType = "No tiene display, es undefined";
		        console.log(displayType);
		        break;
		    default:
		    	displayType = "Tipo desconocido";
		    	console.log(displayType);
		}

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
