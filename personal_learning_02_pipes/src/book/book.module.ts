import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookMiddleware } from './book.middleware';

@Module({
    controllers: [BookController]
})
export class BookModule implements NestModule {
    configure(consumer: MiddlewareConsumer){            // Middleware consumer:- The MiddlewareConsumer is a helper class. It provides several built-in methods to manage middleware. All of them can be simply chained in the fluent style. The forRoutes() method can take a single string, multiple strings, a RouteInfo object, a controller class and even multiple controller classes. In most cases you'll probably just pass a list of controllers separated by commas
        consumer.apply(BookMiddleware).forRoutes('book')    // The apply() method may either take a single middleware, or multiple arguments to specify multiple middlewares.
    }

}
