import { Body, Controller, Delete, Get, Param, 
    Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // --> Decorator 
export class UsersController {
    /* 
    Plan out the route here
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id   --> Using patch because we might need to modify just a part of the users and not the complete users
    DELETE /users/:id

    Note: Routes defined here follow waterfall approach and order of defining the routes matter here



    
    */

    constructor(private readonly usersService: UsersService){}

    @Get() //GET /users or /users?role=value
    findAll(@Query('role')role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        return [this.usersService.findAll(role)]
    }
    @Get(':id') //GET users by id
    findOne(@Param('id') id: string){
       return this.usersService.findOne(+id) // '+' is uniary plus used to conversion from dstring to nuber

    } 

    @Post() //POST users 
    create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.create(user)
    }
    
    @Patch(':id') //Patch users by id
    update(@Param('id') id: string, @Body() userUpdate: {name?:string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.update(+id, userUpdate)

    } 
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.usersService.delete(+id)
    }



}
