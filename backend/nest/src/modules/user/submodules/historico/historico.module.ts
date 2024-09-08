import { Module } from '@nestjs/common';
import { HistoricoService } from './services/historico.service';
import { HistoricoController } from './controllers/historico.controller';

@Module({
  providers: [HistoricoService],
  controllers: [HistoricoController]
})
export class HistoricoModule {}
