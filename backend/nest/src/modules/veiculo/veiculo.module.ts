import { Module } from '@nestjs/common';
import { VeiculoService } from './services/veiculo.service';
import { VeiculoController } from './controllers/veiculo.controller';

@Module({
  providers: [VeiculoService],
  controllers: [VeiculoController]
})
export class VeiculoModule {}
