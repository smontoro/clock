function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}

	return i 
};


function showTime() {

	var date = new Date()
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()

	//this needs to run in the document before it is printed in the text node
	if (hours > 12) {
		hours = hours - 12
	}

	minutes = checkTime(minutes)
    seconds = checkTime(seconds)

	document.getElementById("main").textContent = hours + ":" + minutes + ":" + seconds

	//what's this extra function for?
	setTimeout(function () {
        showTime()
    }, 1000)


};

