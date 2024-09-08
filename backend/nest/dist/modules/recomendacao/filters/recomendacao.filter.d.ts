import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class RecomendacaoFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
