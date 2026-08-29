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
exports.AtualizaPrestadorDTO = void 0;
const class_validator_1 = require("class-validator");
const isCNH_decorator_1 = require("../../decorator/isCNH.decorator");
const isRg_decorator_1 = require("../../decorator/isRg.decorator");
const isDpvat_decorator_1 = require("../../decorator/isDpvat.decorator");
const isCrlv_decorator_1 = require("../../decorator/isCrlv.decorator");
class AtualizaPrestadorDTO {
}
exports.AtualizaPrestadorDTO = AtualizaPrestadorDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'A CNH deve ser uma string' }),
    (0, isCNH_decorator_1.IsCnh)({ message: 'Por favor, forneça uma CNH válida com 11 dígitos.' }),
    __metadata("design:type", String)
], AtualizaPrestadorDTO.prototype, "CNH", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O RG deve ser uma string' }),
    (0, isRg_decorator_1.IsRg)({ message: 'Por favor, forneça um RG válido no formato 00.000.000-X.' }),
    __metadata("design:type", String)
], AtualizaPrestadorDTO.prototype, "RG", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O DPVAT deve ser uma string' }),
    (0, isDpvat_decorator_1.IsDpvat)({ message: 'O número do DPVAT deve ter 11 dígitos.' }),
    __metadata("design:type", String)
], AtualizaPrestadorDTO.prototype, "DPVAT", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'A foto da CNH deve ser uma string' }),
    __metadata("design:type", String)
], AtualizaPrestadorDTO.prototype, "foto_CNH", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O CRLV deve ser uma string' }),
    (0, isCrlv_decorator_1.IsCrlv)({ message: 'O número do CRLV deve ter 11 dígitos.' }),
    __metadata("design:type", String)
], AtualizaPrestadorDTO.prototype, "CRLV", void 0);
//# sourceMappingURL=AtualizarPrestador.dto.js.map