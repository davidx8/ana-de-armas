// Styling for navigation bar background

document.addEventListener('scroll', function() {
    const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // Calculate the main transition point based on scroll
    let colorStop = Math.min(100, Math.max(0, scrollPercentage * 100));

    // Determine the spread of the gradient transition to make it more fluid
    let gradientSpread = 10;
    let startColorStop = Math.max(0, colorStop - gradientSpread);
    let endColorStop = Math.min(100, colorStop + gradientSpread);

    // Update the background gradient of the navbar for a smooth transition
    document.getElementById('nav-bar').style.backgroundImage = 
        `linear-gradient(to right, 
            rgb(12, 97, 7) 0%, 
            rgb(12, 97, 7) ${startColorStop}%, 
            rgb(172, 18, 154) ${endColorStop}%, 
            rgb(172, 18, 154) 100%)`;
});
