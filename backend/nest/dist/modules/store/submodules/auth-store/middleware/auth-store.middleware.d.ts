import { NestMiddleware } from '@nestjs/common';
export declare class AuthStoreMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
