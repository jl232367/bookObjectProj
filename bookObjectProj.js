const dispButton = document.querySelector('.addNewBook');
const showBtn = document.querySelector('button');
const hobbit = new book ("The Hobbit", "J.R.R Tolkien", 295, "False");
const hp1 = new book ("Harry Potter and the socerer's stone", "J.K. Rowling", 300, "True");
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
    this.readToggle = function () {
        if (read === "True") {
            read = "False";
        } else {
            read = "True";
        }
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
    clearList();
    // I am making this loop to display all the contents of the array holding the objects that contain the Book data
for (let i = 0; i < myLibrary.length; i++) {
    const bookList = document.querySelector(".bookList");
    const eachBook = document.createElement("div");
    const eachBookInfo = document.createElement('h3')
    const removeButton = document.createElement("button")
    const readOnOff = document.createElement("button")
    const brk = document.createElement("br");
    eachBook.setAttribute('class', "eachBook");
    eachBook.setAttribute('id', myLibrary[i].title + i);
    eachBookInfo.innerText = myLibrary[i].bookInfo(); 
    bookList.appendChild(eachBook);
    eachBook.appendChild(eachBookInfo);
    eachBook.appendChild(removeButton);
    eachBook.appendChild(brk);
    eachBook.appendChild(readOnOff);
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute('id',  i);
    removeButton.dataset.rIndexNum = i; 
    removeButton.addEventListener('click', (e) => {removeABook(e)} 
    );
    readOnOff.setAttribute("class", "readOnOffButton");
    readOnOff.setAttribute("id", i);
    readOnOff.dataset.inNum = i;
    readOnOff.addEventListener('click',(e) => {
        let dataNum = e.target.getAttribute("id");
        myLibrary[dataNum].readToggle();
        clearList();
        displayBooks();
    });
        
        
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
    
    
    
    removeButton.innerHTML = "Remove Book";
    readOnOff.innerHTML = "Toggle have or Haven't read";
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
    //alert(myLibrary);
        myLibrary.splice(dataNum,1);
        clearList();
        displayBooks();
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



    function readToggle (e) {
    let dataNum = e.target.getAttribute("id");
    
    myLibrary[dataNum].readtoggle
    //clearList();
    //displayBooks();
}
*/