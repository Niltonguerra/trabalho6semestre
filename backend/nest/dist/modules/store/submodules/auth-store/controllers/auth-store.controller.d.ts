import { AuthStoreDTO } from '../dtos/AuthStore.dto';
import { StoreAuthService } from '../services/auth-store.service';
export declare class AuthStoreController {
    private readonly authUserService;
    constructor(authUserService: StoreAuthService);
    loginUser(authUserDTO: AuthStoreDTO): Promise<{}>;
}
