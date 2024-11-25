import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BookPipe } from './pipes/book.pipe';
import { BokoDto } from './dto/book.dto';

@Controller('book')
export class BookController {

    @Get('/:id')
    findBookById(@Param ('id', ParseIntPipe )id: number): string{    // transformation: transform input data to the desired form (e.g., from string to integer)
        console.log(id, typeof(id));
        return "Book by id : "
    }

    @Post('/add')
    addBook(@Body(new BookPipe()) book: BokoDto): string{    // transformation: transform input data to the desired form (e.g., from string to integer)
        return "add book method "
    }
}


