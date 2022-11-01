import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject:string, msg:string, options:object){

        const clientId = process.env.CLIENT_ID
        const secretKey = process.env.SECRET_KEY;
        const refreshToken = process.env.REFRESH_TOKEN;
        const redirectURI = 'https://developers.google.com/oauthplayground'
        const OAuth2 = google.auth.OAuth2

        const oauth2Client = new OAuth2(clientId,secretKey,redirectURI)

        oauth2Client.setCredentials({refresh_token: refreshToken})

        const acessToken = oauth2Client.getAccessToken();
     
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            logger: false,
            debug: false,
            auth: {
                type: 'OAuth2',
                user: 'fiap_avanade_manha@gmail.com',
                clientId: clientId,
                clientSecret: secretKey,
                refreshToken: refreshToken,
                accessToken: acessToken
            }
        })

        const mailOptions = {
            from:'fiap_avanade_manha@gmail.com',
            to: to,
            bcc: 'miguel.cardoso2602@gmail.com',
            subject: subject,
            html: `
            envio de email com nodemailer + gmail + oauth2 
            <h1>${msg}</h1>
            somente especialistas em tecnologia podem ler esse email
            `
    }

    try{
        const result = await transporter.sendMail(mailOptions)
        if(!result.reject){
            return {message: 'email enviado com sucesso'}
        }else{
            return {message: result.reject}
        }
    }catch(error){
        return {message: error.message}
    }
    }
}
