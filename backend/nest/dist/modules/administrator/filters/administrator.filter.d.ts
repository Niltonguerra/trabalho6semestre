import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AdministratorFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
