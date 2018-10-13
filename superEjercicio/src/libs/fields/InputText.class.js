export class InputText {

	constructor(obj_input) {

		this.input = obj_input;

		//this.value = "A";

		this.datasetType = this.input.dataset.type;
	}

	checkType() {

		this.tipo = `Tipo: ${ this.input } ${ this.datasetType }.`;

		switch (this.datasetType) {
		    case "tipo1":
		        console.log(this.tipo);
		        break;
		    case "tipo2":
		        console.log("Es de tipo 2");
		        break;
		    case "tipo3":
		        console.log("Es de tipo 3");
		        break;
		    case undefined:
		        console.log("No tiene definido");
		        break;
		    default:
		    	console.log("Tipo desconocido");
		}

		

	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	get type() {
		return this._type;
	}

	set type(value) {
		this._type = value;
	}

}