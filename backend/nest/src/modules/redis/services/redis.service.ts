import { Redis } from 'ioredis';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class RedisService {
  
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  // Define um valor com expiração
  async setValue(key: string, value: string, expireInSeconds: number = 3600): Promise<void> {
    await this.redisClient.set(key, value, 'EX', expireInSeconds);
  }

  // Obtém um valor do Redis
  async getValue(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  // Deleta um valor do Redis
  async deleteValue(key: string): Promise<void> {
    await this.redisClient.del(key);
  }

  // Verifica se uma chave existe
  async exists(key: string): Promise<boolean> {
    const result = await this.redisClient.exists(key);
    return result === 1;
  }
}
