import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsDpvatConstraint implements ValidatorConstraintInterface {
    validate(dpvat: any): boolean;
    defaultMessage(): string;
}
export declare function IsDpvat(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
