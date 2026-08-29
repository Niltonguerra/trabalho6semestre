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
exports.PrestadorController = void 0;
const common_1 = require("@nestjs/common");
const prestador_service_1 = require("../services/prestador.service");
const jwtAuthUser_guard_1 = require("../Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../Guards/rolesUser.guard");
const AtualizarPrestador_dto_1 = require("../dtos/prestador/AtualizarPrestador.dto");
let PrestadorController = class PrestadorController {
    constructor(prestadorservice) {
        this.prestadorservice = prestadorservice;
    }
    async findByField(campo, valor, limit) {
        const retorno = await this.prestadorservice.findByField(campo, valor, limit);
        return {
            resultado: retorno,
            message: 'Busca realizada com sucesso',
        };
    }
    async ListaPrestadorsPublicos() {
        const Prestador = await this.prestadorservice.findAll();
        return {
            Prestador,
            message: "todos os usuários encontrados com sucesso!"
        };
    }
    async findById(req) {
        const PrestadorId = req.user.userId;
        const Prestador = await this.prestadorservice.ListaUmPrestadorDono(PrestadorId);
        return {
            Prestador,
            message: 'Usuário encontrado com sucesso',
        };
    }
    async update(req, Prestador) {
        const PrestadorId = req.user.userId;
        const retorno = await this.prestadorservice.AtualizarPrestador(Prestador, PrestadorId);
        return {
            mensagem: retorno.mensagem,
            statusCode: retorno.statusCode,
        };
    }
};
exports.PrestadorController = PrestadorController;
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('search/:campo/:valor/:limit'),
    __param(0, (0, common_1.Param)('campo')),
    __param(1, (0, common_1.Param)('valor')),
    __param(2, (0, common_1.Param)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], PrestadorController.prototype, "findByField", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrestadorController.prototype, "ListaPrestadorsPublicos", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('read'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PrestadorController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AtualizarPrestador_dto_1.AtualizaPrestadorDTO]),
    __metadata("design:returntype", Promise)
], PrestadorController.prototype, "update", null);
exports.PrestadorController = PrestadorController = __decorate([
    (0, common_1.Controller)('prestador'),
    __metadata("design:paramtypes", [prestador_service_1.PrestadorService])
], PrestadorController);
//# sourceMappingURL=prestador.controller.js.map