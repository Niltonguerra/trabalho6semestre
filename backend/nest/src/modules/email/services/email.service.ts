import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SendEmailDTO } from '../dtos/SendEmail.dto';
import * as nodemailer from 'nodemailer';




@Injectable()
export class EmailService {

  constructor(
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'), // seu e-mail
        pass: this.configService.get<string>('EMAIL_PASSWORD'),     // sua senha de app
      },
    });
  }

  private transporter;
  private readonly logger = new Logger(EmailService.name);



  async EnviaVerificacao(email: string,url:string): Promise<number> {
    try {
      const payload = { email: email };
      
      const token = this.jwtService.sign(payload,{secret: this.configService.get<string>('SECRET_JWT_EMAIL'),expiresIn: '1h'}); // Token expira em 1 hora

      const tituloMensagem = 'Verificação de e-mail do aplicativo MoveSmart';
      const corpoMensagem = `Clique no link a seguir para verificar seu e-mail: http://localhost:3100/${url}?token=${token}`;

      const mailOptions:SendEmailDTO = {
        from: this.configService.get<string>('EMAIL_USER'),       // remetente
        to: email,                         // destinatário
        subject: tituloMensagem,                    // assunto
        text: corpoMensagem,                       // corpo do e-mail
      };

      this.transporter.sendMail(mailOptions);
      return 200;

    } catch (error) {
      this.logger.error(`Erro ao enviar e-mail de verificação: ${error.message}`);
      return 400;
    }

  }

}
