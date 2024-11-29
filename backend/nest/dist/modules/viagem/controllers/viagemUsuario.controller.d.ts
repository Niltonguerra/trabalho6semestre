import { ListarViagemDto } from '../dtos/ListaViagem.dto';
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { ViagemUsuarioService } from '../services/viagemUsuario.service';
import { ChatService } from 'src/modules/chat/services/chat.service';
export declare class ViagemUsuarioController {
    private readonly viagemUsuarioService;
    private readonly chatService;
    constructor(viagemUsuarioService: ViagemUsuarioService, chatService: ChatService);
    listarUmViagem(idViagem: string): Promise<{
        MensagemRetornoDTO: MensagemRetornoDTO;
        ListarViagemDto: ListarViagemDto;
    }>;
    listaTodasAsViagensPorUsuario(req: any): Promise<{
        MensagemRetornoDTO: MensagemRetornoDTO;
        ListarViagemDto?: ListarViagemDto[];
    }>;
    solicitarViagem(idViagem: string, req: any): Promise<MensagemRetornoDTO>;
    finalizarViagem(idViagem: string): Promise<MensagemRetornoDTO>;
}
