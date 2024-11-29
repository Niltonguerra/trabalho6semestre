import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsCrlvConstraint implements ValidatorConstraintInterface {
    validate(crlv: any): boolean;
    defaultMessage(): string;
}
export declare function IsCrlv(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
