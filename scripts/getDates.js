document.addEventListener("DOMContentLoaded", function ()) {
    // current year
    const currentYear = new Date().getFullYear();

    // Set copyright year 
    const copyrightParagraph = document.getElementById("copyright");
    if (copyrightParagraph) {
        copyrightParagraph.textContent = "©  2024  Tayler Hickman   United States of America"
    }
    // last modified date of doc
    const lastModifiedDate = document.lastModified;

    // set last mod date in 2nd pg
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph){
        lastModifiedParagraph.textContent = "Last Modified: ${lastModifiedDate}";
    }
}