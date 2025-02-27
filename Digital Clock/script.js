function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM/PM and convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // Convert hours to 12-hour format (0-11)
  hours = hours ? hours : 12; // If hours is 0, set it to 12 (12 AM or 12 PM)

  // Format the time as 12-hour clock with AM/PM
  timeElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
