import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async authLogin(login:string, password:string ){
        console.log("no service ", login)
        console.log("no service ", password)
        return `${login} | ${password}`
    }
}
