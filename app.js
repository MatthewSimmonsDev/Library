const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const listContainer = document.querySelector('#list-container');
const overlay = document.querySelector('#overlay');
const cancelBtn = document.querySelector('#cancel');
const submitBtn = document.querySelector('#submit');
const form = document.querySelectorAll('.form-input');
const formTitle = document.querySelector('#form-title');
const formAuthor = document.querySelector('#form-author');
const formPages = document.querySelector('#form-pages');
const readStatus = document.querySelector('#form-read');

let myLibrary = [];
let btnsArr = Array.from(form);

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

Book.prototype.info = function(){
  return(`${title} by ${author}, ${pages}, ${read}`);
}

// Create book card and populate with data
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
  
  // Form functions
  function openForm(){
    overlay.style.display = 'block';
  }
  
  function submitForm(){
    acceptInput();
    for(let i = myLibrary.length - 1; i < myLibrary.length; i++){
      createCard(i);

    }
    resetForm();
    closeForm();
  }
  
  function acceptInput(){
    let title = formTitle.value;
    let author = formAuthor.value;
    let pages = formPages.value;
    let read = 'Not read';
    if (readStatus.checked){
      read = 'Read';
    }
    myLibrary.push(new Book(title, author, pages, read) );
    read = false;
  }
  
  function closeForm(){
    resetForm();
    overlay.style.display = 'none';
  }
  
  function resetForm(){
    
    for(let i = 0; i < btnsArr.length; i++){
      btnsArr[i].value = '';
    }
  }
  
  // joke
  function learnToRead(){
    window.open("https://en.wikipedia.org/wiki/Reading", "_blank");
  }
  
  
  yesBtn.addEventListener('click', openForm);
  noBtn.addEventListener('click', learnToRead);
  cancelBtn.addEventListener('click', closeForm);
  submitBtn.addEventListener('click', submitForm);