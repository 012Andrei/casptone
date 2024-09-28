let sidebarOpen = false; 
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.open-btn');
const dateTimeDisplay = document.getElementById('dateTime'); 
const mainContent = document.querySelector('.main-content'); 

function toggleSidebar() {
    sidebarOpen = !sidebarOpen; 
    sidebar.classList.toggle('active'); 

    if (sidebarOpen) {
        toggleButton.style.left = '260px'; 
        mainContent.classList.add('active'); 
    } else {
        toggleButton.style.left = '10px'; 
        mainContent.classList.remove('active'); 
    }
}


function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDateTime = now.toLocaleString('en-PH', options).replace('at ', '');
    document.getElementById('dateTime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);




