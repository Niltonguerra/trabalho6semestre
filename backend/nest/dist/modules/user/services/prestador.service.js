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
var PrestadorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestadorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PrestadorService = PrestadorService_1 = class PrestadorService {
    constructor(userModel) {
        this.userModel = userModel;
        this.logger = new common_1.Logger(PrestadorService_1.name);
    }
    async ListaUmPrestadorDono(id) {
        try {
            const Prestador = await this.userModel.findById(id).exec();
            if (!Prestador) {
                throw new Error('Erro, não foi possivel encontrar o usuário pelo id informado');
            }
            const retorno = {
                id: Prestador._id.toString(),
                nome: Prestador.nome,
                email: Prestador.email,
                telefone: Prestador.telefone,
                foto: Prestador.foto,
                data_nascimento: Prestador.data_nascimento,
                endereco: Prestador.endereco,
                avaliacao_como_cliente: Prestador.avaliacao_como_cliente,
                historico_de_viagens: [],
                CPF: Prestador.CPF,
                tipo_conta: Prestador.tipo_conta,
                CNH: Prestador.CNH,
                RG: Prestador.RG,
                avaliacao_como_prestador: Prestador.avaliacao_como_prestador,
                CRLV: Prestador.CRLV,
                DPVAT: Prestador.DPVAT,
                foto_CNH: Prestador.foto_CNH,
                carro: {
                    ano: Prestador.carro.ano,
                    cor: Prestador.carro.cor,
                    foto: Prestador.carro.foto,
                    modelo: Prestador.carro.modelo,
                    placa: Prestador.carro.placa,
                },
                id_viagens: Prestador.id_viagens,
            };
            return retorno;
        }
        catch (error) {
            console.error('Error finding Prestador by ID:', error);
            throw new Error('Failed to find Prestador by ID');
        }
    }
    async AtualizarPrestador(Prestador, id) {
        try {
            this.logger.log(`Atualizando o prestador com id: ${id}`);
            const tornaPrestador = {
                CNH: Prestador.CNH,
                RG: Prestador.RG,
                CRLV: Prestador.CRLV,
                DPVAT: Prestador.DPVAT,
                foto_CNH: Prestador.foto_CNH,
                avaliacao_como_prestador: 3,
                tipo_conta: "prestador",
            };
            const updatedPrestador = await this.userModel.findByIdAndUpdate(id, tornaPrestador, { new: true }).exec();
            if (!updatedPrestador) {
                throw new common_1.NotFoundException('Prestador não encontrado para realizar a atualização');
            }
            return {
                mensagem: 'Prestador atualizado com sucesso',
                statusCode: 200,
                dadosUsuario: {
                    nome: updatedPrestador.nome,
                    email: updatedPrestador.email,
                }
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error na atualização do usuário');
        }
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
                    avaliacao_como_cliente: user.avaliacao_como_cliente,
                    avaliacao_como_prestador: user.avaliacao_como_prestador,
                    carro: {
                        ano: user.carro.ano,
                        cor: user.carro.cor,
                        foto: user.carro.foto,
                        modelo: user.carro.modelo,
                        placa: user.carro.placa,
                    },
                    id_viagens: user.id_viagens,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os usuários no service:', error);
            throw new Error('Erro ao buscar todos os usuários no service');
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
                    avaliacao_como_cliente: user.avaliacao_como_cliente,
                    avaliacao_como_prestador: user.avaliacao_como_prestador,
                    carro: {
                        ano: user.carro.ano,
                        cor: user.carro.cor,
                        foto: user.carro.foto,
                        modelo: user.carro.modelo,
                        placa: user.carro.placa,
                    },
                    id_viagens: user.id_viagens,
                };
            });
            return retorno;
        }
        catch (error) {
            console.error('erro ao tentar encontrar todos os usuários no service:', error);
            throw new Error('Erro ao buscar todos os usuários no service');
        }
    }
};
exports.PrestadorService = PrestadorService;
exports.PrestadorService = PrestadorService = PrestadorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PrestadorService);
//# sourceMappingURL=prestador.service.js.map