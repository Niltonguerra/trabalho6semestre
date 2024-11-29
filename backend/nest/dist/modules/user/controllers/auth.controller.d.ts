import { AuthUserDTO } from '../dtos/autenticacao/AuthUser.dto';
import { AuthUserService } from '../services/authUser.service';
export declare class AuthUserController {
    private readonly authUserService;
    constructor(authUserService: AuthUserService);
    loginUser(authUserDTO: AuthUserDTO): Promise<{}>;
}
