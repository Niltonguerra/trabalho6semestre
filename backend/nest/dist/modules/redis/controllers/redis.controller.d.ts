import { RedisService } from '../services/redis.service';
export declare class RedisController {
    private readonly redisService;
    constructor(redisService: RedisService);
    setValue(body: {
        key: string;
        value: string;
    }): Promise<String>;
    getValue(key: string): Promise<string | null>;
    deleteValue(key: string): Promise<string>;
}
