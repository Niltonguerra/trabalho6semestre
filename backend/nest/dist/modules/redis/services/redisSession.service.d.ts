import { Redis } from 'ioredis';
export declare class RedisSessionService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    setValueSession(key: string, value: any, expireInSeconds: number): Promise<void>;
    getValueSession(key: string): Promise<any>;
    deleteValueSession(key: string): Promise<void>;
    existsSession(key: string): Promise<boolean>;
}
