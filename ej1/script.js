window.onload = initValidators;

function initValidators() {
	
	var forms = document.getElementsByTagName('form');

	for (var form of forms) {
		if (form.classList.contains("validate")) {
			
			form.addEventListener("submit", validate, false);
		}
	}

	function validate() {
	    
	    event.preventDefault();

	    alert(this.id);
	}

}

		





