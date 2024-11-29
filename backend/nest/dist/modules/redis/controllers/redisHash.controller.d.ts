import { RedisHashService } from '../services/redisHash.service';
export declare class RedisHashController {
    private readonly redisService;
    constructor(redisService: RedisHashService);
    setHash(body: {
        key: string;
        value: Record<string, any>;
    }): Promise<string>;
    updateHashField(body: {
        key: string;
        field: string;
        value: any;
    }): Promise<string>;
    getHash(body: {
        key: string;
    }): Promise<Record<string, any> | null>;
    deleteValue(body: {
        key: string;
    }): Promise<string>;
}
