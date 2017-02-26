function loadJSON(jsonPath) {
	var request = new XMLHttpRequest();
	request.open("GET", jsonPath, false);
	request.send(null);
	return JSON.parse(request.responseText);
}
