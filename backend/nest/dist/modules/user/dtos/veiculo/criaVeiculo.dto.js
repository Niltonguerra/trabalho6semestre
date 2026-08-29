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
exports.CriarVeiculoDto = void 0;
const class_validator_1 = require("class-validator");
const isPlaca_decorator_1 = require("../../decorator/isPlaca.decorator");
class CriarVeiculoDto {
}
exports.CriarVeiculoDto = CriarVeiculoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, isPlaca_decorator_1.IsPlaca)({ message: 'A placa deve seguir o formato correto (ex: ABC1D23)' }),
    __metadata("design:type", String)
], CriarVeiculoDto.prototype, "placa", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriarVeiculoDto.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriarVeiculoDto.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CriarVeiculoDto.prototype, "ano", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'A foto deve ser uma URL válida' }),
    __metadata("design:type", String)
], CriarVeiculoDto.prototype, "foto", void 0);
//# sourceMappingURL=criaVeiculo.dto.js.map