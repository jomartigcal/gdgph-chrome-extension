$( document ).ready(function() {
    getEvents()
});

function getEvents() {
	$.get("https://api.meetup.com/2/events?&sign=true&photo-host=public&page=50&status=past,upcoming&group_urlname=gdgphilippines", function(data, status) {
		displayEvents(data.results)
	})
}

function displayEvents(events) {
	var eventString = ""
	for(i=events.length-1; i>0; i--) {
		var event = events[i]
		eventString += "<br /><br /><a href='" + event.event_url + "' target='_blank'>" + event.name + "</a>"
	}

	document.getElementById("events").innerHTML = eventString
}
