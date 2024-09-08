import { JwtService } from '@nestjs/jwt';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
import { StoreService } from 'src/modules/store/services/store.service';
export declare class StoreAuthService {
    private readonly storeService;
    private readonly jwtService;
    constructor(storeService: StoreService, jwtService: JwtService);
    storeAuthentication(authUserDTO: AuthStoreDTO): Promise<{} | null>;
    private validateStore;
    private validatePassword;
    private geraToken;
}
