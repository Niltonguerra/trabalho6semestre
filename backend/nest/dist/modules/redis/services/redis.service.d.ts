import { Redis } from 'ioredis';
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    setValue(key: string, value: string, expireInSeconds?: number): Promise<void>;
    getValue(key: string): Promise<string | null>;
    deleteValue(key: string): Promise<void>;
    exists(key: string): Promise<boolean>;
}
