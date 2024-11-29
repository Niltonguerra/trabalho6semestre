"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDpvat = exports.IsDpvatConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsDpvatConstraint = class IsDpvatConstraint {
    validate(dpvat) {
        const dpvatRegex = /^\d{11}$/;
        return typeof dpvat === 'string' && dpvatRegex.test(dpvat);
    }
    defaultMessage() {
        return 'O número do DPVAT deve ser uma string de 11 dígitos.';
    }
};
exports.IsDpvatConstraint = IsDpvatConstraint;
exports.IsDpvatConstraint = IsDpvatConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsDpvatConstraint);
function IsDpvat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsDpvatConstraint,
        });
    };
}
exports.IsDpvat = IsDpvat;
//# sourceMappingURL=isDpvat.decorator.js.map