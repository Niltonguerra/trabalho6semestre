"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findByField(campo, valor, limit) {
        try {
            let query = {};
            query[campo] = valor;
            let searchQuery = this.productModel.find(query);
            if (limit) {
                searchQuery = searchQuery.limit(limit);
            }
            const data = await searchQuery.exec();
            if (!data) {
                throw new Error('Erro ao buscar os produtos pelo campo informado');
            }
            const retorno = data.map((product) => {
                return {
                    nome: product.nome,
                    descricao: product.descricao,
                    preco: product.preco,
                    quantidade: product.quantidade,
                    foto: product.foto,
                    tags: product.tags,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os produtos no service:', error);
            throw new Error('Erro ao buscar todos os produtos no service');
        }
    }
    async create(doc) {
        const result = await new this.productModel(doc).save();
        return result;
    }
    async findAll() {
        const pesquisado = await this.productModel.find().exec();
        return pesquisado;
    }
    async findAllRecomendation() {
        const pesquisado = await this.productModel.find().exec();
        const result = pesquisado.map((product) => {
            return {
                _id: product._id.toString(),
                store_id: product.store_id,
                tags: product.tags,
                nome: product.nome,
                descricao: product.descricao,
                preco: product.preco,
                quantidade: product.quantidade,
                foto: product.foto,
                criado_em: product.Criado_em,
                atualizado_em: product.atualizado_em,
            };
        });
        return result;
    }
    async findById(id) {
        const result = await this.productModel.findById(id).exec();
        return result;
    }
    async update(Product, id) {
        const updatedproduct = await this.productModel
            .findByIdAndUpdate(id, Product, { new: true })
            .exec();
        return updatedproduct;
    }
    async remove(id) {
        const deletedproduct = await this.productModel.findByIdAndDelete(id).exec();
        return deletedproduct;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
//# sourceMappingURL=product.service.js.map