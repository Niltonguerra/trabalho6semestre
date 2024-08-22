
Future<bool> loginUseCase({required String email, required String password}) async {
  if (email.isEmpty || password.isEmpty) {
    return false;
  }

  try {
    // final response = await AuthRepository.login(email, password);
    // return response.statusCode == 200;
    return true; // Simula um login bem-sucedido
  } catch (e) {
    return false;
  }
}
