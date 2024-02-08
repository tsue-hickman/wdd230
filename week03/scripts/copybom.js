const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function displayList(chapter) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;

    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(chapter);
        input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value) {
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();
        input.value = '';
        input.focus();
    }
});

