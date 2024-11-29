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
exports.VeiculoController = void 0;
const common_1 = require("@nestjs/common");
const veiculo_service_1 = require("../services/veiculo.service");
const criaVeiculo_dto_1 = require("../dtos/veiculo/criaVeiculo.dto");
const jwtAuthUser_guard_1 = require("../Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../Guards/rolesUser.guard");
let VeiculoController = class VeiculoController {
    constructor(veiculoService) {
        this.veiculoService = veiculoService;
    }
    async atualizarCarro(req, carroData) {
        return this.veiculoService.updateCarro(req.user.userId, carroData);
    }
    async deletarCarro(req) {
        return this.veiculoService.deletarCarro(req.user.userId);
    }
};
exports.VeiculoController = VeiculoController;
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, criaVeiculo_dto_1.CriarVeiculoDto]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "atualizarCarro", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "deletarCarro", null);
exports.VeiculoController = VeiculoController = __decorate([
    (0, common_1.Controller)('veiculos'),
    __metadata("design:paramtypes", [veiculo_service_1.VeiculoService])
], VeiculoController);
//# sourceMappingURL=veiculo.controller.js.map