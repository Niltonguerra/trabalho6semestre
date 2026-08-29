import { RedisSessionService } from '../services/redisSession.service';
export declare class RedisSessionController {
    private readonly redisService;
    constructor(redisService: RedisSessionService);
    setSession(body: {
        key: string;
        value: any;
    }): Promise<string>;
    getSession(body: {
        key: string;
    }): Promise<string | null>;
    deleteSession(body: {
        key: string;
    }): Promise<string>;
}
