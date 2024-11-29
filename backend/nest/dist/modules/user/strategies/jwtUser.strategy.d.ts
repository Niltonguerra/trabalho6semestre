import { ConfigService } from '@nestjs/config';
import { RedisSessionService } from 'src/modules/redis/services/redisSession.service';
declare const JwtStrategyUser_base: new (...args: any[]) => any;
export declare class JwtStrategyUser extends JwtStrategyUser_base {
    private configService;
    private redisService;
    constructor(configService: ConfigService, redisService: RedisSessionService);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
