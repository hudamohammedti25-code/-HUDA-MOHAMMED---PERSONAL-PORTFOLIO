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


// 2. Dark Mode Toggle

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {

    const isDark = theme === "dark";

    // Apply selected theme
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    // Update theme button appearance
    if (themeToggle) {

        themeToggle.textContent = isDark ? "☀" : "☾";

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );

        themeToggle.title = isDark ? "Light mode" : "Dark mode";

    }

    // Save theme preference
    try {

        localStorage.setItem("huda-theme", theme);

    } catch (error) {

        console.warn("Theme preference could not be saved.");

    }

}


// Theme button event
if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.dataset.theme || "light";

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        setTheme(newTheme);

    });

}


// 3. Back To Top Button

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


// 4. Initialize Website

document.addEventListener("DOMContentLoaded", () => {

    // Restore saved theme
    let savedTheme = "light";

    try {

        savedTheme = localStorage.getItem("huda-theme") || "light";

    } catch (error) {

        console.warn("Saved theme could not be accessed.");

    }

    setTheme(savedTheme);

    // Initialize language
    setLanguage(document.documentElement.lang || "en");

});


// ======================================
// END OF SCRIPT
// ======================================