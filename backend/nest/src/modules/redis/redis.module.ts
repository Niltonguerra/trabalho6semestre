import { Module, Global } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisHashController } from './controllers/redisHash.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisHashService } from './services/redisHash.service';
import { RedisSessionService } from './services/redisSession.service';
import { RedisSessionController } from './controllers/RedisSession.controller';

@Global()
@Module({
  imports: [
    ConfigModule,
  ],
  providers: [
    {
      provide: 'REDIS_CLIENT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisHost = configService.get<string>('REDIS_HOST');
        const redisPort =configService.get<number>('REDIS_PORT');

        const redisClient = new Redis({
          host: redisHost,
          port: redisPort,
        });
        
        return redisClient;
      },
    },
    RedisHashService,
    RedisSessionService,
  ],
  controllers: [
    RedisHashController,
    RedisSessionController,
  ],
  exports: ['REDIS_CLIENT',RedisSessionService, RedisHashService],
})
export class RedisModule {}



