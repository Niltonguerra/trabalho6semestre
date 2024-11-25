import 'package:mobile/features/login/data/models/login_response_model.dart';
import 'package:mobile/features/login/data/service/login_service.dart';

class LoginRepository {
  final LoginService service;

  LoginRepository({required this.service});

  Future<LoginResponseModel> authenticate({
    required String email,
    required String password,
  }) async {
    try {
      return await service.authenticate(email: email, password: password);
    } catch (e) {
      throw Exception('Erro no repositório: $e');
    }
  }
}
