var forms = document.getElementsByTagName('form');
alert("hay " + forms.length + " formularios");


for (var form of forms) {

	form.addEventListener("submit",
        function(event) {
            event.preventDefault();
            alert(this.id);
            },
				false);
}



