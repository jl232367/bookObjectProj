const dispButton = document.querySelector('.addNewBook');
const showBtn = document.querySelector('button');
const hobbit = new book ("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const hp1 = new book ("Harry Potter and the socerer's stone", "J.K. Rowling", 300, "Have Read");
const theGreatDivorce = new book ("The Great Divorce", "C.S. Lewis", 195, "Have Read");
let myLibrary = [hobbit, hp1, theGreatDivorce];
let formDisplay = document.getElementById("addNewBookForm");
formDisplay.style.display = "none";

dispButton.addEventListener('click', () => {expandCollapseForm()}
);

displayBooks();


function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function () {
        return title + " by " + author + ", " + pages + "pages, " + read; 
    }
}

function expandCollapseForm () {
    
    if (formDisplay.style.display === "none") {
        formDisplay.style.display = "block";
    } else {
        formDisplay.style.display = "none";
    }
}

function addBookToLibrary () { 
    const newBookTitle = document.getElementById("bookTitle").value;
    const newBookAuthor = document.getElementById("bookAuthor").value;
    const newBookPages = document.getElementById("pageNumber").value;
    const newBookRead = checkReadValue (); 
     //alert(newBookTitle + newBookAuthor + newBookPages + newBookRead);
    const newBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    myLibrary.push(newBook.title);
    displayBooks();
    function checkReadValue () {
        
            const check = document.getElementsByName("read");
            for (let i = 0; i < check.length; i++) {
                if (check[i].checked) {
                    return check[i].value;
                }
            }
        
    }
}

function displayBooks() {
    // I am making this loop to display all the contents of the array holding the objects that contain the Book data
for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector(".container");
    const eachBook = document.createElement("div");
    container.appendChild(eachBook);
    eachBook.setAttribute('class', "eachBook");
    eachBook.setAttribute('id', myLibrary[i].title);
    eachBook.innerHTML = myLibrary[i].bookInfo(); 
    
}
}
/*
function displayBooks() {
    // I am making this loop to display all the contents of the array holding the objects that contain the Book data
for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector(".container");
    const eachBook = document.createElement("div");
    container.appendChild(eachBook);
    eachBook.setAttribute('class', "eachBook");
    eachBook.setAttribute('id', myLibrary[i].title);
    eachBook.innerHTML = myLibrary[i].bookInfo(); 
    
}
}


() => {
    for (let i = 0; i < myLibrary.length; i++) {
        const container = document.querySelector(".container");
        const eachBook = document.createElement("div");
        container.appendChild(eachBook);
        eachBook.setAttribute('class', "eachBook");
        eachBook.setAttribute('id', myLibrary[i].title);
        eachBook.innerHTML = myLibrary[i].bookInfo(); 
        
    }

}
*/