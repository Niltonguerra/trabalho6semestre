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
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { Usuario } from '../entities/user.entity';
import { ListaPrestadorPessoalDTO, ListaPrestadorPublicoDTO } from '../dtos/prestador/ListaPrestador.dto';
import { AtualizaPrestadorDTO } from '../dtos/prestador/AtualizarPrestador.dto';
export declare class PrestadorService {
    private readonly userModel;
    constructor(userModel: Model<Usuario>);
    private readonly logger;
    ListaUmPrestadorDono(id: string): Promise<ListaPrestadorPessoalDTO | null>;
    AtualizarPrestador(Prestador: AtualizaPrestadorDTO, id: string): Promise<MensagemRetornoDTO>;
    findByField(campo: string, valor: string, limit?: number): Promise<ListaPrestadorPublicoDTO[]>;
    findAll(): Promise<ListaPrestadorPublicoDTO[]>;
}
