import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_model.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_resposta_model.dart';

class CadastroUsuarioService {
  final Dio client;

  CadastroUsuarioService({required this.client});

  /// Cadastra um usuário e retorna o statusCode e a mensagem.
  Future<ApiResponse> cadastrarUsuario(UsuarioCriarModel usuario) async {
    try {
      final response = await client.post(
        '/usuario/validaCadastro',
        data: usuario.toJson(),
        options: Options(headers: {'Content-Type': 'application/json'}),
      );

      if (response.statusCode == 201) {
        // Retorna o statusCode e a mensagem de sucesso
        return ApiResponse(
          mensagem: response.data['mensagem'] ?? 'Cadastro realizado com sucesso',
          statusCode: response.statusCode!,
        );
      } else {
        // Trata outros status de erro
        throw Exception('Erro ao cadastrar: ${response.statusCode}');
      }
    } on DioException catch (e) {
      // Trata mensagens específicas de erro retornadas pelo servidor
      if (e.response?.data != null && e.response?.data['message'] != null) {
        final mensagens = e.response!.data['message'];
        final mensagemFormatada = mensagens is List ? mensagens.join(', ') : mensagens.toString();

        return ApiResponse(
          mensagem: mensagemFormatada,
          statusCode: e.response?.statusCode ?? 500,
        );
      }
      // Retorna uma mensagem genérica caso o erro não esteja no formato esperado
      return ApiResponse(
        mensagem: 'Erro inesperado: ${e.message}',
        statusCode: 500,
      );
    }
  }
}
