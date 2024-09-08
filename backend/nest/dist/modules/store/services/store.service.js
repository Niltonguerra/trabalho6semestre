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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StoreService = class StoreService {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async create(doc) {
        const result = await new this.storeModel(doc).save();
        return result;
    }
    async findByName(nome) {
        try {
            const result = await this.storeModel.findOne({ nome: nome }).exec();
            if (!result) {
                console.log('Erro, não foi possivel encontrar a loja pelo nome informado');
            }
            return result._id.toString();
        }
        catch (error) {
            console.error('erro ao tentar encontrar a loja pelo nome:', error);
        }
    }
    async findAll() {
        try {
            const data = await this.storeModel.find().exec();
            if (!data) {
                console.log('Erro ao buscar todas as lojas no banco de dados');
                throw new Error('Erro ao buscar todas as lojas');
            }
            const retorno = data.map(item => ({
                _id: item._id.toString(),
                nome: item.nome,
                email: item.email,
                CNPJ: item.CNPJ,
                descricao: item.descricao,
                foto: item.foto,
                hor_abertura: item.hor_abertura,
                hor_encerramento: item.hor_encerramento,
                telefone: item.telefone,
                endereco: item.endereco,
                product_id: item.product_id ? item.product_id.toString() : 'não tem produtos relacionados a essa loja',
            }));
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todas as lojas no service:', error);
            throw new Error('Erro ao buscar todas as lojas no service');
        }
    }
    async findById(id) {
        try {
            const store = await this.storeModel.findById(id).exec();
            if (!store) {
                throw new Error('Erro, não foi possivel encontrar a empresa pelo id informado');
            }
            const retorno = {
                nome: store.nome,
                email: store.email,
                telefone: store.telefone,
                foto: store.foto,
                hor_abertura: store.hor_abertura,
                hor_encerramento: store.hor_encerramento,
                endereco: store.endereco,
                CNPJ: store.CNPJ,
                descricao: store.descricao,
            };
            return retorno;
        }
        catch (error) {
            console.error('Error finding store by ID:', error);
            throw new Error('Failed to find store by ID');
        }
    }
    async findByEmail(valor) {
        try {
            const pesquisa = await this.storeModel.findOne({ email: valor }).exec();
            if (!pesquisa) {
                console.error('Empresa não encontrado para o email informado:', valor);
                throw new Error('email incorreto!!!');
            }
            const retorno = {
                _id: pesquisa._id.toString(),
                senha: pesquisa.senha,
                nome: pesquisa.nome,
                email: pesquisa.email
            };
            return retorno;
        }
        catch (error) {
            console.error('Erro ao tentar encontrar empresa pelo email:', error);
            throw new Error('Erro ao tentar encontrar empresa pelo email');
        }
    }
    async findByField(campo, valor, limit) {
        try {
            let query = {};
            query[campo] = valor;
            let searchQuery = this.storeModel.find(query);
            if (limit) {
                searchQuery = searchQuery.limit(limit);
            }
            const data = await searchQuery.exec();
            if (!data) {
                throw new Error('Erro ao buscar a loja pelo campo informado');
            }
            const retorno = data.map((loja) => {
                return {
                    nome: loja.nome,
                    email: loja.email,
                    telefone: loja.telefone,
                    foto: loja.foto,
                    hor_abertura: loja.hor_abertura,
                    hor_encerramento: loja.hor_encerramento,
                    endereco: loja.endereco,
                    CNPJ: loja.CNPJ,
                    descricao: loja.descricao,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos as lojas no service:', error);
            throw new Error('Erro ao buscar todas as lojas no service');
        }
    }
    async update(store, id) {
        try {
            const updatedStore = await this.storeModel
                .findByIdAndUpdate(id, store, { new: true })
                .exec();
            if (!updatedStore) {
                throw new common_1.NotFoundException('Usuario não encontrado para realizar a atualização');
            }
            const retorno = {
                nome: updatedStore.nome,
                email: updatedStore.email,
            };
            return retorno;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error na atualização do usuário');
        }
    }
    async updateProductIdForStore(ProductID, StoreID) {
        const store = await this.storeModel.findById(StoreID).exec();
        if (!store) {
            throw new Error('Erro, não foi possivel encontrar a empresa pelo id informado');
        }
        let StoreIDNovo;
        if (store.product_id && Array.isArray(store.product_id)) {
            StoreIDNovo = [...store.product_id];
        }
        else {
            StoreIDNovo = [];
        }
        if (!StoreIDNovo.includes(ProductID)) {
            StoreIDNovo.push(ProductID);
        }
        const updatedStore = await this.storeModel
            .findByIdAndUpdate(StoreID, { product_id: StoreIDNovo }, { new: true })
            .exec();
        return updatedStore;
    }
    async disable(id) {
        try {
            const user = {
                store_ativo: false,
            };
            const disableUser = await this.storeModel.findByIdAndUpdate(id, user, { new: true }).exec();
            if (!disableUser) {
                throw new common_1.NotFoundException('Loja não encontrado para realizar a desativação');
            }
            const retorno = {
                nome: disableUser.nome,
                email: disableUser.email,
            };
            return retorno;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error na desativação do usuário');
        }
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Store')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoreService);
//# sourceMappingURL=store.service.js.map