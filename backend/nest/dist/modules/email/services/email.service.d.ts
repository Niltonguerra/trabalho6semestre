import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class EmailService {
    private readonly jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    private transporter;
    private readonly logger;
    EnviaVerificacaoEmail(email: string, url: string): Promise<number>;
}
