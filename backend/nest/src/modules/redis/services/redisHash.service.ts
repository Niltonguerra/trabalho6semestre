import { Redis } from 'ioredis';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class RedisHashService {
  
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

   // Define um registro como hash usando hset
   async setHash(key: string, value: Record<string, any>,ExpirationTime:number): Promise<void> {
    await this.redisClient.hset(key, value);
    await this.redisClient.expire(key, ExpirationTime);
  }

  // Obtém um registro no formato hash
  async getHash(key: string): Promise<any> {
    const result = await this.redisClient.hgetall(key);
    return Object.keys(result).length ? result : null;
  }

  // Atualiza campos específicos de um hash
  async updateFieldHash(key: string, field: string, value: any): Promise<void> {
    await this.redisClient.hset(key, field, value); // Atualiza ou cria o campo específico no hash
  }

  // Deleta um valor
  async deleteValueHash(key: string): Promise<void> {
    await this.redisClient.del(key);
  }

  // Verifica se uma chave existe
  async existsHash(key: string): Promise<boolean> {
    const result = await this.redisClient.exists(key);
    return result === 1;
  }
}
