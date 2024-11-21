import { Body, Controller, Delete, Get, Param, 
    Patch, Post, Query } from '@nestjs/common';

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

    @Get() //GET /users or /users?role=value
    findAll(@Query('role')role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        return []
    }
    @Get(':id') //GET users by id
    findOne(@Param('id') id: string){
        return { id }

    } 

    @Post() //POST users 
    create(@Body() users: {}){
        return users
    }
    
    @Patch(':id') //Patch users by id
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return { id, ...userUpdate }

    } 
    @Delete(':id')
    delete(@Param('id') id: string){
        return { id }
    }



}
