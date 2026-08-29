"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCnh = exports.IsCnhConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsCnhConstraint = class IsCnhConstraint {
    validate(cnh, args) {
        if (typeof cnh !== 'string') {
            return false;
        }
        const cnhRegex = /^[0-9]{11}$/;
        return cnhRegex.test(cnh) && this.validateCnhDigits(cnh);
    }
    validateCnhDigits(cnh) {
        const dsc = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < 9; i++) {
            sum1 += Number(cnh[i]) * (9 - i);
            sum2 += Number(cnh[i]) * dsc[i];
        }
        let mod1 = sum1 % 11;
        let mod2 = (sum2 + 2 * mod1) % 11;
        return (mod1 < 10 ? mod1 : 0) === Number(cnh[9]) && (mod2 < 10 ? mod2 : 0) === Number(cnh[10]);
    }
    defaultMessage(args) {
        return 'CNH ($value) inválida. Deve conter 11 dígitos e ser válida.';
    }
};
exports.IsCnhConstraint = IsCnhConstraint;
exports.IsCnhConstraint = IsCnhConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsCnhConstraint);
function IsCnh(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCnhConstraint,
        });
    };
}
exports.IsCnh = IsCnh;
//# sourceMappingURL=isCNH.decorator.js.map