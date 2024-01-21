// get current year

const currentYearElement = document.querySelector('#copyright');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear} Tayler Sue Hickman`;

// get last modified date
function getLastModifiedDate() {
    const lastModifiedElement = document.querySelector('#lastModified');
    const lastModified = document.lastModified;
    lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}</em>`;
}

getLastModifiedDate();


