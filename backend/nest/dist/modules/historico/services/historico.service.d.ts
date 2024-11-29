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
import { CreateHistoricoDto } from '../dtos/CriarHistorico.dto';
import { UpdateHistoricoDto } from '../dtos/AtualizarHistorico.dto';
import { Historico } from '../entities/historico.entity';
export declare class HistoricoService {
    private historicoModel;
    constructor(historicoModel: Model<Historico>);
    create(createHistoricoDto: CreateHistoricoDto): Promise<Historico>;
    findAll(): Promise<Historico[]>;
    findOne(id: string): Promise<Historico>;
    findByIds(ids: string[]): Promise<Historico[]>;
    update(id: string, updateHistoricoDto: UpdateHistoricoDto): Promise<Historico>;
    remove(id: string): Promise<void>;
}
