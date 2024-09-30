import { Module } from '@nestjs/common';
import { ViagemService } from './services/viagem.service';
import { ViagemController } from './controllers/viagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { ViagemSchema } from './entities/viagem.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Viagens', schema: ViagemSchema }]),
    JwtModule,
    UserModule
  ],
  providers: [
    ViagemService
  ],
  controllers: [
    ViagemController
  ],
  exports: [
    ViagemService
  ]
})
export class ViagemModule {}
