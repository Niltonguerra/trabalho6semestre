import { UsuarioService } from 'src/modules/user/services/user.service';
import { HistoricoService } from '../services/historico.service';
import { UpdateHistoricoDto } from '../dtos/AtualizarHistorico.dto';
import { CreateHistoricoDto } from '../dtos/CriarHistorico.dto';
export declare class HistoricoController {
    private readonly UsuarioService;
    private readonly historicoService;
    constructor(UsuarioService: UsuarioService, historicoService: HistoricoService);
    findProductsWithStore(req: any): Promise<void>;
    findAll(): Promise<import("../entities/historico.entity").Historico[]>;
    findOne(id: string): Promise<import("../entities/historico.entity").Historico>;
    create(createHistoricoDto: CreateHistoricoDto): Promise<import("../entities/historico.entity").Historico>;
    update(id: string, updateHistoricoDto: UpdateHistoricoDto): Promise<import("../entities/historico.entity").Historico>;
}
