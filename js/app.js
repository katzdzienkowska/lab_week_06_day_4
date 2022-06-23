//our solution:
// document.addEventListener('DOMContentLoaded', () => {

//   const formInput = document.querySelector('#new-item-form');
//   formInput.addEventListener('submit', handleFormSubmit);

//   const button = document.querySelector('#delete-all');
//   button.addEventListener('click', handleButtonDelete);

// })

// const handleFormSubmit = function(event) {
//   event.preventDefault();
//   const readingList = document.querySelector('#reading-list');
//   const listItem = document.createElement('li');
//   listItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
//   readingList.appendChild(listItem);
//   event.target.reset();
// };

// const handleButtonDelete = function() {
//   const removeAllItems = document.querySelector('#reading-list');
//   removeAllItems.textContent = ''; 
// };

////////////////

// lab solution:
document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}


