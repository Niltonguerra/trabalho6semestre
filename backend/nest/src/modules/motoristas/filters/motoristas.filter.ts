import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class MotoristasFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
