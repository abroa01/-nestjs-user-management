import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Anshul Abrol",
            "email": "abrol.anshul10@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "Michal",
            "email": "Michal0@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 3,
            "name": "Haley",
            "email": "Haley@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 4,
            "name": "Shawn",
            "email": "Shawn@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 5,
            "name": "Dobby",
            "email": "Dobby@gmail.com",
            "role": "ENGINEER"
        }
    ]
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }
    findOne(id: number){
        const user = this.users.find( user => user.id === id )
        return user
    }
    create(user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        const usersByHighestId = [...this.users].sort((a,b)=>b.id-a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updatedUser: {name?:string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        this.users = this.users.map(user => {
            if(user.id = id){
                return{...user, ...updatedUser}
            }
            return user
        })
       
        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
     


}
