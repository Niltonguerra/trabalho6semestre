import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
export declare class WebhookController {
    private configService;
    private stripe;
    private endpointSecret;
    constructor(configService: ConfigService);
    handleWebhook(req: Request, res: Response, body: any): Promise<Response<any, Record<string, any>>>;
}
