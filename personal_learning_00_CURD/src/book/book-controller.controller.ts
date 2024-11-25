import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book-dto/book.dto'

@Controller('book')
export class BookControllerController {

    // TO REMEMBER : Providers/services are injected here via constructor of it.

    //creating a object of Book Service that can be injected

    // This approach does not use dependency injection, leading to new object creation every time the controller is initialized or a request is processed. If there are multiple services and controllers, managing them becomes challenging, and repeated object creation for each request can consume significant memory, even when the objects are not actively needed.
        // public bookService : BookService = new BookService();
    
        
    // This is a nest js apporach of injecting dependency (BookService) in the controllers. 
    // Nest Js had provided me with the object   
    constructor(private bookService : BookService){}    

    //add book
    @Post('/add')
    addBook(@Body() book: Book) : string{
        return this.bookService.addBook(book);
    }

    //delete a book
    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId: string): string{
        return this.bookService.deleteBook(bookId);
    }

    //update a book
    @Put('/update')
    updateBook(@Body() book : Book): string{
        return this.bookService.updateBook(book);

    }

    @Get()
    findAllBook(): Book[]{
        return this.bookService.findAllBook();
    
    }
    @Get('/count')
    countBook(): number{
        return this.bookService.countBook();
        
    }
}
