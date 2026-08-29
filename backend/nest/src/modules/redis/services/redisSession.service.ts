import { UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Injectable, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisSessionService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}

  async setValueSession(key: string, value: any, expireInSeconds: number): Promise<void> {
    
    const resultado = await this.redisClient.set(key, JSON.stringify(value), 'EX', expireInSeconds);
    
    if(resultado !== 'OK'){
      throw new UnauthorizedException('Erro ao armazenar a sessão');
    }
  }

  async getValueSession(key: string): Promise<any> {
    const result = await this.redisClient.get(key);
    return result ? JSON.parse(result) : null;
  }

  async deleteValueSession(key: string): Promise<void> {
    const result = await this.redisClient.del(key);
    
    if (result === 0) {
      throw new NotFoundException('Chave não encontrada para deleção');
    }
  }

  async existsSession(key: string): Promise<boolean> {
    const result = await this.redisClient.exists(key);
    return result === 1;
  }
}
