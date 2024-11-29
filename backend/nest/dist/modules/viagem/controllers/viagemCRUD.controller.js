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
exports.ViagemCRUDController = void 0;
const common_1 = require("@nestjs/common");
const viagemCRUD_service_1 = require("../services/viagemCRUD.service");
const criarViagem_dto_1 = require("../dtos/criarViagem.dto");
const AtualizaViagem_dto_1 = require("../dtos/AtualizaViagem.dto");
const jwtAuthUser_guard_1 = require("../../user/Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../../user/Guards/rolesUser.guard");
const user_service_1 = require("../../user/services/user.service");
let ViagemCRUDController = class ViagemCRUDController {
    constructor(viagemCRUDService, usuarioService) {
        this.viagemCRUDService = viagemCRUDService;
        this.usuarioService = usuarioService;
    }
    async criarViagem(criarViagemDto, req) {
        try {
            const userId = req.user.userId;
            const dados = await this.usuarioService.findByField('_id', userId);
            const nomePrestador = dados[0].nome;
            const retorno = await this.viagemCRUDService.criarViagem(criarViagemDto, nomePrestador, userId);
            return retorno;
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao criar a viagem', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async atualizarViagem(atualizaViagemDto, idViagem, req) {
        try {
            const userId = req.user.userId;
            const dados = await this.usuarioService.findByField('_id', userId);
            const nomePrestador = dados[0].nome;
            return await this.viagemCRUDService.atualizarViagem(atualizaViagemDto, idViagem, nomePrestador);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao atualizar a viagem', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async listaTodasAsViagens() {
        try {
            const retorno = await this.viagemCRUDService.listaTodasAsViagens();
            return retorno;
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao listar todas as viagens', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deletarViagem(idViagem) {
        try {
            const retorno = await this.viagemCRUDService.deletarViagem(idViagem);
            return retorno;
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao deletar a viagem', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ViagemCRUDController = ViagemCRUDController;
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criarViagem_dto_1.CriarViagemDto, Object]),
    __metadata("design:returntype", Promise)
], ViagemCRUDController.prototype, "criarViagem", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Put)('atualizar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)('idViagem')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AtualizaViagem_dto_1.AtualizaViagemDto, String, Object]),
    __metadata("design:returntype", Promise)
], ViagemCRUDController.prototype, "atualizarViagem", null);
__decorate([
    (0, common_1.Get)('listarTodos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ViagemCRUDController.prototype, "listaTodasAsViagens", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Delete)('deletar'),
    __param(0, (0, common_1.Body)('idViagem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViagemCRUDController.prototype, "deletarViagem", null);
exports.ViagemCRUDController = ViagemCRUDController = __decorate([
    (0, common_1.Controller)('viagem'),
    __metadata("design:paramtypes", [viagemCRUD_service_1.ViagemCRUDService,
        user_service_1.UsuarioService])
], ViagemCRUDController);
//# sourceMappingURL=viagemCRUD.controller.js.map