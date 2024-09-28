<div class="sidebar" id="sidebar">
    <h2>LGU 4</h2>
    <ul>
        <li><a href="#main-content">Home</a></li>
        <li><a href="#" id="openModal">Request Clearance</a></li>
        <li><a href="#">Request Certificate</a></li>
        <li class="dropdown">
            <a href="#">Document Tracking</a>
            <button class="toggle-btn" id="dropdown-toggle">+</button> 
            <ul class="dropdown-menu">
                <li><a href="#">Track Clearance</a></li>
                <li><a href="#">Track Certificate</a></li>
                <li><a href="#">History</a></li>
            </ul>
        </li>
    </ul>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var toggleButton = document.getElementById('dropdown-toggle');
        var dropdownMenu = document.querySelector('.dropdown-menu');

        toggleButton.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show'); /
            toggleButton.textContent = dropdownMenu.classList.contains('show') ? '-' : '+'; 
        });
    });
</script>
