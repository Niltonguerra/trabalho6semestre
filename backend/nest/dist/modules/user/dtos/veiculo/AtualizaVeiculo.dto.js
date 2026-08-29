"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVeiculoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const criaVeiculo_dto_1 = require("./criaVeiculo.dto");
class UpdateVeiculoDto extends (0, mapped_types_1.PartialType)(criaVeiculo_dto_1.CriarVeiculoDto) {
}
exports.UpdateVeiculoDto = UpdateVeiculoDto;
//# sourceMappingURL=AtualizaVeiculo.dto.js.map