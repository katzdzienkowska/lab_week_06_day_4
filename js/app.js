document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');

  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonDelete);

})

const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  const listItem = document.createElement('li');
  listItem.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
  readingList.appendChild(listItem);
  event.target.reset();
};

const handleButtonDelete = function() {
  const removeAllItems = document.querySelector('#reading-list');
  removeAllItems.textContent = ''; 
};

