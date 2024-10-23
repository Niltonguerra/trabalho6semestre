export class PaymentDTO {
  readonly transaction_amount: number;
  readonly token: string;
  readonly description: string;
  readonly installments: number;
  readonly payment_method_id: string;
  readonly payer: {
    email: string;
  };
}
