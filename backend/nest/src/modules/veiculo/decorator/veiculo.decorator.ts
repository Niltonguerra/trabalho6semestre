import { SetMetadata } from '@nestjs/common';

export const Veiculo = (...args: string[]) => SetMetadata('veiculo', args);
