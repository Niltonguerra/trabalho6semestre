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
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { ListaUsuarioDTO, ListaUsuarioRetorno } from '../dtos/ListaUsuario.dto';
import { LoginUsuarioInternoDTO } from 'src/modules/user/submodules/auth-user/dtos/AuthUser.dto';
import { AtualizaUsuarioDTO } from '../dtos/AtualizaUsuario.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findByField(campo: string, valor: string, limit?: number): Promise<ListaUsuarioDTO[]>;
    findByEmail(valor: string): Promise<LoginUsuarioInternoDTO | null>;
    create(user: Partial<User>): Promise<ListaUsuarioRetorno>;
    findAll(): Promise<ListaUsuarioDTO[]>;
    findById(id: string): Promise<ListaUsuarioDTO | null>;
    update(user: AtualizaUsuarioDTO, id: string): Promise<ListaUsuarioRetorno>;
    disable(id: string): Promise<any>;
}
