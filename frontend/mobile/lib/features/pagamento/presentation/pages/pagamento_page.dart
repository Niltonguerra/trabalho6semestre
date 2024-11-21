// import 'package:flutter/material.dart';
// import 'package:flutter_stripe/flutter_stripe.dart';
// import 'package:http/http.dart' as http;
// import 'dart:convert';

// class PaymentPage extends StatefulWidget {
//   @override
//   _PaymentPageState createState() => _PaymentPageState();
// }

// class _PaymentPageState extends State<PaymentPage> {
//  Future<void> makePayment() async {
//     print('Botão pressionado!');

//     // 1. Faça a requisição para criar a intenção de pagamento
//     final response = await http.post(
//       Uri.parse('http://192.168.18.64:3100/payment/create-payment-intent'),
//       headers: {'Content-Type': 'application/json'},
//       body: json.encode({'amount': 50, 'currency': 'brl','idempotencyKey': 'nasodnafrkle203j308u49'}),
//     );

//     // Verifique se a resposta foi bem-sucedida
//     if (response.statusCode == 201) {
//       final jsonResponse = json.decode(response.body);
//       final clientSecret = jsonResponse['clientSecret'];

//       print('enviou a requisição!');

//       // 2. Inicialize a folha de pagamento com o clientSecret
//       await Stripe.instance.initPaymentSheet(
//         paymentSheetParameters: SetupPaymentSheetParameters(
//           paymentIntentClientSecret: clientSecret,
//           merchantDisplayName: 'Move Smart',
//         ),
//       );

//       // 3. Exiba a folha de pagamento
//       try {
//         await Stripe.instance.presentPaymentSheet();
//         ScaffoldMessenger.of(context).showSnackBar(
//           SnackBar(content: Text("Pagamento bem-sucedido!")),
//         );
//       } catch (e) {
//         ScaffoldMessenger.of(context).showSnackBar(
//           SnackBar(content: Text("Erro ao processar pagamento: $e")),
//         );
//       }
//     } else {
//       // Tratamento de erro caso a requisição falhe
//       ScaffoldMessenger.of(context).showSnackBar(
//         SnackBar(content: Text("Erro ao criar intenção de pagamento")),
//       );
//     }
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text("Pagamento")),
//       body: Center(
//         child: ElevatedButton(
//           onPressed: makePayment,
//           child: Text("Pagar 0,4 reais"),
          
//         ),
//       ),
//     );
//   }
// }
