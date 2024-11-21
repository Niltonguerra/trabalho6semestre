import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';

class ViagemPesquisaService {
  final http.Client client;
  final String _baseUrl = const String.fromEnvironment(
    'API_URL',
    defaultValue: 'http://192.168.18.19:3100/viagem/listarTodos',
  );

  ViagemPesquisaService({required this.client});

  /// Lista todas as viagens.
  Future<List<Viagem>> listarTodasViagens() async {
    try {
      final response = await client.get(Uri.parse(_baseUrl));

      if (response.statusCode == 200) {
        return _parseViagens(response.body);
      } else {
        throw Exception('Erro ao carregar dados: StatusCode ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Erro ao carregar dados: $e');
    }
  }

  /// Faz o parse do JSON retornado pela API.
  List<Viagem> _parseViagens(String responseBody) {
    try {
      final data = json.decode(responseBody)['ListarViagemDto'] as List;
      return data.map((item) => Viagem.fromJson(item)).toList();
    } catch (e) {
      throw FormatException('Erro ao parsear dados da API: $e');
    }
  }
}
