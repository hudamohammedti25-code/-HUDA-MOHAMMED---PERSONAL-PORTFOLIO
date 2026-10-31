// =====================================
// 1. LANGUAGE SWITCHING
// =====================================

const languageToggle = document.getElementById('languageToggle');

let currentLanguage = document.documentElement.lang || 'en';

function setLanguage(language) {
    currentLanguage = language;

    // Update page direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';

    // Translate all elements
    const elements = document.querySelectorAll('[data-en][data-ar]');

    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });

    // Update language button
    if (languageToggle) {
        languageToggle.textContent =
            language === 'en' ? 'العربية' : 'English';
    }

    // Update browser tab title
    document.title = language === 'en'
        ? 'Huda Jameel | Personal Portfolio'
        : 'هدى جميل | الموقع الشخصي';
}

// Language button event
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
    });
}

// Set initial language
setLanguage(currentLanguage);


// =====================================
// 2. BACK TO TOP BUTTON
// =====================================

const backToTopButton = document.getElementById('backToTop');

function updateBackToTopButton() {
    if (!backToTopButton) return;

    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Show or hide button while scrolling
window.addEventListener('scroll', updateBackToTopButton, {
    passive: true
});

// Scroll smoothly to the top
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Check button visibility when page loads
updateBackToTopButton();