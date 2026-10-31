// ======================================
// HUDA JAMEEL — PERSONAL JOURNAL
// Main JavaScript
// ======================================


// 1. Language Toggle

const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {

    const isArabic = language === "ar";

    // Update document direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.body.dir = isArabic ? "rtl" : "ltr";

    // Translate all bilingual elements
    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach((element) => {

        element.textContent = isArabic
            ? element.dataset.ar
            : element.dataset.en;

    });

    // Update language button
    if (languageToggle) {
        languageToggle.textContent = isArabic ? "English" : "العربية";
    }

    // Update page title
    document.title = isArabic
        ? "هدى جميل | مدونتي الشخصية"
        : "Huda Jameel | My Personal Journal";

}


// Language button event
if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        const currentLanguage = document.documentElement.lang;

        const newLanguage = currentLanguage === "en"
            ? "ar"
            : "en";

        setLanguage(newLanguage);

    });

}


// 2. Back To Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 3. Initialize Website

document.addEventListener("DOMContentLoaded", () => {

    setLanguage(document.documentElement.lang || "en");

});


// ======================================
// END OF SCRIPT
// ======================================