import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters } from '@nestjs/common';
import { BookPipe } from './pipes/book.pipe';
import { BokoDto } from './dto/book.dto';
import { BookException } from './book.exception';
import { BookCustomExceptionFilter } from './book.exception.filter';

@Controller('book')
export class BookController {

    @Get()
    @UseFilters(BookCustomExceptionFilter)
    findBook(): string{
        // throw new BadRequestException({
        //     status : 400,
        //     error: "This is my custom error message. Your request is failed."
        // });

        throw new BadRequestException();

    }
}


