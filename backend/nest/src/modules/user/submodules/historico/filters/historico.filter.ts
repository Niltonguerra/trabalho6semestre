import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HistoricoFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
