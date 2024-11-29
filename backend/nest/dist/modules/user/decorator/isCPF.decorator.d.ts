import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsCPFConstraint implements ValidatorConstraintInterface {
    validate(cpf: string): boolean;
    defaultMessage(): string;
}
export declare function IsCPF(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
