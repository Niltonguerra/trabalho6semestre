import 'package:dio/dio.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';

class ViagemPesquisaService {
  final Dio client;

  ViagemPesquisaService({required this.client});

  /// Lista todas as viagens.
  Future<List<Viagem>> listarTodasViagens() async {
    try {
      final response = await client.get('/viagem/listarTodos');
      if (response.statusCode == 200) {
        final data = response.data['ListarViagemDto'] as List;
        return data.map((item) => Viagem.fromJson(item)).toList();
      } else {
        throw Exception('Erro ao carregar viagens: ${response.statusCode}');
      }
    } on DioException catch (e) {
      _handleDioError(e);
       throw Exception('Erro ao realizar a requisição para trazer as viagens');
    }
  }

  /// Lida com erros específicos do Dio.
  void _handleDioError(DioException error) {
    if (error.response != null) {
      throw Exception('Erro na API: ${error.response?.data ?? 'Resposta inválida'}');
    } else {
      throw Exception('Erro de conexão: ${error.message}');
    }
  }
}
