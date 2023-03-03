import { Author } from './Author';
import { Book } from './Book';
import { Publisher } from './Publisher';

export class Library {
    private books: Book[] = [];

    constructor(private name: string, private address: string) { }

    addBook(...newBook: any) {
        this.books = this.books.concat(newBook);
    }

    // Get book from author
    getBooksFromAuthor(author: Author): Book[] {
        for (let book of this.books) {
            for (let eachAuthor of book.getAuthor()) {
                if (eachAuthor === author) {
                    this.books.push(book);
                }
            }
        }
        return this.books;
    }

    // Get book from publisher
    getBooksFromPublisher(publisher: Publisher): Book[] {
        for (let book of this.books) {
            if (book.getPublisher() === publisher) {
                this.books.push(book);
            }
        }
        return this.books
    }
}