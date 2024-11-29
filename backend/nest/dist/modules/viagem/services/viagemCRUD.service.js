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
exports.ViagemCRUDService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../../user/services/user.service");
let ViagemCRUDService = class ViagemCRUDService {
    constructor(viagemModel, usuarioService) {
        this.viagemModel = viagemModel;
        this.usuarioService = usuarioService;
    }
    async criarViagem(Viagem, nomePrestador, idPrestador) {
        try {
            const newViagem = {
                custo: Viagem.custo,
                origem: Viagem.origem,
                destino: Viagem.destino,
                data_hora_partida: Viagem.data_hora_partida,
                data_hora_chegada: Viagem.data_hora_chegada,
                quantidade_de_vagas: Viagem.quantidade_de_vagas,
                nome_prestador: nomePrestador,
                finalizada: false,
                id_usuarios: [idPrestador],
            };
            const data = await new this.viagemModel(newViagem).save();
            if (!data) {
                console.error('erro ao cadastrar a viagem no service');
                throw new Error('Erro ao cadastrar a viagem, por favor tente mais tarde');
            }
            const usuario = await this.usuarioService.ListaUmUsuarioDono(idPrestador);
            usuario.id_viagens = [...usuario.id_viagens, data._id.toString()];
            await this.usuarioService.AtualizarUsuario(usuario, idPrestador);
            if (!usuario) {
                console.error('erro ao cadastrar a viagem no usuario no service');
                throw new Error('Erro ao cadastrar a viagem no usuario, por favor tente mais tarde');
            }
            return {
                mensagem: 'Viagem criada com sucesso',
                statusCode: 201,
                dadosViagem: {
                    nomePrestador: data.nome_prestador,
                    idViagem: data._id,
                },
            };
        }
        catch (error) {
            console.error('erro cadastrar uma nova viagem, erro:', error);
            throw new Error('erro cadastrar uma nova viagem');
        }
    }
    async atualizarViagem(atualizaViagemDto, idViagem, nomePrestador) {
        try {
            const novaViagem = {
                custo: atualizaViagemDto.custo,
                origem: atualizaViagemDto.origem,
                destino: atualizaViagemDto.destino,
                data_hora_partida: atualizaViagemDto.data_hora_partida,
                data_hora_chegada: atualizaViagemDto.data_hora_chegada,
                quantidade_de_vagas: atualizaViagemDto.quantidade_de_vagas,
                nome_prestador: nomePrestador,
            };
            const data = await this.viagemModel.findByIdAndUpdate(idViagem, novaViagem, { new: true });
            if (!data) {
                console.error('Erro ao atualizar a viagem no service');
                throw new Error('Erro ao atualizar a viagem, por favor tente mais tarde');
            }
            return {
                mensagem: 'Viagem atualizada com sucesso',
                statusCode: 200,
                dadosViagem: {
                    nomePrestador: data.nome_prestador,
                    idViagem: data._id,
                },
            };
        }
        catch (error) {
            console.error('Erro ao atualizar a viagem, erro:', error);
            throw new Error('Erro ao atualizar a viagem');
        }
    }
    async listaTodasAsViagens() {
        try {
            const viagens = await this.viagemModel.find().exec();
            if (!viagens || viagens.length === 0) {
                return {
                    MensagemRetornoDTO: {
                        mensagem: 'Nenhuma viagem encontrada',
                        statusCode: 404
                    },
                    ListarViagemDto: [],
                };
            }
            const TodasAsViagens = viagens.map((viagem) => {
                return {
                    _id: viagem._id.toString(),
                    custo: viagem.custo,
                    origem: viagem.origem,
                    destino: viagem.destino,
                    data_hora_partida: viagem.data_hora_partida,
                    data_hora_chegada: viagem.data_hora_chegada,
                    quantidade_de_vagas: viagem.quantidade_de_vagas,
                    nome_prestador: viagem.nome_prestador,
                    id_usuarios: viagem.id_usuarios,
                };
            });
            return {
                MensagemRetornoDTO: {
                    mensagem: 'viagens encontradas com sucesso!',
                    statusCode: 201
                },
                ListarViagemDto: TodasAsViagens,
            };
        }
        catch (error) {
            console.error('Erro ao listar todas as viagens:', error);
            throw new Error('Erro ao listar todas as viagens, tente novamente mais tarde');
        }
    }
    async deletarViagem(idViagem) {
        try {
            const viagemDeletada = await this.viagemModel.findByIdAndDelete(idViagem).exec();
            if (!viagemDeletada) {
                return {
                    mensagem: 'Viagem não encontrada',
                    statusCode: 404,
                };
            }
            return {
                mensagem: 'Viagem deletada com sucesso',
                statusCode: 200,
                dadosViagem: {
                    nomePrestador: viagemDeletada.nome_prestador,
                    idViagem: viagemDeletada._id,
                },
            };
        }
        catch (error) {
            console.error('Erro ao deletar a viagem:', error);
            throw new Error('Erro ao deletar a viagem, tente novamente mais tarde');
        }
    }
};
exports.ViagemCRUDService = ViagemCRUDService;
exports.ViagemCRUDService = ViagemCRUDService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('viagens')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UsuarioService])
], ViagemCRUDService);
//# sourceMappingURL=viagemCRUD.service.js.map