export class AlertBox {

	constructor(type = 'base', width) {

		this._types = ['base', 'error', 'warning', 'success'];

		this._xPosition = 'middle';
		this._yPosition = 'bottom';
		this._width = 300;
			
		this._body = document.body;
	
		this._build(String(type));
	}

	_build(type) {
		
		if (this.box) this.destroy();

		let box = '<div id="alertsBox">';
		box +=        '<ul class="alertsBox-list">';
		box +=        '</ul>';
		box +=    '</div>';

		this._body.insertAdjacentHTML('afterbegin', box);

		this.box = document.getElementById("alertsBox");

		this.currentType = type;
		
		this.alertList = this.box.firstChild;

		this.hide();
	}
	
	set currentType(value) {
		
		this._types.forEach((type) => this.box.classList.remove(`box-${type}`))
		
		this.box.classList.add(`box-${value}`);
		
		this._currentType = value;
	}

	get currentType() {

		return this._currentType;
	}

	addAlert(alert) {
		
		this.alertList.insertAdjacentHTML('afterbegin', `<li class="alertsBox-list-item">${alert}</li>`);	
	}

	cleanAlertBox(){
		
		this.alertList.innerHTML = '';	
	}
	
	destroy() {
		
		this._body.removeChild(this.box);
  		delete this.box;
  		delete this.alertList
	}
	show() {
		
		this.box.style.display = "block"; 
	}

	hide() {
		
		this.box.style.display = "none"; 
	}
}
