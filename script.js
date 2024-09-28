let sidebarOpen = false; // Track the sidebar state
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.open-btn');
const dateTimeDisplay = document.getElementById('dateTime'); // Get the date/time display
const mainContent = document.querySelector('.main-content'); // Get the main content

function toggleSidebar() {
    sidebarOpen = !sidebarOpen; // Toggle the state
    sidebar.classList.toggle('active'); // Activate or deactivate the sidebar

    // Move the date/time display and toggle button based on the sidebar state
    if (sidebarOpen) {
        toggleButton.style.left = '260px'; // Move the toggle button right as well
        mainContent.classList.add('active'); // Shift the main content to the right
    } else {
        toggleButton.style.left = '10px'; // Move the toggle button back to the original position
        mainContent.classList.remove('active'); // Shift the main content back
    }
}

// Initialize the date/time update
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDateTime = now.toLocaleString('en-PH', options).replace('at ', ''); // Remove "at"
    document.getElementById('dateTime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
