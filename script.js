document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    
    // Toggle menu visibility and change icon
    button.addEventListener('click', () => {
        const isHidden = menu.classList.toggle('hidden');
        
        if (isHidden) {
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });

    // Close menu on link click (for smooth scrolling behavior)
    const mobileLinks = menu.querySelectorAll('a[href^="#"]');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
});