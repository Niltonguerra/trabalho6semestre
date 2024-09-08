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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../services/store.service");
const passwordEncryption_pipe_1 = require("../pipes/passwordEncryption.pipe");
const CriarStore_dto_1 = require("../dtos/CriarStore.dto");
const AtualizarStore_dto_1 = require("../dtos/AtualizarStore.dto");
const jwt_auth_store_guard_1 = require("../submodules/auth-store/guards/jwt-auth-store.guard");
const roles_store_guard_1 = require("../submodules/auth-store/guards/roles-store.guard");
let StoreController = class StoreController {
    constructor(service) {
        this.service = service;
    }
    async findByField(campo, valor, limit) {
        const retorno = await this.service.findByField(campo, valor, limit);
        return {
            resultado: retorno,
            message: 'Busca realizada com sucesso',
        };
    }
    async findAll() {
        const usuario = await this.service.findAll();
        return {
            usuario,
            message: "todos os usuários encontrados com sucesso!"
        };
    }
    async create(store) {
        const verificaEmail = await this.service.findByField('email', store.email);
        if (verificaEmail.length > 0) {
            return {
                message: 'E-mail já cadastrado',
                usuario: null,
            };
        }
        const verificaCNPJ = await this.service.findByField('CNPJ', store.CNPJ);
        if (verificaCNPJ.length > 0) {
            return {
                message: 'CPNJ já cadastrado',
                usuario: null,
            };
        }
        const newStore = {
            ...store,
            confirmacao: false,
            store_ativo: true,
            criado_em: new Date(),
            atualizado_em: new Date(),
        };
        const retorno = await this.service.create(newStore);
        return {
            Store: retorno,
            message: 'criado com sucesso',
        };
    }
    async ReadOwnerInformationStore(req) {
        const storeId = req.user.userId;
        const store = await this.service.findById(storeId);
        return {
            store,
            message: 'Loja encontrada com sucesso',
        };
    }
    async update(req, user) {
        const storeId = req.user.userId;
        const retorno = await this.service.update(user, storeId);
        return {
            usuario: retorno,
            message: 'editado com sucesso!'
        };
    }
    async remove(req) {
        const storeId = req.user.userId;
        const retorno = await this.service.disable(storeId);
        return {
            retorno: retorno,
            message: 'excluido com sucesso',
        };
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Get)('search/:campo/:valor'),
    __param(0, (0, common_1.Param)('campo')),
    __param(1, (0, common_1.Param)('valor')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findByField", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe(), passwordEncryption_pipe_1.HashPasswordPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriarStore_dto_1.CriaStoreDTO]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_store_guard_1.JwtAuthGuardStore, roles_store_guard_1.RolesGuardStore),
    (0, common_1.Get)('read'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "ReadOwnerInformationStore", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_store_guard_1.JwtAuthGuardStore, roles_store_guard_1.RolesGuardStore),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AtualizarStore_dto_1.AtualizaStoreDTO]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_store_guard_1.JwtAuthGuardStore, roles_store_guard_1.RolesGuardStore),
    (0, common_1.Delete)('disable'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "remove", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('store'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map