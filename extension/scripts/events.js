$( document ).ready(function() {
    getEvents()
});

function getEvents() {
	const request = new XMLHttpRequest();
	request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/events?&sign=true&photo-host=public&page=50&status=past,upcoming&group_urlname=gdgphilippines', true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status != 200) {
				console.log("Unable to get events...")
				return;
			}
			displayEvents(JSON.parse(request.responseText).results)
		}
	};
	request.send();
}

function displayEvents(events) {
	var eventString = ""
	for(i=events.length-1; i>0; i--) {
		var event = events[i]
		eventString += "<br /><br /><a href='" + event.event_url + "'>" + event.name + "</a>"
	}

	document.getElementById("events").innerHTML = eventString
}
