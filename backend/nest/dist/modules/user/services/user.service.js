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
var UsuarioService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let UsuarioService = UsuarioService_1 = class UsuarioService {
    constructor(usuarioModel, jwtService, configService) {
        this.usuarioModel = usuarioModel;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new common_1.Logger(UsuarioService_1.name);
    }
    async findByField(campo, valor, limit) {
        try {
            let query = {};
            query[campo] = valor;
            let searchQuery = this.usuarioModel.find(query);
            if (limit) {
                searchQuery = searchQuery.limit(limit);
            }
            const data = await searchQuery.exec();
            if (!data) {
                throw new Error('Erro ao buscar o usuário pelo campo informado');
            }
            const retorno = data.map((usuario) => {
                return {
                    nome: usuario.nome,
                    email: usuario.email,
                    telefone: usuario.telefone,
                    foto: usuario.foto,
                    avaliacao_como_cliente: usuario.avaliacao_como_cliente,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os usuários no service:', error);
            throw new Error('Erro ao buscar todos os usuários no service');
        }
    }
    async findByEmail(valor) {
        try {
            const pesquisa = await this.usuarioModel.findOne({ email: valor }).exec();
            const retorno = {
                _id: pesquisa._id.toString(),
                senha: pesquisa.senha,
                nome: pesquisa.nome,
                email: pesquisa.email
            };
            return retorno;
        }
        catch (error) {
            console.error('Erro ao tentar encontrar usuário pelo email:', error);
            throw new common_1.HttpException('Erro ao tentar encontrar usuário pelo email', 400);
        }
    }
    async CriarUsuario(usuario) {
        try {
            const newusuario = {
                CPF: usuario.CPF,
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senha,
                telefone: usuario.telefone,
                foto: usuario.foto,
                data_nascimento: usuario.data_nascimento,
                endereco: usuario.endereco,
                usuario_ativo: true,
                tipo_conta: 'usuario',
                historico_de_viagens: [],
                avaliacao_como_cliente: 0,
                criado_em: new Date(),
                modificado_em: new Date(),
                avaliacao_como_prestador: undefined,
                carro: undefined,
                CNH: undefined,
                RG: undefined,
                CRLV: undefined,
                foto_CNH: undefined,
                DPVAT: undefined,
            };
            const data = await new this.usuarioModel(newusuario).save();
            if (!data) {
                console.error('erro ao cadastrar o usuário no service');
                throw new Error('Erro ao cadastrar o usuário, por favor tente mais tarde');
            }
            return {
                nome: data.nome,
                email: data.email,
            };
        }
        catch (error) {
            console.error('erro cadastrar um novo usuário, erro:', error);
            throw new Error('erro cadastrar um novo usuário');
        }
    }
    async verificaEmail(token) {
        try {
            const decoded = this.jwtService.verify(token, { secret: this.configService.get('SECRET_JWT_EMAIL') });
            if (!decoded || !decoded.email) {
                throw new Error('Token não contém um e-mail válido.');
            }
            return {
                mensagem: decoded.email,
                statusCode: 200,
            };
        }
        catch (error) {
            this.logger.error(`Erro na verificação de email: ${error.message}`);
            if (error.name === 'TokenExpiredError') {
                return {
                    mensagem: 'Token expirado, solicite um novo',
                    statusCode: 401,
                };
            }
            return {
                mensagem: 'Token inválido ou expirado',
                statusCode: 400,
            };
        }
    }
    async findAll() {
        try {
            const data = await this.usuarioModel.find().exec();
            if (!data) {
                console.log('Erro ao buscar todos os usuários no banco de dados');
                throw new Error('Erro ao buscar todos os usuários');
            }
            const retorno = data.map((usuario) => {
                return {
                    nome: usuario.nome,
                    email: usuario.email,
                    telefone: usuario.telefone,
                    foto: usuario.foto,
                    avaliacao_como_cliente: usuario.avaliacao_como_cliente,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os usuários no service:', error);
            throw new Error('Erro ao buscar todos os usuários no service');
        }
    }
    async ListaUmUsuarioDono(id) {
        try {
            const usuario = await this.usuarioModel.findById(id).exec();
            if (!usuario) {
                throw new Error('Erro, não foi possivel encontrar o usuário pelo id informado');
            }
            const retorno = {
                nome: usuario.nome,
                email: usuario.email,
                telefone: usuario.telefone,
                foto: usuario.foto,
                data_nascimento: usuario.data_nascimento,
                endereco: usuario.endereco,
                avaliacao_como_cliente: usuario.avaliacao_como_cliente,
                historico_de_viagens: [],
                CPF: usuario.CPF,
                tipo_conta: usuario.tipo_conta,
                id_viagens: usuario.id_viagens,
            };
            return retorno;
        }
        catch (error) {
            console.error('Error finding usuario by ID:', error);
            throw new Error('Failed to find usuario by ID');
        }
    }
    async AtualizarUsuario(usuario, id) {
        try {
            const updatedusuario = await this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
            if (!updatedusuario) {
                throw new common_1.NotFoundException('Usuario não encontrado para realizar a atualização');
            }
            const retorno = {
                nome: updatedusuario.nome,
                email: updatedusuario.email,
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
    async DesativarUsuario(id) {
        try {
            const usuario = {
                usuario_ativo: false,
            };
            const disableusuario = await this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
            if (!disableusuario) {
                throw new common_1.NotFoundException('Usuario não encontrado para realizar a desativação');
            }
            const retorno = {
                nome: disableusuario.nome,
                email: disableusuario.email,
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
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = UsuarioService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], UsuarioService);
//# sourceMappingURL=user.service.js.map