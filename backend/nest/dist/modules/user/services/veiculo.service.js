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
exports.VeiculoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VeiculoService = class VeiculoService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async updateCarro(prestadorId, carroData) {
        const prestador = await this.userModel.findById(prestadorId);
        if (!prestador) {
            throw new common_1.NotFoundException('Prestador não encontrado');
        }
        prestador.carro = {
            placa: carroData.placa,
            modelo: carroData.modelo,
            cor: carroData.cor,
            ano: carroData.ano,
            foto: carroData.foto,
            criado_em: new Date(),
            atualizado_em: new Date(),
        };
        await prestador.save();
        return {
            mensagem: 'Carro cadastrado com sucesso',
            statusCode: 200,
        };
    }
    async deletarCarro(prestadorId) {
        const prestador = await this.userModel.findById(prestadorId);
        if (!prestador) {
            throw new common_1.NotFoundException('Prestador não encontrado');
        }
        prestador.carro = undefined;
        await prestador.save();
        return {
            mensagem: 'Carro removido com sucesso',
            statusCode: 200,
        };
    }
};
exports.VeiculoService = VeiculoService;
exports.VeiculoService = VeiculoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VeiculoService);
//# sourceMappingURL=veiculo.service.js.map