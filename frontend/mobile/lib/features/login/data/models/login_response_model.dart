class LoginResponseModel {
  final String token;

  LoginResponseModel({required this.token});

  // Construtor para converter do JSON
  factory LoginResponseModel.fromJson(Map<String, dynamic> json) {
    return LoginResponseModel(
      token: json['token'] ?? '',
    );
  }

  // Método para converter para JSON, caso necessário
  Map<String, dynamic> toJson() {
    return {
      'token': token,
    };
  }

  @override
  String toString() {
    return 'LoginResponseModel(token: $token)';
  }
}
