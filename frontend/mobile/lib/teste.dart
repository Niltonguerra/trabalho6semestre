import 'package:flutter/material.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PaymentPage extends StatefulWidget {
  @override
  _PaymentPageState createState() => _PaymentPageState();
}

class _PaymentPageState extends State<PaymentPage> {
  Map<String, dynamic>? paymentIntentData;

  Future<void> makePayment() async {
    try {
      // Cria um Payment Intent no backend
      paymentIntentData = await createPaymentIntent('1000', 'usd'); // montante e moeda
      
      // Inicializa a folha de pagamento do Stripe
      await Stripe.instance.initPaymentSheet(
        paymentSheetParameters: SetupPaymentSheetParameters(
          paymentIntentClientSecret: paymentIntentData!['clientSecret'],
          applePay: true,
          googlePay: true,
          style: ThemeMode.light,
          merchantDisplayName: 'Your App Name',
        ),
      );

      // Exibe a folha de pagamento
      displayPaymentSheet();
    } catch (e) {
      print('Error: $e');
    }
  }

  displayPaymentSheet() async {
    try {
      await Stripe.instance.presentPaymentSheet();
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Payment successful")));
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Payment failed")));
    }
  }

  // Função para criar um Payment Intent chamando seu backend
  Future<Map<String, dynamic>> createPaymentIntent(String amount, String currency) async {
    try {
      final response = await http.post(
        Uri.parse('https://your-backend-url.com/create-payment-intent'),
        body: {'amount': amount, 'currency': currency},
        headers: {'Content-Type': 'application/json'},
      );
      return jsonDecode(response.body);
    } catch (err) {
      throw Exception('Error creating payment intent: $err');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stripe Payment'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            await makePayment();
          },
          child: Text('Pay'),
        ),
      ),
    );
  }
}
