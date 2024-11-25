import 'package:dio/dio.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';

class ViagemDetalhesService {
  final Dio client;

  ViagemDetalhesService({required this.client});

  /// Cria os cabeçalhos padrão com autorização
  Map<String, String> _createHeaders(String token) {
    return {
      'Authorization': 'Bearer $token',
      'Content-Type': 'application/json',
    };
  }

  /// Faz a requisição para buscar detalhes da viagem
  Future<Viagem> fetchViagem(String idViagem, String token) async {
    try {
      final response = await client.post(
        '/viagens/listaUmaViagem',
        data: {'idViagem': idViagem},
        options: Options(headers: _createHeaders(token)),
      );

      if (response.statusCode == 201) {
        final data = response.data['ListarViagemDto'];
        return Viagem.fromJson(data);
      } else {
        throw Exception(
          'Erro ao buscar viagem: Código ${response.statusCode} - ${response.statusMessage ?? 'Sem mensagem'}',
        );
      }
    } on DioException catch (e) {
      final errorMessage = e.response?.data?['message'] ?? e.message;
      throw Exception('Erro na requisição fetchViagem: $errorMessage');
    }
  }

}
