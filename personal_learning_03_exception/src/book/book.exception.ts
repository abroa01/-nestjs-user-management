import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super('This is my customer Exception Handler for Book Module', HttpStatus.BAD_REQUEST)
    }
}