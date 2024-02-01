document.addEventListener('DOMContentLoaded', () => {
    // Set the copyright information
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent = `© ${currentYear} WDD 230 project BYU Idaho`;

    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
});
