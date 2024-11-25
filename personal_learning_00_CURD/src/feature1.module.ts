import { Module } from "@nestjs/common";
import { log } from "console";

@Module({

})
export class feature1Module{

    constructor(){
        log('Feature 1 Module is initiated now....')
    }
}