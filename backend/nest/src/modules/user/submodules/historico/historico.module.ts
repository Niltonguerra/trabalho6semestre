import { Module } from '@nestjs/common';
import { HistoricoService } from './services/historico.service';


@Module({
  providers: [HistoricoService],
})
export class HistoricoModule {}
