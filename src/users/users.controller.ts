import { Body, Controller, Get, Param, ParamDecoratorEnhancer, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { ArrayUniqueIdentifier, UUIDVersion } from 'class-validator';
import { UpdateUserDTO } from './dto/updateUser.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    
    @Post()
    create(@Body() req:CreateUserDTO){
        return this.userService.create()
 
    }

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id:number){
        return this.userService.findOne(id);
    }

    @Patch(':id')
    update(
    @Param('id',ParseUUIDPipe) id: number,
    @Body() req:UpdateUserDTO){
        return this.userService.update(id,req)
    }
}
