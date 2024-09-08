import { Module, Global } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisController } from './controllers/redis.controller';
import { RedisService } from './services/redis.service';

@Global()
@Module({
  imports: [],
  controllers: [RedisController],


  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        const redisHost = process.env.REDIS_HOST || 'localhost';
        const redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;

        const redisClient = new Redis({
          host: redisHost,
          port: redisPort,
        });
        
        return redisClient;
      },
    },
    RedisService,
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
