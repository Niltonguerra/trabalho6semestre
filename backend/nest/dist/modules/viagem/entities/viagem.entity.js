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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViagemSchema = exports.Viagem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Viagem = class Viagem {
};
exports.Viagem = Viagem;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: false, auto: true }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], Viagem.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Viagem.prototype, "custo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'usuario', required: false }),
    __metadata("design:type", Array)
], Viagem.prototype, "id_usuarios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Viagem.prototype, "origem", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Viagem.prototype, "destino", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", Date)
], Viagem.prototype, "data_hora_partida", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", Date)
], Viagem.prototype, "data_hora_chegada", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: false }),
    __metadata("design:type", Number)
], Viagem.prototype, "quantidade_de_vagas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Viagem.prototype, "nome_prestador", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], Viagem.prototype, "finalizada", void 0);
exports.Viagem = Viagem = __decorate([
    (0, mongoose_1.Schema)()
], Viagem);
exports.ViagemSchema = mongoose_1.SchemaFactory.createForClass(Viagem);
//# sourceMappingURL=viagem.entity.js.map