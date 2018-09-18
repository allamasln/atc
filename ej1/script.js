var forms = document.getElementsByTagName('form');

var total = forms.length;

for (var i = 0; i < total ; i++)
{

	forms.item(i).addEventListener("submit",
            function(event) {
                event.preventDefault();
                alert(this.id);
                },
  				false);
}


