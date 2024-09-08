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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findByField(campo, valor, limit) {
        try {
            let query = {};
            query[campo] = valor;
            let searchQuery = this.userModel.find(query);
            if (limit) {
                searchQuery = searchQuery.limit(limit);
            }
            const data = await searchQuery.exec();
            if (!data) {
                throw new Error('Erro ao buscar o usuário pelo campo informado');
            }
            const retorno = data.map((user) => {
                return {
                    nome: user.nome,
                    email: user.email,
                    telefone: user.telefone,
                    foto: user.foto,
                    data_nasc: user.data_nasc,
                    tags: user.tags,
                    historico: user.historico,
                    endereco: user.endereco,
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
            const pesquisa = await this.userModel.findOne({ email: valor }).exec();
            if (!pesquisa) {
                console.error('Usuário não encontrado para o email informado:', valor);
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
            console.error('Erro ao tentar encontrar usuário pelo email:', error);
            throw new Error('Erro ao tentar encontrar usuário pelo email');
        }
    }
    async create(user) {
        try {
            const newUser = {
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                telefone: user.telefone,
                foto: user.foto,
                data_nasc: user.data_nasc,
                tags: user.tags,
                endereco: user.endereco,
                usuario_ativo: true,
                tipo_de_conta: 'usuario',
                confirmado: false,
                historico: [],
                criado_em: new Date(),
                atualizado_em: new Date(),
            };
            const data = await new this.userModel(newUser).save();
            if (!data) {
                console.error('erro ao cadastrar o usuário no service');
                throw new Error('Erro ao cadastrar o usuário, por favor tente mais tarde');
            }
            const retorno = {
                nome: data.nome,
                email: data.email,
            };
            return retorno;
        }
        catch (error) {
            console.error('erro cadastrar um novo usuário, erro:', error);
            throw new Error('erro cadastrar um novo usuário');
        }
    }
    async findAll() {
        try {
            const data = await this.userModel.find().exec();
            if (!data) {
                console.log('Erro ao buscar todos os usuários no banco de dados');
                throw new Error('Erro ao buscar todos os usuários');
            }
            const retorno = data.map((user) => {
                return {
                    nome: user.nome,
                    email: user.email,
                    telefone: user.telefone,
                    foto: user.foto,
                    data_nasc: user.data_nasc,
                    tags: user.tags,
                    historico: user.historico,
                    endereco: user.endereco,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os usuários no service:', error);
            throw new Error('Erro ao buscar todos os usuários no service');
        }
    }
    async findById(id) {
        try {
            const user = await this.userModel.findById(id).exec();
            if (!user) {
                throw new Error('Erro, não foi possivel encontrar o usuário pelo id informado');
            }
            const retorno = {
                nome: user.nome,
                email: user.email,
                telefone: user.telefone,
                foto: user.foto,
                data_nasc: user.data_nasc,
                tags: user.tags,
                historico: user.historico,
                endereco: user.endereco,
            };
            return retorno;
        }
        catch (error) {
            console.error('Error finding user by ID:', error);
            throw new Error('Failed to find user by ID');
        }
    }
    async update(user, id) {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
            if (!updatedUser) {
                throw new common_1.NotFoundException('Usuario não encontrado para realizar a atualização');
            }
            const retorno = {
                nome: updatedUser.nome,
                email: updatedUser.email,
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
    async disable(id) {
        try {
            const user = {
                usuario_ativo: false,
            };
            const disableUser = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
            if (!disableUser) {
                throw new common_1.NotFoundException('Usuario não encontrado para realizar a desativação');
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map