let homeCount = 0;
let homeScore = document.querySelector('#home-score');

let guestCount = 0;
let guestScore = document.querySelector('#guest-score');

let leadingTeamText = document.querySelector('#leading-team-text');

let timerSeconds = document.querySelector('#timerSeconds');
let seconds = 0;

let timerMinutes = document.querySelector('#timerMinutes');
let minutes = 0;

// HOME SCORE
function home(num) {
	homeCount += num;
	homeScore.textContent = homeCount;
	checkLead();
}

// GUEST SCORE
function guests(num) {
	guestCount += num;
	guestScore.textContent = guestCount;
	checkLead();
}

// RESET GAME
function newGame() {
	homeCount = 0;
	homeScore.textContent = 0;

	guestCount = 0;
	guestScore.textContent = 0;

	seconds = 0;
	timerSeconds.textContent = '0' + seconds;

	minutes = 0;
	timerMinutes.textContent = '0' + seconds;

	checkLead();
}

function checkLead() {
	if (homeCount > guestCount) {
		// HOME LEADS
		homeScore.style.boxShadow = '0px 0px 10px 5px #ff1500';
		guestScore.style.boxShadow = '0px 0px';
		leadingTeamText.textContent = 'HOME TEAM IS IN THE LEAD!';
	} else if (homeCount < guestCount) {
		// GUEST LEADS
		homeScore.style.boxShadow = '0px 0px';
		guestScore.style.boxShadow = '0px 0px 10px 5px #ff1500';
		leadingTeamText.textContent = 'GUEST TEAM IS IN THE LEAD!';
	} else if (homeCount === 0 && guestCount === 0) {
		// NO SCORE
		homeScore.style.boxShadow = '';
		guestScore.style.boxShadow = '';
		leadingTeamText.textContent = 'NO TEAM HAS SCORED!';
	} else {
		// TIED
		homeScore.style.boxShadow = '';
		guestScore.style.boxShadow = '';
		leadingTeamText.textContent = 'BOTH TEAMS ARE TIED!';
	}
}
checkLead();

function incrementSeconds() {
	seconds += 1;
	if (seconds < 10) {
		timerSeconds.textContent = '0' + seconds;
	} else if (seconds === 60) {
		seconds = 0;
		timerSeconds.textContent = '0' + seconds;
		incrementMinutes();
	} else {
		timerSeconds.textContent = seconds;
	}
}
setInterval(incrementSeconds, 1000);

function incrementMinutes() {
	minutes += 1;
	if (minutes < 10) {
		timerMinutes.textContent = '0' + minutes;
	} else if (minutes === 48) {
		minutes = 0;
		timerMinutes.textContent = '0' + minutes;
		newGame();
	} else {
		timerMinutes.textContent = minutes;
	}
}
