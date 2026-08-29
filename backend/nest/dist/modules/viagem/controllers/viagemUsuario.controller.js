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
exports.ViagemUsuarioController = void 0;
const common_1 = require("@nestjs/common");
const viagemUsuario_service_1 = require("../services/viagemUsuario.service");
const rolesUser_guard_1 = require("../../user/Guards/rolesUser.guard");
const jwtAuthUser_guard_1 = require("../../user/Guards/jwtAuthUser.guard");
const chat_service_1 = require("../../chat/services/chat.service");
let ViagemUsuarioController = class ViagemUsuarioController {
    constructor(viagemUsuarioService, chatService) {
        this.viagemUsuarioService = viagemUsuarioService;
        this.chatService = chatService;
    }
    async listarUmViagem(idViagem) {
        return this.viagemUsuarioService.listarUmViagem(idViagem);
    }
    async listaTodasAsViagensPorUsuario(req) {
        const userId = req.user.userId;
        return this.viagemUsuarioService.listaTodasAsViagensPorUsuario(userId);
    }
    async solicitarViagem(idViagem, req) {
        const userId = req.user.userId;
        const reponse = this.viagemUsuarioService.solicitarViagem(idViagem, userId);
        const response2 = this.chatService.createRoom((await reponse).dadosViagem.idViagem, (await reponse).dadosViagem.idsUsuarios);
        return {
            mensagem: 'carona solicitada com sucesso!',
            statusCode: 200,
        };
    }
    async finalizarViagem(idViagem) {
        return this.viagemUsuarioService.finalizarViagem(idViagem);
    }
};
exports.ViagemUsuarioController = ViagemUsuarioController;
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Post)('listaUmaViagem'),
    __param(0, (0, common_1.Body)('idViagem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViagemUsuarioController.prototype, "listarUmViagem", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('usuarioViagens'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViagemUsuarioController.prototype, "listaTodasAsViagensPorUsuario", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('solicitar'),
    __param(0, (0, common_1.Body)('idViagem')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ViagemUsuarioController.prototype, "solicitarViagem", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_1.Get)('finalizar'),
    __param(0, (0, common_1.Body)('idViagem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViagemUsuarioController.prototype, "finalizarViagem", null);
exports.ViagemUsuarioController = ViagemUsuarioController = __decorate([
    (0, common_1.Controller)('viagens'),
    __metadata("design:paramtypes", [viagemUsuario_service_1.ViagemUsuarioService,
        chat_service_1.ChatService])
], ViagemUsuarioController);
//# sourceMappingURL=viagemUsuario.controller.js.map