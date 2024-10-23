import 'dart:convert';
import 'package:http/http.dart' as http;


class MercadoPagoService {
  final String clientId = 'YOUR_CLIENT_ID';
  final String clientSecret = 'YOUR_CLIENT_SECRET';
  final String baseUrl = 'https://api.mercadopago.com';

  Future<String> getAccessToken() async {
    final response = await http.post(
      Uri.parse('$baseUrl/oauth/token'),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: {
        'grant_type': 'client_credentials',
        'client_id': clientId,
        'client_secret': clientSecret,
      },
    );
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data ['access_token'];
    } else {
      throw Exception('Failed to get access token');
    }
  }

  Future<void> createPayment(String accessToken, Map<String, dynamic> paymentData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/v1/payments'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $accessToken',
      },
      body: json.encode(paymentData),
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to create payment');
    }
  }
}
