/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { ListaUsuarioPessoalDTO, ListaUsuarioPublicoDTO } from '../dtos/usuario/ListaUsuario.dto';
import { CriaUsuarioDTO } from '../dtos/usuario/CriaUsuario.dto';
import { DadosUsuarioAtualizarDTO } from '../dtos/usuario/DadosUsuarioAtualizar.dto';
import { ListaUsuarioRetornoDTO, MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../entities/user.entity';
import { LoginUsuarioInternoDTO } from '../dtos/autenticacao/AuthUser.dto';
export declare class UsuarioService {
    private readonly usuarioModel;
    private readonly jwtService;
    private configService;
    constructor(usuarioModel: Model<Usuario>, jwtService: JwtService, configService: ConfigService);
    private readonly logger;
    findByField(campo: string, valor: string, limit?: number): Promise<ListaUsuarioPublicoDTO[]>;
    findByEmail(valor: string): Promise<LoginUsuarioInternoDTO | null>;
    CriarUsuario(usuario: CriaUsuarioDTO): Promise<ListaUsuarioRetornoDTO>;
    verificaEmail(token: string): Promise<MensagemRetornoDTO>;
    findAll(): Promise<ListaUsuarioPublicoDTO[]>;
    ListaUmUsuarioDono(id: string): Promise<ListaUsuarioPessoalDTO | null>;
    AtualizarUsuario(usuario: DadosUsuarioAtualizarDTO, id: string): Promise<ListaUsuarioRetornoDTO>;
    DesativarUsuario(id: string): Promise<any>;
}
