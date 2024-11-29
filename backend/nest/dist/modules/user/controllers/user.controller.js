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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const CriaUsuario_dto_1 = require("../dtos/usuario/CriaUsuario.dto");
const passwordEncryption_pipe_1 = require("../pipes/passwordEncryption.pipe");
const DadosUsuarioAtualizar_dto_1 = require("../dtos/usuario/DadosUsuarioAtualizar.dto");
const email_service_1 = require("../../email/services/email.service");
const redisHash_service_1 = require("../../redis/services/redisHash.service");
const jwtAuthUser_guard_1 = require("../Guards/jwtAuthUser.guard");
const rolesUser_guard_1 = require("../Guards/rolesUser.guard");
const moment = require("moment");
let UserController = class UserController {
    constructor(service, emailService, redisHashService) {
        this.service = service;
        this.emailService = emailService;
        this.redisHashService = redisHashService;
    }
    async findByField(campo, valor, limit) {
        const retorno = await this.service.findByField(campo, valor, limit);
        return {
            resultado: retorno,
            message: 'Busca realizada com sucesso',
        };
    }
    async ListaUsuariosPublicos() {
        const usuario = await this.service.findAll();
        return {
            usuario,
            message: "todos os usuários encontrados com sucesso!"
        };
    }
    async create(user) {
        const dataConvertida = moment(user.data_nascimento, 'DD/MM/YYYY').toDate();
        user.data_nascimento = dataConvertida;
        const verificaEmail = await this.service.findByField('email', user.email);
        if (verificaEmail.length > 0) {
            throw new common_1.ConflictException('Email já cadastrado');
        }
        const verificaCPF = await this.service.findByField('CPF', user.CPF);
        if (verificaCPF.length > 0) {
            throw new common_1.ConflictException('CPF já cadastrado');
        }
        await this.emailService.EnviaVerificacaoEmail(user.email, 'usuario/CadastraUsuario');
        await this.redisHashService.setHash(user.email, user, 3600);
        return {
            mensagem: "Cadastro realizado com sucesso, verifique seu e-mail em até 1 hora para ativar sua conta",
            statusCode: 201,
            dadosUsuario: {
                email: user.email,
                nome: user.nome,
            },
        };
    }
    async CadastraUsuario(token) {
        try {
            const email = await this.service.verificaEmail(token);
            const redis = await this.redisHashService.getHash(email.mensagem);
            const retorno = await this.service.CriarUsuario(redis);
            await this.redisHashService.deleteValueHash(email.mensagem);
            return {
                mensagem: 'Email verificado com sucesso',
                statusCode: 200,
                dadosUsuario: {
                    email: retorno.email,
                    nome: retorno.nome,
                },
            };
        }
        catch (error) {
            throw new common_1.HttpException('Token inválido ou expirado', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findById(req) {
        const userId = req.user.userId;
        const usuario = await this.service.ListaUmUsuarioDono(userId);
        return {
            usuario,
            message: 'Usuário encontrado com sucesso',
        };
    }
    async update(req, user) {
        const userId = req.user.userId;
        const retorno = await this.service.AtualizarUsuario(user, userId);
        return {
            usuario: retorno,
            message: 'editado com sucesso!'
        };
    }
    async remove(req) {
        const userId = req.user.userId;
        const retorno = await this.service.DesativarUsuario(userId);
        return {
            retorno: retorno,
            message: "conta desativada com sucesso",
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_2.Get)('search/:campo/:valor'),
    __param(0, (0, common_2.Param)('campo')),
    __param(1, (0, common_2.Param)('valor')),
    __param(2, (0, common_2.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByField", null);
__decorate([
    (0, common_2.Get)('todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ListaUsuariosPublicos", null);
__decorate([
    (0, common_2.Post)('validaCadastro'),
    (0, common_2.UsePipes)(new common_2.ValidationPipe(), passwordEncryption_pipe_1.HashPasswordPipe),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaUsuario_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_2.Get)('CadastraUsuario'),
    __param(0, (0, common_2.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "CadastraUsuario", null);
__decorate([
    (0, common_2.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_2.Get)('read'),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    (0, common_2.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_2.Put)('update'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DadosUsuarioAtualizar_dto_1.DadosUsuarioAtualizarDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_2.UseGuards)(jwtAuthUser_guard_1.JwtAuthGuardUser, rolesUser_guard_1.RolesGuardUser),
    (0, common_2.Delete)('disable'),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_2.Controller)('usuario'),
    __metadata("design:paramtypes", [user_service_1.UsuarioService,
        email_service_1.EmailService,
        redisHash_service_1.RedisHashService])
], UserController);
//# sourceMappingURL=user.controller.js.map