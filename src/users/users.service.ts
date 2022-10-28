import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    async create(): Promise<string>{
        return 'Usuario criado'
    }

    async findAll(): Promise<string>{
        return 'lista de usuarios'
    }

    async findOne(id:number): Promise<string>{
        return `Usuario ${id}!`
    }

    async update(id:number, req:UpdateUserDTO): Promise<string>{
        return "usuario atualizado com sucesso"
    }
}
