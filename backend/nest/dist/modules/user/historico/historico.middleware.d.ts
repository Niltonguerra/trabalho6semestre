import { NestMiddleware } from '@nestjs/common';
export declare class HistoricoMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
