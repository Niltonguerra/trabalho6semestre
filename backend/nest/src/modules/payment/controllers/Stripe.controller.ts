import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import Stripe from 'stripe';

@Controller('payment')
export class PaymentController {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('', { apiVersion: '2024-09-30.acacia' }); // sua chave secreta
  }

  @Post('create-payment-intent')
  async createPaymentIntent(
    @Body() body: { amount: number; currency: string },
    @Res() res: Response
  ) {
    const { amount, currency } = body;

    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
      });

      return res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}
