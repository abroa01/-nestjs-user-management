import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate{

    public key : string = '1234567890';
    canActivate(context: ExecutionContext): boolean {

        const ctx   = context.switchToHttp();
        const req   = ctx.getRequest<Request>();  

        if(req.header("key") == undefined) return false;
        return req.header("key") === this.key;
    }

}