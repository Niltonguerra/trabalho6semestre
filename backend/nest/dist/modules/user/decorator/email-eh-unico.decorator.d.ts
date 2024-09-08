import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../services/user.service';
export declare class EmailEhUnicoValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function EmailEhUnico(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
