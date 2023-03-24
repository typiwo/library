// Load in the book container
const bookContainer = document.querySelector('.book-container');

// Load in buttons button
const newBookButton = document.querySelector('#new-book-button');
const addBookButton = document.querySelector('#add-book-button');
const cancelButton = document.querySelector('#cancel-button');

// Define an array to store books
let myLibrary = [];

// Define a Book constructor
function Book(title, author, pageNum, hasRead) 
{
    this.title = title
    this.author = author
    this.pageNum = pageNum
    this.hasRead = hasRead
}

// Function to add a new book to library
function addBookToLibrary(book)
{
    myLibrary.push(book);
}

// Function to create a div containing a book and its information
function createBookCard(book)
{
    // Create a div for the book to hold all info
    let bookDiv = document.createElement('div');

    // Give a class to the div
    bookDiv.classList.add('book');

    // Create child divs for: title, author, pageNum, hasRead
    let bookTitle = document.createElement('div');
    bookTitle.setAttribute('id', 'book-card-title');
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement('div');
    bookAuthor.setAttribute('id', 'book-card-author');
    bookAuthor.textContent = book.author;

    let bookNumPages = document.createElement('div');
    bookNumPages.setAttribute('id', 'book-card-num-pages');
    bookNumPages.textContent = book.pageNum;

    let bookHasRead = document.createElement('div');
    bookHasRead.setAttribute('id', 'book-card-has-read');
    bookHasRead.textContent = book.hasRead;

    // Append the info divs to the bookDiv
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookNumPages);
    bookDiv.appendChild(bookHasRead);

    // Append the newly created bookDiv to the bookContainer
    bookContainer.appendChild(bookDiv);

}

// Function to loop through myLibrary and display the books on the page
function displayBooks(bookList)
{
    // Iterate over the books in our library
    for (let i = 0; i < bookList.length; i++)
    {
        createBookCard(bookList[i]);
    }
}

// BUTTON FUNCTIONALITY
// Opens the new book form
newBookButton.addEventListener("click", newBookButtonClick, false);

function newBookButtonClick()
{
    document.querySelector(".form-popup").style.display = "block";
}

// Adds a book
addBookButton.addEventListener("click", addBookButtonClick, false);

function addBookButtonClick(event)
{
    event.preventDefault();

    const form = document.querySelector('form');
    
    // Get user inputs
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const numPagesInput = document.querySelector('#num-pages');
    const readInput = document.querySelector('#read');

    // Create a new Book object
    let newBook = new Book(titleInput.value, authorInput.value, numPagesInput.value, readInput.value);

    // Create a new card for the book
    createBookCard(newBook);

    // Add the book to our library
    addBookToLibrary(newBook);

    // Reset form after click
    form.reset();
}

// Cancel button -- closes form
cancelButton.addEventListener("click", cancelButtonClick, false);

function cancelButtonClick()
{
    const form = document.querySelector('form');
    
    // reset form
    form.reset();
    // close form
    document.querySelector(".form-popup").style.display = "none";
}

// Create some books to add to myLibrary
const book1 = new Book('book1', 'tyler', '223', 'yes');
const book2 = new Book('book2', 'aaron', '125', 'no');
const book3 = new Book('book3', 'mike', '412', 'yes');

// Add books to myLibrary
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks(myLibrary);

