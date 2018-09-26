export class AlertBox {

	constructor(x_position, y_position, width, height) {
		this._x_position = x_position;
		this._y_position = y_position;
		this._width = width;
		this._height = height;
		this.length = 0;
		
		this._body = document.body;
		this.build();
	}

	build() {
		if (this._box) this.destroy();

		let box = '<div id="alertsBox">';
		box +=        '<ul class="alertsBox-list">';
		box +=        '</ul>';
		box +=    '</div>';


		this._body.insertAdjacentHTML('afterbegin', box);

		this._box = document.getElementById("alertsBox");
		this._box_list = this._box.firstChild;

		this.hide();
	}

	setLength(length) {
		this.length = length;
	}

	destroy() {

 		this._body.removeChild(this._box);
 		this.setLength(0);
 		delete this._box;
 		delete this._box_list
	}	

	addAlert(alert) {
		this._box_list.insertAdjacentHTML('afterbegin', `<li class="alertsBox-list-item">${alert}</li>`);
		this.length++;
	}

	cleanAlertBox(){
		this._box_list.innerHTML = '';
		this.setLength(0);
	}

	
	show() {
		this._box.style.display = "block"; 
	}

	hide() {
		this._box.style.display = "none"; 
	}
}


