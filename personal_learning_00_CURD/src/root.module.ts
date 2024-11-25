import { Module } from '@nestjs/common';
import { log } from 'console';
import { Users } from './users.module';
import { Chat } from './chat.module';
import { orders } from './orders.module';
import { BookService } from './book/book.service';// Imported service in the root module to tell nestJS that we have a provider and it is injectable ()


@Module({
  imports: [Users, Chat, orders ],
  controllers: [],
  providers: [BookService],
  exports: []
})
export class RootModule {
  constructor(){
    log('Root Module')
  }
}
