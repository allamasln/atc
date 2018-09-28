export class AlertBox {

	constructor(type = 'base', width) {

		this._types = ['base', 'error', 'warning', 'success'];


		this._x_position = 'middle';
		this._y_position = 'bottom';
		this._width = 300;
	
		
		
		
		this._body = document.body;
		this.build(String(type));


	}

	build(type) {
		if (this.box) this.destroy();

		let box = '<div id="alertsBox">';
		box +=        '<ul class="alertsBox-list">';
		box +=        '</ul>';
		box +=    '</div>';


		this._body.insertAdjacentHTML('afterbegin', box);

		this.box = document.getElementById("alertsBox");

		this.current_type = type;

		
		this.box_list = this.box.firstChild;

		this.hide();
	}

	

	set current_type(value) {
		this._types.forEach((type) => this.box.classList.remove(`box-${type}`))
		this.box.classList.add(`box-${value}`);
		this._current_type = value;
		
	}

	get current_type() {

		return this._current_type;
	}

	destroy() {

 		this._body.removeChild(this.box);
 		this._length = 0;
 		delete this.box;
 		delete this.box_list
	}	

	addAlert(alert) {
		this.box_list.insertAdjacentHTML('afterbegin', `<li class="alertsBox-list-item">${alert}</li>`);
	
	}

	cleanAlertBox(){
		this.box_list.innerHTML = '';
		
	}

	
	show() {
		this.box.style.display = "block"; 
	}

	hide() {
		this.box.style.display = "none"; 
	}
}


