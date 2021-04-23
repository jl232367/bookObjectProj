const dispButton = document.querySelector('.displayBooks');
const showBtn = document.querySelector('button');
const hobbit = new book ("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const hp1 = new book ("Harry Potter and the socerer's stone", "J.K. Rowling", 300, "Have Read");
const theGreatDivorce = new book ("The Great Divorce", "C.S. Lewis", 195, "Have Read");
let myLibrary = [hobbit, hp1, theGreatDivorce];

dispButton.addEventListener('click', () => {
    for (let i = 0; i < myLibrary.length; i++) {
        const container = document.querySelector(".container");
        const eachBook = document.createElement("div");
        container.appendChild(eachBook);
        eachBook.setAttribute('class', "eachBook");
        eachBook.setAttribute('id', myLibrary[i].title);
        eachBook.innerHTML = myLibrary[i].bookInfo(); 
        
    }

}
);



function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function () {
        return title + " by " + author + ", " + pages + "pages, " + read; 
    }
}

function addBookToLibrary () { 

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
*/