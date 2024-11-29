import { UsuarioService } from '../services/user.service';
import { CriaUsuarioDTO } from '../dtos/usuario/CriaUsuario.dto';
import { ListaUsuarioPessoalDTO, ListaUsuarioPublicoDTO } from '../dtos/usuario/ListaUsuario.dto';
import { DadosUsuarioAtualizarDTO } from '../dtos/usuario/DadosUsuarioAtualizar.dto';
import { ListaUsuarioRetornoDTO, MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { EmailService } from 'src/modules/email/services/email.service';
import { RedisHashService } from 'src/modules/redis/services/redisHash.service';
export declare class UserController {
    private readonly service;
    private readonly emailService;
    private readonly redisHashService;
    constructor(service: UsuarioService, emailService: EmailService, redisHashService: RedisHashService);
    findByField(campo: string, valor: string, limit: number): Promise<{
        resultado: ListaUsuarioPublicoDTO[];
        message: string;
    }>;
    ListaUsuariosPublicos(): Promise<{
        usuario: ListaUsuarioPublicoDTO[];
        message: string;
    }>;
    create(user: CriaUsuarioDTO): Promise<MensagemRetornoDTO>;
    CadastraUsuario(token: string): Promise<MensagemRetornoDTO>;
    findById(req: any): Promise<{
        usuario: ListaUsuarioPessoalDTO;
        message: string;
    }>;
    update(req: any, user: DadosUsuarioAtualizarDTO): Promise<{
        usuario: ListaUsuarioRetornoDTO;
        message: string;
    }>;
    remove(req: any): Promise<{
        retorno: ListaUsuarioRetornoDTO;
        message: String;
    }>;
}
