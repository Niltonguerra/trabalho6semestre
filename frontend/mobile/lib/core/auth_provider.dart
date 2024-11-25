import 'package:flutter/foundation.dart';

class AuthProvider with ChangeNotifier {
  String? _token;

  String? get token => _token;

  bool get isAuthenticated => _token != null;

  void setToken(String token) {
    _token = token;
    notifyListeners(); // Notifica as mudanças para os consumidores
  }

  void clearToken() {
    _token = null;
    notifyListeners(); // Notifica os consumidores que o token foi removido
  }
}
