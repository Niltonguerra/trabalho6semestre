import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';
import { StoreModule } from './modules/store/store.module';
import { APP_PIPE } from '@nestjs/core';
import { PaymentModule } from './modules/payment/payment.module';
import { AuthStoreModule } from './modules/store/submodules/auth-store/auth-store.module';
import { RedisModule } from './modules/redis/redis.module';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { HistoricoModule } from './modules/historico/historico.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const mongoUri = configService.get<string>(
          process.env.NODE_ENV === 'production' ? 'MONGO_URI_PROD' : 'MONGO_URI_QA'
        );
        return {
          uri: mongoUri,
          // Outras opções de configuração, se houver
        };
      },
    }),

    UserModule,
    ProductModule,
    StoreModule,
    PaymentModule,
    AuthStoreModule,
    RedisModule,
    EmailModule,
    HistoricoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useFactory: () => new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {
}