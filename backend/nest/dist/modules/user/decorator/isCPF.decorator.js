"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCPF = exports.IsCPFConstraint = void 0;
const class_validator_1 = require("class-validator");
const cpf_validator_1 = require("./cpf-validator");
let IsCPFConstraint = class IsCPFConstraint {
    validate(cpf) {
        return (0, cpf_validator_1.validateCPF)(cpf);
    }
    defaultMessage() {
        return 'CPF is not valid';
    }
};
exports.IsCPFConstraint = IsCPFConstraint;
exports.IsCPFConstraint = IsCPFConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isCPF', async: false })
], IsCPFConstraint);
function IsCPF(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCPFConstraint,
        });
    };
}
exports.IsCPF = IsCPF;
//# sourceMappingURL=isCPF.decorator.js.map