import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


@Injectable()
export class BookMiddleware implements NestMiddleware{

    use(req: Request, res: Response, next: NextFunction ) {
        console.log('This is class based Middleware implemented for Book Module');
        next();
        
        
    }
}