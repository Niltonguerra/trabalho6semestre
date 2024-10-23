import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Preference } from 'mercadopago';



@Injectable()
export class MercadoPagoService {


  // Função para processar o pagamento
  async processPayment(paymentData: any): Promise<any> {
    try {
      
      // const client = new MercadoPagoConfig({ accessToken: 'TEST-26cc94c2-84de-4cd6-9b67-8228a5226b14' });
      // const preference = new Preference(client);

      // preference.create({
      //   body: {
      //     items: [
      //       {
      //         title: 'Meu produto',
      //         quantity: 1,
      //         unit_price: 25,
              
      //       }
      //     ],
      //   }
      // })
      // .then(console.log)
      // .catch(console.log);
      

      
    } catch (error) {
      throw new Error(`Erro no pagamento: ${error.message}`);
    }
  }
}
