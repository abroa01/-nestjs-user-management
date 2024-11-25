import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common';
import { BookPipe } from './pipes/book.pipe';
import { BokoDto } from './dto/book.dto';
import { BookException } from './book.exception';
import { BookCustomExceptionFilter } from './book.exception.filter';
import { BookGuard } from './book.guard';

@Controller('book')
export class BookController {

    @Get()
    @UseGuards(new BookGuard())
    findBook(): string{
        return "This is a method to find the books"

    }
}


