import { Module } from '@nestjs/common';
import { MotoristasService } from './services/motoristas.service';
import { MotoristasController } from './controllers/motoristas.controller';

@Module({
  providers: [MotoristasService],
  controllers: [MotoristasController]
})
export class MotoristasModule {}
