function validate(field) {
  var element = getElementById(field);

  if (element.checkValidity()) {
  	
  }


  if(f.elements[0].value == "")
  {
    msg += "- Jugador 1\n";
    ok = false;
  }

  if(f.elements["jugador2"].value == "")
  {
    msg += "- Jugador 2\n";
    ok = false;
  }

  if(f.jugador3.value == "")
  {
    msg += "- Jugador 3\n";
    ok = false;
  }

  if(ok == false)
    alert(msg);
  return ok;
}
