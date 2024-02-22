const input= document.querySelector('#favchap');
const button= document.querySelector('#button');
const list= document.querySelector('#list');

button.addEventListener('click', function()  {
    const value = input.value;
    if (input.value){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);

        list.appendChild(li);
        
    } else {
        input.focus();
    }

});
// button.addEventlistener('click', () => {

// }); 
const chaptersArray = getChapterList() || [];

chaptersArray.foreach((chapter) => {
   displayList(chapter);
    
});

