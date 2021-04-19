const hobbit = new book ("The Hobbit", "J.R.R Tolkien", 295, "not read yet");



function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookInfo = function () {
        return title + " by " + author + ", " + pages + "pages, " + read; 
    }
}

