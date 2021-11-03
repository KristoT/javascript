var ourObject = {
	name = 'Juku'
};



while (true) {

	var propertyName = prompt("What property do u want to name");
	if (propertyName === "") {
		break;
	}
	if (typeof ourObject[propertyName] === 'undefined') {

	} else {
		alert('the value of ' + propertyName + 'is ' + ourObject)
	};
};