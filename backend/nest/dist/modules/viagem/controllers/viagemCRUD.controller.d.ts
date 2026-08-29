import { ViagemCRUDService } from '../services/viagemCRUD.service';
import { CriarViagemDto } from '../dtos/criarViagem.dto';
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { AtualizaViagemDto } from '../dtos/AtualizaViagem.dto';
import { UsuarioService } from 'src/modules/user/services/user.service';
export declare class ViagemCRUDController {
    private readonly viagemCRUDService;
    private readonly usuarioService;
    constructor(viagemCRUDService: ViagemCRUDService, usuarioService: UsuarioService);
    criarViagem(criarViagemDto: CriarViagemDto, req: any): Promise<MensagemRetornoDTO>;
    atualizarViagem(atualizaViagemDto: AtualizaViagemDto, idViagem: string, req: any): Promise<MensagemRetornoDTO>;
    listaTodasAsViagens(): Promise<{
        MensagemRetornoDTO: any;
        ListarViagemDto: any;
    }>;
    deletarViagem(idViagem: string): Promise<MensagemRetornoDTO>;
}
