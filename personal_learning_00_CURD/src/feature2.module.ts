import { Module } from "@nestjs/common";
import { log } from "console";

@Module({

})
export class feature2Module{

    constructor(){
        log('Feature 2 Module is initiated now....')
    }
}