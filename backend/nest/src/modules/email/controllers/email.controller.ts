import { Controller, Get, Query, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import { EmailService } from '../services/email.service';
import { MensagemRetornoDTO } from 'src/modules/user/dtos/Mensagens.dto';



@Controller('email')
export class EmailController {

  constructor(
    private readonly emailService: EmailService,
  ) {}

  @Post('testeEnviarEmail')
  async EnviaVerificacao(@Body('email') email: string):Promise<MensagemRetornoDTO> {

    const response = await this.emailService.EnviaVerificacao('niltondg.39@gmail.com','user/CadastraUsuario');

      return {
        statusCode: response,
        mensagem: 'E-mail enviado com sucesso',
      };
  }
}
