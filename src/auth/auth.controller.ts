import { Body, Controller, Post } from '@nestjs/common';
import { AuthService }from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService:AuthService){

   }

    @Post('login')
    async authLogin(@Body() req){
        const {login, password} = req;
        console.log(login)
        console.log(password)
        return this.authService.authLogin(login,password);
    }
    
}
