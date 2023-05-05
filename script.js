const books = document.querySelector('.books');
const addBookButton = document.querySelector('#add-book');
const form = document.querySelector('form');
const submitButton = document.querySelector('#submitButton');

let myLibrary = [];

function Book(name, author, page, isRead) {
    this.Name = name
    this.Author = author
    this.Page = page
    this.Read = isRead
}

addBookButton.onclick = () => {
    form.style.display = "block";
};

// DIsplaying it on the screen

displayBook = (arr) => {
    let lastElement = arr[arr.length - 1];
    let div = document.createElement('div');

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id', 'removeButton');
    removeButton.setAttribute('style', 'margin-top: 5px;');
    removeButton.onclick = () => {
        div.style.display = "none";
    }

    for (const key in lastElement) {
        div.innerHTML += `${key}: ${lastElement[key]} <br>`;
    }
    div.appendChild(removeButton);
    books.appendChild(div);
}

submitButton.onclick = (event) => {
    event.preventDefault();

    // get input values
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const pageInput = document.getElementById('page');
    const yesRadio = document.getElementById("yes-radio");
    const noRadio = document.getElementById("no-radio");

    const name = nameInput.value;
    const author = authorInput.value;
    const page = pageInput.value;

    // get selected radio button value
    let isRead;
    if (yesRadio.checked) {
        isRead = yesRadio.value;
    } else if (noRadio.checked) {
        isRead = noRadio.value;
    } else {
        isRead = null;
    }

    // create new book object and add to library
    const book = new Book(name, author, page, isRead);
    myLibrary.push(book);
    displayBook(myLibrary);

    // clear input fields
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    yesRadio.checked = false;
    noRadio.checked = false;

    form.style.display = "none";
}
