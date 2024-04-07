document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuItems');

    menuButton.addEventListener('click', () => {
        // Toggle the visibility of menuItems
        menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
    });

    // Close the menu when a menu item is clicked
    menuItems.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            menuItems.style.display = 'none';
        });
    });
});

