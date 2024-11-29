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
exports.HistoricoController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuthUser_guard_1 = require("../../user/Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../../user/Guards/rolesUser.guard");
const user_service_1 = require("../../user/services/user.service");
const historico_service_1 = require("../services/historico.service");
const AtualizarHistorico_dto_1 = require("../dtos/AtualizarHistorico.dto");
const CriarHistorico_dto_1 = require("../dtos/CriarHistorico.dto");
let HistoricoController = class HistoricoController {
    constructor(UsuarioService, historicoService) {
        this.UsuarioService = UsuarioService;
        this.historicoService = historicoService;
    }
    async findProductsWithStore(req) {
        const id = req.user.userId;
        const user = await this.UsuarioService.ListaUmUsuarioDono(id);
        const idsHistorico = user.historico_de_viagens;
        const historicos = await this.historicoService.findByIds(idsHistorico);
    }
    findAll() {
        return this.historicoService.findAll();
    }
    findOne(id) {
        return this.historicoService.findOne(id);
    }
    create(createHistoricoDto) {
        return this.historicoService.create(createHistoricoDto);
    }
    update(id, updateHistoricoDto) {
        return this.historicoService.update(id, updateHistoricoDto);
    }
};
exports.HistoricoController = HistoricoController;
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('listaHistorico'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoricoController.prototype, "findProductsWithStore", null);
__decorate([
    (0, common_1.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistoricoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('buscarUm/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistoricoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('criar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriarHistorico_dto_1.CreateHistoricoDto]),
    __metadata("design:returntype", void 0)
], HistoricoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('atualizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AtualizarHistorico_dto_1.UpdateHistoricoDto]),
    __metadata("design:returntype", void 0)
], HistoricoController.prototype, "update", null);
exports.HistoricoController = HistoricoController = __decorate([
    (0, common_1.Controller)('historico'),
    __metadata("design:paramtypes", [user_service_1.UsuarioService,
        historico_service_1.HistoricoService])
], HistoricoController);
//# sourceMappingURL=historico.controller.js.map