<?php
date_default_timezone_set('Asia/Manila'); 

$currentDateTime = date('F j, Y h:i:s A'); 
?>

<link rel="stylesheet" href="navbar.css">

<div class="navbar" id="navbar">
    <div class="current-date-time" id="dateTime">
        <?php echo str_replace("at ", "", $currentDateTime); ?>
    </div>
    <button class="open-btn" onclick="toggleSidebar()">&#9776;</button>
    <div class="nav-links">
        <a href="#main-content">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
</div>

</script>
