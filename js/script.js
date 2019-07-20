function calculateInsurance() {
	var name = document.getElementById("inputname").value;
	var age = Number(document.getElementById("inputage").value);
	var horse = Number(document.getElementById("inputhorse").value);
	var country = document.getElementById("selectcountry").value;

	if (country == "Austria") {
		var result = ((horse * 100)/(age + 50)).toFixed(2);
		var resultbox = document.getElementById("resultbox")
		resultbox.innerHTML = "Hello " + name + ", your insurance costs " + result + "€";

	}else if (country == "Hungary") {
		var result = ((horse * 120)/(age + 100)).toFixed(2);
		var resultbox = document.getElementById("resultbox")
		resultbox.innerHTML = "Hello " + name + ", your insurance costs " + result + "€";

	}else if (country == "Greece") {
		var result = ((horse * 150)/((age + 3) + 100)).toFixed(2);
		var resultbox = document.getElementById("resultbox")
		resultbox.innerHTML = "Hello " + name + ", your insurance costs " + result + "€";
	}


}


document.getElementById("btn").addEventListener("click", calculateInsurance, false)