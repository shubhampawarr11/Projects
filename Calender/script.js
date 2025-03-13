const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

function generateCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const monthName = monthNames[month];
    
    // Set the header
    document.getElementById("month-name").innerText = `${monthName} ${year}`;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Get the total number of days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Get today's date for highlighting
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    // Clear the existing days
    const daysContainer = document.getElementById("days");
    daysContainer.innerHTML = "";

    // Add empty cells for days before the start of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("empty");
        daysContainer.appendChild(emptyCell);
    }

    // Add actual days
    for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement("div");
        dayCell.innerText = day;

        // Highlight today
        if (year === todayYear && month === todayMonth && day === todayDate) {
            dayCell.classList.add("today");
        }

        dayCell.addEventListener("click", () => {
            alert(`You clicked on ${monthNames[month]} ${day}, ${year}`);
        });

        daysContainer.appendChild(dayCell);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    generateCalendar();
}

// Initialize calendar
generateCalendar();
