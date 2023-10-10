function updateClock() {
    // Get current date and time
    const now = new Date();
  
    // Extract hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format the time as HH:MM:SS
    const time = `${hours}:${minutes}:${seconds}`;
  
    // Display the time on the webpage
    document.getElementById('clock').textContent = time;
  }
  
  // Call updateClock function every second
  setInterval(updateClock, 1000);