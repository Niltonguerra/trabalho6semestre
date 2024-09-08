import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class VeiculoFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
