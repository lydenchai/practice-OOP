import { Author } from './Author';
import { Publisher } from './Publisher';

export class Book {
    private authors: Author[] = [];
    private publisher: Publisher;

    constructor(private title: string, private publish_year: number) { }

    getAuthor() {
        return this.authors;
    }

    getPublisher() {
        return this.publisher;
    }

    addAuthor(author: Author) {
        this.authors = [...this.authors, author];
    }

    setPublisher(publisher: Publisher) {
        this.publisher = publisher;
    }
}