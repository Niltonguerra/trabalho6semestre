import { NestMiddleware } from '@nestjs/common';
export declare class RecomendacaoMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
