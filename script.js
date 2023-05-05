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

displayBook = (book, index) => {
    let div = document.createElement('div');
    div.setAttribute('data-index', index);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id', 'removeButton');
    removeButton.setAttribute('style', 'margin: 5px 0px 0px 5px;');
    removeButton.onclick = () => {
        div.style.display = "none";
    }

    for (const key in book) {
        let value = book[key];
        if (key === "Read") {
            value = `<span class="read-value">${value}</span>`;
        }
        div.innerHTML += `${key}: ${value} <br>`;
    }

    let updateButton = document.createElement('button');
    updateButton.textContent = "Update";
    updateButton.onclick = () => {
        let index = div.getAttribute('data-index');
        let book = myLibrary[index];

        book.Read = book.Read === 'Yes' ? 'No' : 'Yes';

        // update value on screen
        let readValueSpan = div.querySelector('.read-value');
        readValueSpan.textContent = book.Read;
    }

    div.appendChild(updateButton);
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
    const book = new Book(nameInput.value, authorInput.value, pageInput.value, isRead);
    myLibrary.push(book);

    // get index of the new book object in myLibrary array
    const index = myLibrary.indexOf(book);

    // pass book object and index to displayBook function
    displayBook(book, index);

    // clear input fields
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    yesRadio.checked = false;
    noRadio.checked = false;

    form.style.display = "none";
}
