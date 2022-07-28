//Getting the current date and separately each of its components
gettingTime = () => {
	const days = [
		"MON",
		"TUE",
		"WED",
		"THU",
		"FRI",
		"SAT",
		"SUN",
	]
	const date = new Date();
	const dayNumber = date.getDay() - 1;
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();
	let ampm
	let title = document.querySelector('.clock__title');
	//Working with hour
	if (0 <= hour && hour < 4) {
		title.textContent = 'Good Night!';
		document.body.style.background = `linear-gradient(180deg, #23379a,#09133c)`;
	} if (4 <= hour && hour < 11) {
		title.textContent = 'Good Morning!';
		document.body.style.background = `linear-gradient(180deg, #5960c6,#e4e2ae)`;
	} if (12 <= hour && hour < 17) {
		title.textContent = 'Good Day!';
		document.body.style.background = `linear-gradient(340deg, #f6e278,#0dcfef)`;
	} if (17 <= hour && hour <= 23) {
		title.textContent = 'Good Afternoon!';
		document.body.style.background = `linear-gradient(340deg, #3f62b7,#7f261d)`;
	}

	if (hour >= 12) {
		ampm = 'PM'
	} else {
		ampm = 'AM'
	};
	//===============
	if (hour > 12) {
		hour %= 12;
	}
	//===============
	if (hour < 10) {
		hour = '0' + hour;
	}
	//Working with minutes

	if (minute < 10) {
		minute = '0' + minute;
	}

	//Working with seconds

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	// Working with DOM

	document.querySelector('.clock__day').textContent = days[dayNumber];
	document.querySelector('.clock__hour').textContent = hour;
	let colon = document.querySelectorAll('.clock__colon');
	colon.forEach(function (elem) {
		elem.textContent = ' : ';
	})
	document.querySelector('.clock__minute').textContent = minute;
	document.querySelector('.clock__second').textContent = seconds;
	document.querySelector('.clock__ampm').textContent = ampm;

	setTimeout(gettingTime, 200)
}

window.addEventListener('load', gettingTime);