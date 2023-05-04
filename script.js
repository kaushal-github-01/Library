const books = document.querySelector('.books');
const button = document.querySelector('button');

let myLibrary = [];

function Book(name, author, page, isRead) {
    this.Name = name
    this.Author = author
    this.Page = page
    this.Read = isRead
}

function addBookToLibrary() {
    let name = prompt("What is the name?");
    let author = prompt("Who is the author?");
    let page = prompt("How many pages are there?");
    let isRead = prompt("Have you read it yet?");

    const book = new Book(name, author, page, isRead);
    myLibrary.push(book);
    displayBook(myLibrary);
}

button.onclick = addBookToLibrary;

// DIsplaying it on the screen

displayBook = (arr) => {
    let lastElement = arr[arr.length - 1];
    let div = document.createElement('div');

    for (const key in lastElement) {
        div.innerHTML += `${key}: ${lastElement[key]} <br>`;
    }
    books.appendChild(div);
}