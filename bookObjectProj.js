const dispButton = document.querySelector('.addNewBook');
const showBtn = document.querySelector('button');
const hobbit = new book ("The Hobbit", "J.R.R Tolkien", 295, "False");
const hp1 = new book ("Harry Potter and the socerer's stone", "J.K. Rowling", 300, "Ture");
const theGreatDivorce = new book ("The Great Divorce", "C.S. Lewis", 195, "True");
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
        return title + " by " + author + ", " + pages + " pages, " + "I have read this book " + read; 
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
   // preventDefault();
    const newBookTitle = document.getElementById("bookTitle").value;
    const newBookAuthor = document.getElementById("bookAuthor").value;
    const newBookPages = document.getElementById("pageNumber").value;
    const newBookRead = checkReadValue (); 
     //alert(newBookTitle + newBookAuthor + newBookPages + newBookRead);
    const newBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    myLibrary.push(newBook);
    clearList();
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
    const bookList = document.querySelector(".bookList");
    const eachBook = document.createElement("div");
    const removeButton = document.createElement("button")
    bookList.appendChild(eachBook);
    bookList.appendChild(removeButton);
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute('id',  i);
    removeButton.dataset.rIndexNum = i; 
    removeButton.addEventListener('click', (e) => {removeABook(e)} 
    );
        
        
        //alert(dataNum);
/*
        myLibrary.forEach ()
       for (let i = 0; i < myLibrary.length; i++){
           if (dataNum == i) {
               let pos = i;
               myLibrary.splice(i, 1);
               //alert(dataNum);
           }
       }
        
        */
    
    eachBook.setAttribute('class', "eachBook");
    eachBook.setAttribute('id', myLibrary[i].title + i);
    eachBook.innerHTML = myLibrary[i].bookInfo(); 
    removeButton.innerHTML = "Remove Book"
}
}

function clearList () {
    const bookList = document.querySelector(".bookList");
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
}

function removeABook (e) {
    let dataNum = e.target.getAttribute("id");
    //alert(dataNum);
        myLibrary.splice(dataNum,1);
        displayBooks;
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

hobbit, hp1, theGreatDivorce
this.removeBook = function () {
        for (let i = 0; i < myLibrary.length; i++) {
            const arrayComp = myLibrary[i].title + i; 
            for (let j = 0; j > myLibrary.length; j++) {
                if (this.title + j === arrayComp) {
                    myLibrary.splice(pos, i);
                } else {
                    return;
                }
            }
        }
    }
*/