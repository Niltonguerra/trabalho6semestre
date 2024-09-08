import { SetMetadata } from '@nestjs/common';

export const Historico = (...args: string[]) => SetMetadata('historico', args);
