// Scroll detection for the title

window.addEventListener('scroll', () => {
    setTimeout(() => {
        if (window.pageYOffset > 0) {
            document.documentElement.classList.add('scrolled');
        } else {
            document.documentElement.classList.remove('scrolled');
        }
    }, 50); // Short delay before applying the class
});
