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
exports.HistoricoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HistoricoService = class HistoricoService {
    constructor(historicoModel) {
        this.historicoModel = historicoModel;
    }
    async create(createHistoricoDto) {
        const newHistorico = new this.historicoModel(createHistoricoDto);
        return newHistorico.save();
    }
    async findAll() {
        return this.historicoModel.find().exec();
    }
    async findOne(id) {
        const historico = await this.historicoModel.findById(id).exec();
        if (!historico) {
            throw new common_1.NotFoundException(`Histórico com ID ${id} não encontrado`);
        }
        return historico;
    }
    async findByIds(ids) {
        return this.historicoModel.find({ _id: { $in: ids } }).exec();
    }
    async update(id, updateHistoricoDto) {
        const updatedHistorico = await this.historicoModel
            .findByIdAndUpdate(id, updateHistoricoDto, { new: true })
            .exec();
        if (!updatedHistorico) {
            throw new common_1.NotFoundException(`Histórico com ID ${id} não encontrado`);
        }
        return updatedHistorico;
    }
    async remove(id) {
        const result = await this.historicoModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Histórico com ID ${id} não encontrado`);
        }
    }
};
exports.HistoricoService = HistoricoService;
exports.HistoricoService = HistoricoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('historico')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HistoricoService);
//# sourceMappingURL=historico.service.js.map