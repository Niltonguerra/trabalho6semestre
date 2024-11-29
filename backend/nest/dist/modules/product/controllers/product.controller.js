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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../services/product.service");
const product_entity_1 = require("../entities/product.entity");
const productStore_service_1 = require("../services/productStore.service");
const prestador_service_1 = require("../../user/services/prestador.service");
const jwtAuthUser_guard_1 = require("../../user/Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../../user/Guards/rolesUser.guard");
let ProductController = class ProductController {
    constructor(productService, prestadorService, serviceStoreProduct) {
        this.productService = productService;
        this.prestadorService = prestadorService;
        this.serviceStoreProduct = serviceStoreProduct;
    }
    async findByField(campo, valor, limit) {
        const retorno = await this.productService.findByField(campo, valor, limit);
        return {
            resultado: retorno,
            message: 'Busca realizada com sucesso',
        };
    }
    async findAll() {
        const retorno = await this.productService.findAll();
        return retorno;
    }
    async update(req, product) {
        const storeId = req.user.userId;
        const retorno = await this.productService.update(product, storeId);
        return {
            usuario: retorno,
            message: 'editado com sucesso',
        };
    }
    async remove(req) {
        const storeId = req.user.userId;
        const retorno = await this.productService.remove(storeId);
        return {
            usuario: retorno,
            message: 'excluido com sucesso',
        };
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)('search/:campo/:valor'),
    __param(0, (0, common_1.Param)('campo')),
    __param(1, (0, common_1.Param)('valor')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByField", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        prestador_service_1.PrestadorService,
        productStore_service_1.ServiceProductForStore])
], ProductController);
//# sourceMappingURL=product.controller.js.map