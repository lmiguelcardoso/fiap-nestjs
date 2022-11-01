import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { PrismaService } from 'src/prisma.service'
import { PrismaClient, users } from '@prisma/client';
import { CreateUserDTO } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {
    constructor(private readonly prisma:PrismaService){}
    async verifyUserExists(email: string): Promise<boolean> {
        const user = await this.prisma.users.findUnique({
          where: {
            email: email,
          },
        });
  
        return user ? true : false;
      }
    
    async crypt(password:string):Promise<string>{
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(password,salt)

      return hashedPassword
     }

    async create(data: CreateUserDTO): Promise<users> {
      const { name, email, password } = data;
  
      //busca pra saber se o usuário já existe.
      //findUnique é um método do prisma que busca um usuário pelo campo único por exemplo email.
      //findFirst é um método do prisma que busca o primeiro registro que encontrar.
  
      //verificar se usuário já existe.
      const checkUser = await this.verifyUserExists(email);
      let user = undefined;
  
      if (!checkUser) {
        user = await this.prisma.users.create({
          data: {
            name,
            email,
            password: await this.crypt(password),
          },
        });
      }
  
      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            message: 'Erro ao criar usuário!',
          },
          HttpStatus.FORBIDDEN,
        );
      }
      return user;
    }
    

    async findAll(): Promise<object>{
        const users = await this.prisma.users.findMany()
        return users
    }

    async findOne(id:number): Promise<users>{
        const user = await this.prisma.users.findUnique({
          where:{
            id:id
          }
        })
        return user;
    }

    async update(id:number, req:UpdateUserDTO): Promise<string>{
        return "usuario atualizado com sucesso"
    }
}
