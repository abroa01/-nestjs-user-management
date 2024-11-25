// This is a custom pipe made only for book module

import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata): any {
        if(value.id == 1) return value                                   // Accept only id as 1 and rejects everything else.
        else throw new BadRequestException("Validation is Failed ...");
    }

    
}