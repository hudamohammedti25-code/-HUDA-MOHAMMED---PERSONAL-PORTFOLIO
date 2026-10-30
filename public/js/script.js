const languageToggle = document.getElementById('languageToggle');

let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    languageToggle.textContent =
        currentLanguage === 'en' ? 'العربية' : 'English';
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show or hide button while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll smoothly to the top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});