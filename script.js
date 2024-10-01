// Countdown target time in milliseconds (30 days, 2 hours, 23 minutes, 34 seconds from now)
const countdownDuration = 30 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000 + 23 * 60 * 1000 + 34 * 1000;
const countdownTime = Date.now() + countdownDuration;

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = Date.now();
  const timeLeft = countdownTime - now;

  // If the countdown is over
  // if (timeLeft <= 0) {
  //   clearInterval(countdownInterval);
  //   document.getElementById("countdown").innerHTML = "EXPIRED";
  //   return;
  // }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  // console.log(days);

  document.getElementById("date").textContent = days;
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;


}, 1000);
