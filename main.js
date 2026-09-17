let isSwahili = false;

function changeLanguage() {

    if (isSwahili === false) {

        document.getElementById("home").innerText = "NYUMBANI";
        document.getElementById("projects").innerText = "MIRADI YETU";
        document.getElementById("products").innerText = "BIDHAA";
        document.getElementById("contacts").innerText = "MAWASILIANO";

        document.getElementById("title").innerText = "MIRADI YETU";

        document.getElementById("heading").innerText =
            "KAZI ZA KUCHOMELEA NA CHUMA";

        document.getElementById("description").innerText =
            "Tunatengeneza bidhaa mbalimbali za chuma kulingana na mahitaji yako.";

        document.getElementById("languageBtn").innerText = "English";

        isSwahili = true;

    } else {

        document.getElementById("home").innerText = "HOME";
        document.getElementById("projects").innerText = "OUR PROJECTS";
        document.getElementById("products").innerText = "PRODUCTS";
        document.getElementById("contacts").innerText = "CONTACTS";

        document.getElementById("title").innerText = "OUR PROJECTS";

        document.getElementById("heading").innerText =
            "WELDING & METAL WORKS";

        document.getElementById("description").innerText =
            "We make different metal products according to your needs.";

        document.getElementById("languageBtn").innerText = "Kiswahili";

        isSwahili = false;
    }
}