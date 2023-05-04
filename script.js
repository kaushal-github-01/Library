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
}

let noOfBooks = prompt("How many books do you want to add?");

if (noOfBooks > 10) {
    alert("Please enter a no. less then 10 next time");
} else {
    for (let i = 0; i < noOfBooks; i++) {
        addBookToLibrary();
    }
}

const books = document.querySelector('.books');

displayBook = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        let div = document.createElement('div');

        for (const key in arr[i]) {
            div.innerHTML += `${key}: ${arr[i][key]} <br>`;
        }
        books.appendChild(div);
    }
}

displayBook(myLibrary);