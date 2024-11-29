"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPlaca = void 0;
const class_validator_1 = require("class-validator");
function IsPlaca(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isPlaca',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const placaRegex = /^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/;
                    return typeof value === 'string' && placaRegex.test(value);
                },
                defaultMessage(args) {
                    return 'A placa deve seguir o formato correto (ex: ABC1D23)';
                },
            },
        });
    };
}
exports.IsPlaca = IsPlaca;
//# sourceMappingURL=isPlaca.decorator.js.map