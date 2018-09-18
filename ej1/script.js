var forms = document.getElementsByTagName('form');
alert("hay " + forms.length + " formularios");


for (var form of forms) {
	if (form.classList.contains("validate")) {
		
		form.addEventListener("submit",
        function(event) {
            event.preventDefault();
            alert(this.id);
            },
				false);
	}
}



