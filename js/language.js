const localizedKey = "SinGalaPortfolio_SelectedLanguage";

loadLanguagePref();

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem(localizedKey, langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem(localizedKey)) {
        var langSaved = localStorage.getItem(localizedKey);
        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {
    console.log(langSelected);

    document.documentElement.lang = langSelected;
    saveLanguagePref(langSelected);
}