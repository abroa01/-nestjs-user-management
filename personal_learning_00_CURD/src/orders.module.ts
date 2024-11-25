import { Module } from "@nestjs/common";
import { log } from "console";
import { feature1Module } from "./feature1.module";
import { feature2Module } from "./feature2.module";

@Module({
    imports:[feature1Module, feature2Module]


})
export class orders{

    constructor(){
        log('Orders module')
    }
}