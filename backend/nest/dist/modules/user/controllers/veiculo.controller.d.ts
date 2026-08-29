import { VeiculoService } from '../services/veiculo.service';
import { CriarVeiculoDto } from '../dtos/veiculo/criaVeiculo.dto';
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
export declare class VeiculoController {
    private readonly veiculoService;
    constructor(veiculoService: VeiculoService);
    atualizarCarro(req: any, carroData: CriarVeiculoDto): Promise<MensagemRetornoDTO>;
    deletarCarro(req: any): Promise<MensagemRetornoDTO>;
}
