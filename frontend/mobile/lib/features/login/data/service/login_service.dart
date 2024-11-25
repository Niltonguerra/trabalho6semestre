import 'package:dio/dio.dart';
import 'package:mobile/features/login/data/models/login_response_model.dart';

class LoginService {
  final Dio client;

  LoginService({required this.client});

  Future<LoginResponseModel> authenticate({
    required String email,
    required String password,
  }) async {
    try {
      final response = await client.post(
        '/auth-usuario/login',
        data: {'email': email, 'senha': password},
      );

      if (response.statusCode == 201) {
        // Retorna o modelo populado
        return LoginResponseModel.fromJson(response.data);
      } else {
        throw Exception('Erro na autenticação: ${response.statusCode}');
      }
    } on DioError catch (e) {
      throw Exception('Erro na requisição: ${e.response?.data ?? e.message}');
    }
  }
}
