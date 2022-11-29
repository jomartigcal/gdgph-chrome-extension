$( document ).ready(function() {
    getEvents()
});

function getEvents() {
	$.get("https://gdg.community.dev/api/event?chapter=605", function(data, status) {
		displayEvents(data.results)
	})
}

function displayEvents(events) {
	var eventString = ""
	for(i=0; i<events.length; i++) {
		var event = events[i]
		eventString += "<br /><br /><a href='" + event.url + "' target='_blank'>" + event.title + "</a>"
	}

	document.getElementById("events").innerHTML = eventString
}
