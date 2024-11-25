import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart'; // Certifique-se de importar o provider corretamente
import 'package:mobile/core/auth_provider.dart';
import 'package:mobile/features/login/data/models/login_response_model.dart';
import 'package:mobile/features/login/data/repositories/login_repository.dart';

class LoginViewModel with ChangeNotifier {
  final LoginRepository repository;

  LoginViewModel({required this.repository});

  bool _isLoading = false;
  String? _errorMessage;
  LoginResponseModel? _response;
  String? _token;

  bool get isLoading => _isLoading;
  String? get errorMessage => _errorMessage;
  LoginResponseModel? get response => _response;

  String get token => _token ?? '';

  /// Realiza o login do usuário.
  Future<bool> login({
    required String email,
    required String password,
    required BuildContext context, // Passar o contexto para acessar o AuthProvider
  }) async {
    _setLoadingState(true);
    _errorMessage = null;

    try {
      final response = await repository.authenticate(email: email, password: password);
      _handleLoginResponse(response, context);
      return true;
    } catch (e) {
      _errorMessage = 'Erro ao fazer login: $e';
      notifyListeners();
      return false;
    } finally {
      _setLoadingState(false);
    }
  }

  void clearToken() {
    _token = null;
    notifyListeners();
  }

  void _setLoadingState(bool isLoading) {
    _isLoading = isLoading;
    notifyListeners();
  }

  void _handleLoginResponse(LoginResponseModel response, BuildContext context) {
    if (response.token != null && response.token!.isNotEmpty) {
      _response = response;
      _token = response.token;

      // Usa o Provider para obter o AuthProvider
      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      authProvider.setToken(response.token!);
    } else {
      throw Exception('Token ausente ou inválido na resposta.');
    }

    notifyListeners();
  }
}
