import { Redis } from 'ioredis';
export declare class RedisHashService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    setHash(key: string, value: Record<string, any>, ExpirationTime: number): Promise<void>;
    getHash(key: string): Promise<any>;
    updateFieldHash(key: string, field: string, value: any): Promise<void>;
    deleteValueHash(key: string): Promise<void>;
    existsHash(key: string): Promise<boolean>;
}
