import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';

@Module({
  imports: [UsersModule, BookModule],
  controllers: [ BookController],
  providers: [],
})
export class AppModule {}
