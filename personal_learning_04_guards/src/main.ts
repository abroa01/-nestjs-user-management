import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';


// Creating the global middleware of function based.
function globalMiddlewareOne(req: Request, res: Response, next: NextFunction){
  console.log('this is the global middleware number 1, Function based')
  next();
}
function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction){
  console.log('this is the global middleware number 2, Function based')
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne) // invoking middleware in the main application so that it is implemented as soon as the application is started
  app.use(globalMiddlewareTwo)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
