import { Module } from '@nestjs/common';
import { log } from 'console';
import { ProfileModule } from './profile/profile.module';
import { BookControllerController } from './book/book-controller.controller';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';


@Module({
  imports: [ProfileModule, BookModule],
  controllers: [BookControllerController],
  providers: [BookService],
  exports: []
})
export class Chat {
  constructor(){
    log('Chat Module')
  }
}
