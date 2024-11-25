import 'package:dio/dio.dart';
import 'package:mobile/features/usuario/domain/entities/dono_usuario_entity.dart';
import 'package:mobile/features/usuario/domain/entities/prestador_entity.dart';





class ListarUsuarioService {
  final Dio client;

  ListarUsuarioService({required this.client});

  /// Cria os cabeçalhos padrão com autorização
  Map<String, String> _createHeaders(String token) {
    return {
      'Authorization': 'Bearer $token',
      'Content-Type': 'application/json',
    };
  }

  /// Faz a requisição para buscar detalhes do prestador por nome
  Future<Prestador> fetchUsuarioPorNome(String nome, String token) async {
    try {
      final response = await client.get(
        '/prestador/search/nome/$nome/1',
        options: Options(headers: _createHeaders(token)),
      );

      if (response.statusCode == 200) {
        final data = response.data['resultado'] as List;

        if (data.isNotEmpty) {
          return Prestador.fromJson(data[0]);
        } else {
          throw Exception('Prestador não encontrado para o nome fornecido.');
        }
      } else {
        throw Exception(
          'Erro ao buscar prestador: Código ${response.statusCode} - ${response.statusMessage ?? 'Sem mensagem'}',
        );
      }
    } on DioException catch (e) {
      final errorMessage = e.response?.data?['message'] ?? e.message;
      throw Exception(
          'Erro na requisição fetchPrestadorPorNome: $errorMessage');
    }
  }


    /// Faz a requisição para buscar detalhes do prestador por nome
  Future<UsuarioDono> fetchUsuarioDono(String token) async {
    try {
      final response = await client.get(
        '/prestador/read',
        options: Options(headers: _createHeaders(token)),
      );

      if (response.statusCode == 200) {
        final data = response.data['Prestador'];

        if (data.isNotEmpty) {
          return UsuarioDono.fromJson(data);
        } else {
          throw Exception('Prestador não encontrado para o nome fornecido.');
        }
      } else {
        throw Exception(
          'Erro ao buscar prestador: Código ${response.statusCode} - ${response.statusMessage ?? 'Sem mensagem'}',
        );
      }
    } on DioException catch (e) {
      final errorMessage = e.response?.data?['message'] ?? e.message;
      throw Exception(
          'Erro na requisição: $errorMessage');
    }
  }
}
