/*document.body.contentEditable = 'true';
document.designMode = 'on';
alert('Page editing enabled!');*/

document.addEventListener("DOMContentLoaded", function () {

	document.querySelector("#starter").addEventListener("click", startTimer);

	var timer;
	function startTimer() {
		timer = Date.now();
		interval = setInterval(updateTime, 100);
		document.querySelector("#starter").innerHTML = "Cancel Trouble Timer";
		document.querySelector("#starter").removeEventListener("click",startTimer);
		document.querySelector("#starter").addEventListener("click",stopTimer);
	}
	
	function stopTimer() {
		clearInterval(interval);
		document.querySelector("#countdown").innerHTML = "10 seconds";
		document.querySelector("#starter").innerHTML = "Cancel Trouble Timer";
		document.querySelector("#starter").removeEventListener("click",stopTimer);
		document.querySelector("#starter").addEventListener("click",startTimer);
	}

	function updateTime() {
		var left = 10 - (Date.now() - timer) / 1000;
		left = Math.round(10*left)/10;
		if (left < 0) {
			document.querySelector("#countdown").innerHTML = "0 seconds";
			timeIsUp();
		} 
		else {
			document.querySelector("#countdown").innerHTML = left + " seconds";
		}
	}
	
	var watchID = navigator.geolocation.watchPosition(function (position) {
		setPosition(position.coords.latitude, position.coords.longitude);
	});
	
	function setPosition(lat, lon) {
		document.querySelector("#coordinates").innerHTML = lat+", " +lon;
	}
	function timeIsUp() {
		clearInterval(interval);
	}
})

document.addEventListener("DOMContentLoaded", function() {
	    var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
})