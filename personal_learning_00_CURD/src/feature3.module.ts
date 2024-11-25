import { Module } from "@nestjs/common";
import { log } from "console";

@Module({

})
export class feature3Module{

    constructor(){
        log('Feature 3 Module is initiated now....')
    }
}