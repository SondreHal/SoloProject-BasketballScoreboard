let home = document.querySelector("#home");
let guest = document.querySelector("#guest");
let homeBg = document.querySelector("#home-bg");
let guestBg = document.querySelector("#guest-bg");
let leadingTeam = document.querySelector("#leading-team");
let timerS = document.querySelector("#timerS");
let timerM = document.querySelector("#timerM");
let seconds = 0;
let minutes = 0;
let homeCount = 0;
let guestCount = 0;

function home1() {
   homeCount += 1;
   home.textContent = homeCount;
   lead();
}

function home2() {
   homeCount += 2;
   home.textContent = homeCount;
   lead();
}

function home3() {
   homeCount += 3;
   home.textContent = homeCount;
   lead();
}

function guests1() {
   guestCount += 1;
   guest.textContent = guestCount;
   lead();
}

function guests2() {
   guestCount += 2;
   guest.textContent = guestCount;
   lead();
}

function guests3() {
   guestCount += 3;
   guest.textContent = guestCount;
   lead();
}

function newGame() {
   homeCount = 0;
   guestCount = 0;
   home.textContent = 0;
   guest.textContent = 0;
   lead();
}

function lead() {
   if (homeCount > guestCount) {
      homeBg.style.boxShadow = "0px 0px 20px 5px #FFFF00";
      guestBg.style.boxShadow = "0px 0px";
      leadingTeam.textContent = "HOME TEAM IS IN THE LEAD!";
   } else if (homeCount < guestCount) {
      homeBg.style.boxShadow = "0px 0px";
      guestBg.style.boxShadow = "0px 0px 20px 5px #FFFF00";
      leadingTeam.textContent = "GUEST TEAM IS IN THE LEAD!";
   } else if (homeCount === 0 && guestCount === 0) {
      homeBg.style.boxShadow = "0px 0px 0px #FFFF00";
      guestBg.style.boxShadow = "0px 0px 0px #FFFF00";
      leadingTeam.textContent = "NO TEAM HAS SCORED!";
   } else {
      homeBg.style.boxShadow = "0px 0px 0px #FFFF00";
      guestBg.style.boxShadow = "0px 0px 0px #FFFF00";
      leadingTeam.textContent = "BOTH TEAMS ARE TIED!";
   }
}

lead();

function incrementSeconds() {
   seconds += 1;
   if (seconds < 10) {
      timerS.innerText = "0" + seconds;
   } else if (seconds === 60) {
      seconds = 0;
      timerS.innerText = "0" + seconds;
      incrementMinutes();
   } else {
      timerS.innerText = seconds;
   }
}

function incrementMinutes() {
   minutes += 1;
   if (minutes < 10) {
      timerM.innerText = "0" + minutes;
   } else if (minutes === 48) {
      minutes = 0;
      timerM.innerText = "0" + minutes;
   } else {
      timerM.innerText = minutes;
   }
}

let incrementS = setInterval(incrementSeconds, 1000);
