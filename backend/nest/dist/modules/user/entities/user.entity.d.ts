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
import mongoose from 'mongoose';
export declare class Usuario {
    _id?: mongoose.Types.ObjectId;
    CPF: string;
    data_nascimento: Date;
    foto: string;
    avaliacao_como_cliente: number;
    endereco: string[];
    tipo_conta: string;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    CNH: string;
    foto_CNH: string;
    RG: string;
    DPVAT: string;
    CRLV: string;
    avaliacao_como_prestador: number;
    criado_em: Date;
    modificado_em: Date;
    usuario_ativo: boolean;
    id_viagens?: string[];
    historico_de_viagens?: string[];
    carro: Record<string, any>;
}
export type UsuarioDocument = Usuario & Document;
export declare const UsuarioSchema: mongoose.Schema<Usuario, mongoose.Model<Usuario, any, any, any, mongoose.Document<unknown, any, Usuario> & Usuario & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Usuario, mongoose.Document<unknown, {}, mongoose.FlatRecord<Usuario>> & mongoose.FlatRecord<Usuario> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
