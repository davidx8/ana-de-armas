// Hamburger menu

document.addEventListener("DOMContentLoaded", function() {
    // Toggle the 'clicked' class for the hamburger menu link
    var menuLink = document.querySelector('li a[href="#hamb"]');
    if (menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of the link
            var nav = document.querySelector('nav');
            nav.classList.toggle('clicked');
        });
    }

    // Attach click events to other links but allow them to follow their href for scrolling
    var otherLinks = document.querySelectorAll('nav li:not(:last-child) a');
    otherLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var nav = document.querySelector('nav');
            if (nav.classList.contains('clicked')) {
                nav.classList.remove('clicked');
            }
        });
    });
});
