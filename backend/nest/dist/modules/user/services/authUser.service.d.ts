import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/modules/user/services/user.service';
import { ConfigService } from '@nestjs/config';
import { RedisSessionService } from 'src/modules/redis/services/redisSession.service';
import { AuthUserDTO } from '../dtos/autenticacao/AuthUser.dto';
export declare class AuthUserService {
    private readonly UsuarioService;
    private readonly jwtService;
    private configService;
    private readonly redisSessionService;
    constructor(UsuarioService: UsuarioService, jwtService: JwtService, configService: ConfigService, redisSessionService: RedisSessionService);
    FazerLogin(authUserDTO: AuthUserDTO): Promise<{} | null>;
    private validateUser;
    private geraToken;
}
