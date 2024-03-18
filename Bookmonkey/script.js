const bookslist = document.querySelector("#books-list");
const books = [];
const api = "http://localhost:4730/books";

//Laden der Seite
document.addEventListener("DOMContentLoaded", function () {
  getbooks();
  console.log(books);
});

//GET funktion
function getbooks() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      books.push(...data);
      renderbooks();
    });
}

//Anzeigen der Bücher
function renderbooks() {
  books.forEach(function (book) {
    const anzeige = document.createElement("li");
    //Header
    const header = document.createElement("header");
    const title = document.createElement("h2");
    title.innerText = book.title;
    const autor = document.createElement("p");
    autor.textContent = "author: " + book.author;
    header.appendChild(title);
    header.appendChild(autor);
    //Rest
    const isbn = document.createElement("p");
    isbn.innerHTML = "ISBN:" + book.isbn;
    const favbtn = document.createElement("button");
    favbtn.innerHTML = "Add to Favorites";
    //zusammenfügen
    anzeige.appendChild(header);
    anzeige.appendChild(isbn);
    anzeige.appendChild(favbtn);
    bookslist.appendChild(anzeige);
  });
}
