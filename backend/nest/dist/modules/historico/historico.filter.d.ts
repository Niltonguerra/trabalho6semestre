import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class HistoricoFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
