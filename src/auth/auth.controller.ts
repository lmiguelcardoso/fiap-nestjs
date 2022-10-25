import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    @Post('login')
    async authLogin(@Body() req){
        const {login, password} = req;
        return this.AuthService.authLogin();
    }
    
}
