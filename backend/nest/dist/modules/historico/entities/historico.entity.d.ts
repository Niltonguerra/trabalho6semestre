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
export declare class Historico {
    _id?: mongoose.Types.ObjectId;
    custo_viagem: string;
    origem: string;
    destino: string;
    data_hora_partida: Date;
    data_hora_chegada: Date;
    nome_prestador: string;
    nome_consumidores: string[];
    modelo_carro: string;
    cor_carro: string;
    ano_carro: string;
    foto_carro: string;
    quantidade_de_vagas_carro: Number;
    avaliacao_como_prestador: Number;
    foto_prestador: string;
    id_usuarios: string[];
}
export declare const HistoricoSchema: mongoose.Schema<Historico, mongoose.Model<Historico, any, any, any, mongoose.Document<unknown, any, Historico> & Historico & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Historico, mongoose.Document<unknown, {}, mongoose.FlatRecord<Historico>> & mongoose.FlatRecord<Historico> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
