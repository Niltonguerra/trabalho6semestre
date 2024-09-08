import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { AuthUserService } from '../services/authUser.service';
export declare class AuthController {
    private readonly authUserService;
    constructor(authUserService: AuthUserService);
    loginUser(authUserDTO: AuthUserDTO): Promise<{}>;
}
