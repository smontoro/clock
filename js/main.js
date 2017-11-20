
function showTime() {

	var date = new Date()
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
		seconds.className = "ampm"

	//this needs to run in the document before it is printed in the text node

	minutes = checkTime(minutes)
    seconds = checkTime(seconds)

	if (hours < 12) {
		seconds = seconds + " a.m."
	} else if (hours >= 12) {
		hours = hours - 12 
		seconds = seconds + " p.m."
	}


	document.getElementById("main").textContent = hours + ":" + minutes + ":" + seconds.toLowerCase()

	//what's this extra function for?
	setTimeout(function () {
        showTime()
    }, 1000)


};

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}

	return i 
};