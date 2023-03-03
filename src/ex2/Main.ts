import { Author } from "./Author";
import { Publisher } from "./Publisher";
import { Book } from "./Book";
import { Library } from "./Library";

// Authors
let ronan = new Author('Ronan');
let him = new Author('Him');

// Publishers
let sipar = new Publisher('Sipar', 'Phnom Penh');
let ibc = new Publisher('IBC', 'Siem Reap');

// Books
let book1 = new Book('OOP is the best', 2018);
book1.addAuthor(ronan);
book1.setPublisher(sipar);

let book2 = new Book('Best team ?', 2015);
book2.addAuthor(ronan);
book2.setPublisher(sipar);

let book3 = new Book('The Why not book ', 2020);
book3.addAuthor(him);

// Library
let pncLibrary = new Library('PNC LIBRARY', 'Phnom Penh');
pncLibrary.addBook(book1, book2, book3);

console.log(book1.getPublisher());
console.log(pncLibrary);
console.log(pncLibrary.getBooksFromAuthor(him));
console.log(pncLibrary.getBooksFromPublisher(sipar));



