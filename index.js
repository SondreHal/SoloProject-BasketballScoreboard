let homeCount = 0;
let homeScoreContainer = document.querySelector('#home-score-container');
let homeScore = document.querySelector('#home-score');
let homeNumBehind = document.querySelector('#home-num-behind');

let guestCount = 0;
let guestScoreContainer = document.querySelector('#guest-score-container');
let guestScore = document.querySelector('#guest-score');
let guestNumBehind = document.querySelector('#guest-num-behind');

let leadingTeamText = document.querySelector('#leading-team-text');

let timerSeconds = document.querySelector('#timerSeconds');
let seconds = 0;

let timerMinutes = document.querySelector('#timerMinutes');
let minutes = 0;

// HOME SCORE
function home(num) {
	homeCount += num;
	// CAPS HOME SCORE AT 99
	if (homeCount > 99) {
		homeCount = 99;
		homeScore.textContent = homeCount;
		checkLead();
	} else {
		// DECIDES IF TO ADD 0 BEFORE HOME SCORE OR NOT
		if (homeCount < 10) {
			homeScore.textContent = '0' + homeCount;
			checkLead();
		} else {
			homeScore.textContent = homeCount;
			checkLead();
		}
	}
}

// GUEST SCORE
function guests(num) {
	guestCount += num;
	// CAPS GUEST SCORE AT 99
	if (guestCount > 99) {
		guestCount = 99;
		guestScore.textContent = guestCount;
		checkLead();
	} else {
		// DECIDES IF TO ADD 0 BEFORE GUEST SCORE OR NOT
		if (guestCount < 10) {
			guestScore.textContent = '0' + guestCount;
			checkLead();
		} else {
			guestScore.textContent = guestCount;
			checkLead();
		}
	}
}

// RESET GAME
function newGame() {
	// HOME SCORE
	homeCount = 0;
	homeScore.textContent = '00';
	homeNumBehind.textContent = '00';

	// GUEST SCORE
	guestCount = 0;
	guestScore.textContent = '00';
	guestNumBehind.textContent = '00';

	// SECONDS
	seconds = 0;
	timerSeconds.textContent = '0' + seconds;

	// MINUTES
	minutes = 0;
	timerMinutes.textContent = '0' + seconds;

	checkLead();
}

function checkLead() {
	if (homeCount > guestCount) {
		// HOME LEADS
		homeScoreContainer.style.boxShadow = '0px 0px 15px 1px hsla(341, 100%, 50%, 1)';
		guestScoreContainer.style.boxShadow = '';
		leadingTeamText.textContent = 'HOME TEAM IS IN THE LEAD!';
	} else if (homeCount < guestCount) {
		// GUEST LEADS
		homeScoreContainer.style.boxShadow = '';
		guestScoreContainer.style.boxShadow = '0px 0px 15px 1px hsla(341, 100%, 50%, 1)';
		leadingTeamText.textContent = 'GUEST TEAM IS IN THE LEAD!';
	} else if (homeCount === 0 && guestCount === 0) {
		// NO SCORE
		homeScoreContainer.style.boxShadow = '';
		guestScoreContainer.style.boxShadow = '';
		leadingTeamText.textContent = 'NO TEAM HAS SCORED!';
	} else {
		// TIED
		homeScoreContainer.style.boxShadow = '';
		guestScoreContainer.style.boxShadow = '';
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
