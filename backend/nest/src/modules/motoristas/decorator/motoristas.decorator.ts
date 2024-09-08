import { SetMetadata } from '@nestjs/common';

export const Motoristas = (...args: string[]) => SetMetadata('motoristas', args);
