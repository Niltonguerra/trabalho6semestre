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
exports.ViagemUsuarioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../../user/services/user.service");
const message_schema_1 = require("../../chat/schemas/message.schema");
const chatRoom_schema_1 = require("../../chat/schemas/chatRoom.schema");
let ViagemUsuarioService = class ViagemUsuarioService {
    constructor(viagemModel, usuarioService, messageModel, chatRoomModel) {
        this.viagemModel = viagemModel;
        this.usuarioService = usuarioService;
        this.messageModel = messageModel;
        this.chatRoomModel = chatRoomModel;
    }
    async listarUmViagem(idViagem) {
        try {
            const viagem = await this.viagemModel.findById(idViagem).exec();
            if (!viagem) {
                throw new common_1.NotFoundException('Viagem não encontrada');
            }
            return {
                MensagemRetornoDTO: {
                    mensagem: 'Viagem encontrada',
                    statusCode: 200,
                },
                ListarViagemDto: {
                    _id: viagem._id.toString(),
                    custo: viagem.custo,
                    origem: viagem.origem,
                    destino: viagem.destino,
                    data_hora_partida: viagem.data_hora_partida,
                    data_hora_chegada: viagem.data_hora_chegada,
                    quantidade_de_vagas: viagem.quantidade_de_vagas,
                    nome_prestador: viagem.nome_prestador,
                    id_usuarios: viagem.id_usuarios,
                }
            };
        }
        catch (error) {
            console.error('Erro ao buscar viagem:', error);
            throw new Error('Erro ao buscar a viagem');
        }
    }
    async listaTodasAsViagensPorUsuario(idUsuario) {
        try {
            const viagens = await this.viagemModel.find({ id_usuarios: { $in: [idUsuario] } }).exec();
            if (!viagens || viagens.length === 0) {
                return {
                    MensagemRetornoDTO: {
                        mensagem: 'Nenhuma viagem encontrada',
                        statusCode: 404,
                    },
                };
            }
            const viagensMapeadas = viagens.map((viagem) => ({
                _id: viagem._id.toString(),
                id_usuarios: viagem.id_usuarios,
                custo: viagem.custo,
                origem: viagem.origem,
                destino: viagem.destino,
                data_hora_partida: viagem.data_hora_partida,
                data_hora_chegada: viagem.data_hora_chegada,
                quantidade_de_vagas: viagem.quantidade_de_vagas,
                nome_prestador: viagem.nome_prestador,
            }));
            return {
                MensagemRetornoDTO: {
                    mensagem: 'Viagens encontradas',
                    statusCode: 200,
                },
                ListarViagemDto: viagensMapeadas,
            };
        }
        catch (error) {
            console.error('Erro ao listar as viagens do usuário:', error);
            throw new Error('Erro ao listar as viagens, tente novamente mais tarde');
        }
    }
    async solicitarViagem(idViagem, usuarioId) {
        try {
            const viagem = await this.viagemModel.findById(idViagem).exec();
            if (!viagem) {
                throw new common_1.NotFoundException('Viagem não encontrada');
            }
            if (viagem.quantidade_de_vagas <= 0) {
                throw new common_1.NotFoundException('Não há mais vagas disponíveis para essa viagem');
            }
            viagem.quantidade_de_vagas -= 1;
            if (!viagem.id_usuarios.includes(usuarioId)) {
                viagem.id_usuarios.push(usuarioId);
                await viagem.save();
            }
            else {
                throw new common_1.NotFoundException('Usuário já está na viagem');
            }
            const usuario = await this.usuarioService.ListaUmUsuarioDono(usuarioId);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            if (!usuario.id_viagens.includes(idViagem)) {
                usuario.id_viagens.push(idViagem);
                await this.usuarioService.AtualizarUsuario(usuario, usuarioId);
            }
            return {
                mensagem: 'Viagem solicitada com sucesso pelo usuário',
                statusCode: 200,
                dadosViagem: {
                    idViagem: viagem._id.toString(),
                    idsUsuarios: viagem.id_usuarios,
                },
            };
        }
        catch (error) {
            console.error('Erro ao solicitar a viagem:', error);
            throw new common_1.InternalServerErrorException('Erro ao solicitar a viagem, tente novamente mais tarde');
        }
    }
    async finalizarViagem(idViagem) {
        try {
            const viagem = await this.viagemModel.findById(idViagem).exec();
            viagem.finalizada = true;
            await viagem.save();
            return {
                mensagem: 'Viagem finalizada com sucesso',
                statusCode: 200,
                dadosViagem: {
                    idViagem: viagem._id,
                    nomePrestador: viagem.nome_prestador,
                },
            };
        }
        catch (error) {
            console.error('Erro ao finalizar a viagem:', error);
            throw new Error('Erro ao finalizar a viagem');
        }
    }
};
exports.ViagemUsuarioService = ViagemUsuarioService;
exports.ViagemUsuarioService = ViagemUsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('viagens')),
    __param(2, (0, mongoose_1.InjectModel)(message_schema_1.Message.name)),
    __param(3, (0, mongoose_1.InjectModel)(chatRoom_schema_1.ChatRoom.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UsuarioService,
        mongoose_2.Model,
        mongoose_2.Model])
], ViagemUsuarioService);
//# sourceMappingURL=viagemUsuario.service.js.map