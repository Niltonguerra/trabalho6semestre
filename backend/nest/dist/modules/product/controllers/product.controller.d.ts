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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { CriaProductDTO } from '../dtos/CriarProduct.dto';
import { StoreService } from 'src/modules/store/services/store.service';
import { ServiceProductForStore } from '../services/productStore.service';
import { ListaProductDTO } from '../dtos/listaProduct.dto';
export declare class ProductController {
    private readonly serviceProduct;
    private readonly serviceStore;
    private readonly serviceStoreProduct;
    constructor(serviceProduct: ProductService, serviceStore: StoreService, serviceStoreProduct: ServiceProductForStore);
    findProductsWithStore(nome: string): Promise<import("../dtos/listaProduct.dto").ListaProductForStoreDTO>;
    findByField(campo: string, valor: string, limit: number): Promise<{
        resultado: ListaProductDTO[];
        message: string;
    }>;
    findAll(): Promise<Product[]>;
    create(req: any, product: CriaProductDTO): Promise<{
        message: string;
        usuario?: undefined;
    } | {
        usuario: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    update(req: any, product: Product): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    remove(req: any): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Product> & Product & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
}
