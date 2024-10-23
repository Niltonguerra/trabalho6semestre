import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/Stripe.controller';
@Module({
  controllers: [PaymentController],
})
export class PaymentModule {}
