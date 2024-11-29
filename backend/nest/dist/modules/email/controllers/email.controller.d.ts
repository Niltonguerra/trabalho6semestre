import { EmailService } from '../services/email.service';
import { MensagemRetornoDTO } from 'src/modules/user/dtos/Mensagens.dto';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    EnviaVerificacao(email: string): Promise<MensagemRetornoDTO>;
}
