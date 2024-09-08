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
import { Store } from '../entities/store.entity';
import { Model } from 'mongoose';
import { ListaStoreDTO, ListaStoreRetorno } from '../dtos/listaStore.dto';
import { LoginStoreInternoDTO } from 'src/modules/store/submodules/auth-store/dtos/AuthStore.dto';
import { AtualizaStoreDTO } from '../dtos/AtualizarStore.dto';
export declare class StoreService {
    private readonly storeModel;
    constructor(storeModel: Model<Store>);
    create(doc: any): Promise<import("mongoose").Document<unknown, {}, Store> & Store & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findByName(nome: string): Promise<string>;
    findAll(): Promise<ListaStoreDTO[]>;
    findById(id: string): Promise<ListaStoreDTO | null>;
    findByEmail(valor: string): Promise<LoginStoreInternoDTO | null>;
    findByField(campo: string, valor: string, limit?: number): Promise<ListaStoreDTO[]>;
    update(store: AtualizaStoreDTO, id: string): Promise<ListaStoreRetorno>;
    updateProductIdForStore(ProductID: string, StoreID: string): Promise<import("mongoose").Document<unknown, {}, Store> & Store & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    disable(id: string): Promise<any>;
}
