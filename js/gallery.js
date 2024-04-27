// Styling for gallery backgrounds

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const specialSections = document.querySelectorAll('div.gallery');

  specialSections.forEach(section => {
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      section.style.setProperty('--scroll-down-opacity', '1');
      section.style.setProperty('--scroll-up-opacity', '0');
    } else {
      // Scrolling up
      section.style.setProperty('--scroll-down-opacity', '0');
      section.style.setProperty('--scroll-up-opacity', '1');
    }
  });

  lastScrollY = currentScrollY; // Update last scroll position
});
