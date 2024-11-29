import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsRgConstraint implements ValidatorConstraintInterface {
    validate(rg: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsRg(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
