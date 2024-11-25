import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookControllerController } from './book-controller.controller';

@Module({
    imports: [],
    providers: [BookService],
    controllers: [BookControllerController],
    exports: []
})
export class BookModule {}
