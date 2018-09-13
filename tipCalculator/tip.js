function calculateTip() {
			
			var obj_bill = document.getElementById("bill");
			var bill = obj_bill.value;
			
			var obj_service = document.getElementById("service");
			var service = obj_service.value;
			
			var obj_people = document.getElementById("people");
			var people = obj_people.value;

			var alerts = document.getElementById("alerts");
			var each = document.getElementById("each");
			var tip = document.getElementById("tip");
			
			alerts.innerHTML = ""; 
			each.classList.remove("on");
			alerts.classList.remove("on");
			var alert = "";
			var error = [];
			var total = 0;
			
	
			validateField(obj_bill, "empty");
			validateField(obj_service, "empty");
			
			
			if (error.length === 0) {
				alerts.classList.remove("on");
				alerts.className = "off";
				if(people === "" || people <=1){

					error = [];
					people = 1, obj_people.value = people;
					each.className = "off";

					showResult();	
				
				}  else if(people > 1) {
					
					error = [];
					each.className = "on";
					
					showResult();

				}

			} else {
				alerts.classList.remove("off");
				alerts.className = "on";			

				alerts.innerHTML = "<a href='#' onclick='closeAlert()'>x</a>";
				alerts.innerHTML += "Please enter values";

				
					error.forEach(field => {
					  field.className = "error";
					});

				tip.innerHTML = 0.00;
				each.className = "off";

			}
				
			function calculateTotal() {
				
				total = (bill * service) / people;
				total = Math.round(total * 100) / 100;
				total = total.toFixed(2);

				return total;
			}

			function showResult() {

				tip.innerHTML = calculateTotal();
			}
			function validateField(field, type){

				switch (type) {
					case 'empty':

						if(
							field.value === "" || 
							field.value == 0 || 
							field.value === 0) {
							
							error.push(field);
						} else {
							
							
							field.classList.remove("error");
						}

					break;
				}
				
			}

			
			
			return false;
		}