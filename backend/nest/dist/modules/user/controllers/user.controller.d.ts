import { UserService } from '../services/user.service';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { ListaUsuarioDTO, ListaUsuarioRetorno } from '../dtos/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from '../dtos/AtualizaUsuario.dto';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    findByField(campo: string, valor: string, limit: number): Promise<{
        resultado: ListaUsuarioDTO[];
        message: string;
    }>;
    findAll(): Promise<{
        usuario: ListaUsuarioDTO[];
        message: string;
    }>;
    create(user: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioRetorno;
        message: string;
    }>;
    findById(req: any): Promise<{
        usuario: ListaUsuarioDTO;
        message: string;
    }>;
    update(req: any, user: AtualizaUsuarioDTO): Promise<{
        usuario: ListaUsuarioRetorno;
        message: string;
    }>;
    remove(req: any): Promise<{
        retorno: ListaUsuarioRetorno;
        message: String;
    }>;
}
