import { CriarPagamentoDto } from '../dtos/Payment.dto';
import { PaymentService } from '../services/payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPaymentIntent(body: CriarPagamentoDto): Promise<{
        clientSecret: string;
    }>;
}
