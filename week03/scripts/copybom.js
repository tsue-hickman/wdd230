const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

// Define getChapterList function
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Initialize chaptersArray properly
let chaptersArray = getChapterList() || [];

// Function to display list item
function displayList(chapter) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;

    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
        // Remove from DOM
        list.removeChild(li);
        // Remove from array and update localStorage
        deleteChapter(chapter);
        input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
}

// Function to delete chapter
function deleteChapter(chapter) {
    // Remove from array
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    // Update localStorage
    setChapterList();
}

// Function to set chapters in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Loop through existing chaptersArray and display them
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for button click
button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value) {
        // Display new chapter
        displayList(input.value);
        // Add to array
        chaptersArray.push(input.value);
        // Update localStorage
        setChapterList();
        // Clear input and focus
        input.value = '';
        input.focus();
    }
});

