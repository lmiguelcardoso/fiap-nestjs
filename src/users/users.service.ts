import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { PrismaService } from 'src/prisma.service'
import { PrismaClient, users } from '@prisma/client';
@Injectable()
export class UsersService {
    constructor(private readonly prisma:PrismaService){}
    async create(data): Promise<users>{
        const {name, email, password} = data;
        const user = await this.prisma.users.create({
            data: {
                name,
                email,
                password
            }
        })
        if(!user){
            throw new Error('Erro ao criar usuario!')
        }
        return user
    }

    async findAll(): Promise<object>{
        const users = await this.prisma.users.findMany()
        return users
    }

    async findOne(id:number): Promise<string>{
        return `Usuario ${id}!`
    }

    async update(id:number, req:UpdateUserDTO): Promise<string>{
        return "usuario atualizado com sucesso"
    }
}
