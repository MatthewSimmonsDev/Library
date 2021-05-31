const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const listContainer = document.querySelector('#list-container');
const overlay = document.querySelector('#overlay');
const cancelBtn = document.querySelector('#cancel');
const submitBtn = document.querySelector('#submit');
let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

Book.prototype.info = function(){
  return(`${title} by ${author}, ${pages}, ${read}`);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'Read');
const theHobb = new Book('theafsef', 'asdfasdf', '1134', 'not read');
const test = new Book('asdf', 'asdf', '813', 'read');


function createCard(book){
  makeCard();
  fill(book);
    
  }
  
function fill(book){
    
  fillCardTitle(book);
  fillCardAuthor(book);
  fillCardPages(book);
  fillCardRead(book);
    
  }
  
function makeCard(){
    let div = document.createElement('div');
    div.classList.add('book-card');
    listContainer.appendChild(div);
  }
  
  function fillCardTitle(book){
    let title = document.createElement('h3');
    title.classList.add('card-title',  'text');
    title.textContent = myLibrary[book].title;
    let div = document.querySelectorAll('.book-card')[book];
    div.appendChild(title);
  }
  
  function fillCardAuthor(book){
    let author = document.createElement('h3');
    author.classList.add('.card-author',  'text');
    author.textContent = myLibrary[book].author;
    let div = document.querySelectorAll('.book-card')[book];
    div.appendChild(author);
  }
  
  function fillCardPages(book){
    let pages = document.createElement('h3');
    pages.classList.add('card-pages',  'text');
    pages.textContent = myLibrary[book].pages;
    let div = document.querySelectorAll('.book-card')[book];
    div.appendChild(pages);
  }
  
  function fillCardRead(book){
    let read = document.createElement('h3');
    read.classList.add('card-read', 'text');
    read.textContent = myLibrary[book].read;
    let div = document.querySelectorAll('.book-card')[book];
    div.appendChild(read);
  }

  
  myLibrary.push(theHobbit);
  myLibrary.push(theHobb);
  myLibrary.push(test);
  
  for(let i = 0; i < myLibrary.length; i++){
    createCard(i);
  }
  
  function openForm(){
    overlay.style.display = 'block';
  }

  function submitForm(){
    resetForm();
    closeForm();
  }

  function closeForm(){
    resetForm();
    overlay.style.display = 'none';
  }

  function resetForm(){

  }

  function learnToRead(){
    window.open("https://en.wikipedia.org/wiki/Reading", "_blank");
  }
  
  yesBtn.addEventListener('click', openForm);
  noBtn.addEventListener('click', learnToRead);
  cancelBtn.addEventListener('click', closeForm);
  submitBtn.addEventListener('click', submitForm);