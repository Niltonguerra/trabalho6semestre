import { JwtService } from '@nestjs/jwt';
import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { UserService } from 'src/modules/user/services/user.service';
export declare class AuthUserService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    UserAuthentication(authUserDTO: AuthUserDTO): Promise<{} | null>;
    private validateUser;
    private validatePassword;
    private geraToken;
}
