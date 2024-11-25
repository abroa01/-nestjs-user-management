import { Injectable } from '@nestjs/common';
import { Book } from './book-dto/book.dto'
import {v4 as uuidv4, v4 } from 'uuid'

@Injectable()
export class BookService {

    public books : Book[] = [];
    
    //add book
    addBook(book: Book) : string{
        book.id = uuidv4();
        this.books.push(book)
        return ' Book has been added Successfully !! '
    }

    //delete a book
    deleteBook(bookId: string): string{
        this.books = this.books.filter((book)=> {
            return book.id !=  bookId;
        })
        return 'Book has been Deleted Successfully !!'
    }

    //update a book
    updateBook(book : Book ): string{

        let index = this.books.findIndex((currentIndex) => {
            return currentIndex.id = book.id;
        })
        this.books[index] = book;
        return ' Book has been updated Successfully !! '
    }

    findAllBook(): Book[]{
        return this.books;
    }
    countBook(): number{
        let number = this.books.length;
        return number;
    }
}
