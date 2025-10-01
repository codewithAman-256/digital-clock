// Digital clock: shows HH:MM:SS and AM/PM, updates every second

function pad(n){
  return n.toString().padStart(2, '0');
}

function updateClock(){
  const now = new Date();

  let hours = now.getHours(); // 0-23
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  // Convert to 12-hour
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const hh = pad(hours);
  const mm = pad(minutes);
  const ss = pad(seconds);

  document.getElementById('time').textContent = `${hh}:${mm}:${ss}`;
  document.getElementById('ampm').textContent = ampm;
}

// Run immediately so user doesn't wait 1s
updateClock();
// Then update every second
setInterval(updateClock, 1000);
