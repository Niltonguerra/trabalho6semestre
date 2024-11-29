import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsCnhConstraint implements ValidatorConstraintInterface {
    validate(cnh: any, args: ValidationArguments): boolean;
    validateCnhDigits(cnh: string): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsCnh(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
