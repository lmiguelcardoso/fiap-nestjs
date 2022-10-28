import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {

    async findAll(): Promise<string>{
        return 'Lista de produtos';
    }

    async findOne(id:number): Promise<string>{
        return `Produto ${id}`;
    }

    async create(): Promise<string>{
        return 'Produto cadastrado com sucesso';
    }

    async update(id:number, req:UpdateProductDTO): Promise<string>{
        console.log(`Produto ${id} atualizado com sucesso ${req.name} ${req.price}`);
        return "deu certo"
    }
    
}